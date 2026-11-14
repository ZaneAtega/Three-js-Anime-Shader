#include <common>
#include <skinning_pars_vertex>
#include <morphtarget_pars_vertex>

uniform int morphTextureStride; // geometry.morphAttributes - position: 1, normal: 2, color: 3

vec3 getMorph2(const in int vertexIndex, const in int morphTargetIndex, const in int offset) {
	int texelIndex = vertexIndex * int(morphTextureStride) + offset;
	int width = int(morphTargetsTextureSize.x);

	int y = texelIndex / width;
	int x = texelIndex - y * width;

	ivec3 morphUV = ivec3(x, y, morphTargetIndex);
	return texelFetch(morphTargetsTexture, morphUV, 0).xyz;
}

attribute vec4 tangent;

varying vec2 vUv;
varying vec2 vUv2;

varying vec4 vViewPos;
varying vec3 vViewDir;

varying vec3 vNormal;
varying vec3 vTangent;
varying vec3 vBitangent;

#ifdef IS_OUTLINE
uniform float outlineWidth;
#endif

void main() {
	#include <beginnormal_vertex>

	for (int i = 0; i < MORPHTARGETS_COUNT; i++) { // morphnormal_vertex
		if (morphTargetInfluences[i] > 0.0) objectNormal += getMorph2(gl_VertexID, i, 1) * morphTargetInfluences[i];
	}

	#include <begin_vertex>
#ifdef IS_OUTLINE
	transformed = vec3(position + normal * outlineWidth);
#endif

	for (int i = 0; i < MORPHTARGETS_COUNT; i++) { // morphtarget_vertex
		if (morphTargetInfluences[i] > 0.0) transformed += getMorph2(gl_VertexID, i, 0) * morphTargetInfluences[i];
	}

	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <skinning_vertex>

	vUv = uv;
	vUv2 = uv2;

	vec4 modelPosition = modelMatrix * vec4(transformed, 1.0);
	vViewPos = viewMatrix * modelPosition;
	vViewDir = normalize(-vViewPos.xyz);

	vNormal = normalize(normalMatrix * objectNormal);
	vTangent = normalize(normalMatrix * tangent.xyz);
	vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);

	gl_Position = projectionMatrix * vViewPos;
}