#include <common>
#include <skinning_pars_vertex>
// #include <shadowmap_pars_vertex>
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

varying vec2 vUv;
varying vec2 vUv2;
varying vec3 vNormal;
varying vec4 vViewPos;
varying vec3 vViewDir;

uniform bool isOutline;
uniform float outlineThickness;

void main() {
	#include <beginnormal_vertex>

	for (int i = 0; i < MORPHTARGETS_COUNT; i++) { // morphnormal_vertex
		if (morphTargetInfluences[i] > 0.0) objectNormal += getMorph2(gl_VertexID, i, 1) * morphTargetInfluences[i];
	}

	#include <defaultnormal_vertex>

	#include <begin_vertex>
	if (isOutline) transformed = vec3(position + normal * outlineThickness);

	for (int i = 0; i < MORPHTARGETS_COUNT; i++) { // morphtarget_vertex
		if (morphTargetInfluences[i] > 0.0) transformed += getMorph2(gl_VertexID, i, 0) * morphTargetInfluences[i];
	}

	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <skinning_vertex>

	#include <worldpos_vertex>
	// #include <shadowmap_vertex>

	vUv = uv;
	vUv2 = uv2;

	vNormal = normalize(normalMatrix * objectNormal);

	vec4 modelPosition = modelMatrix * vec4(transformed, 1.0);
	vViewPos = viewMatrix * modelPosition;
	vViewDir = normalize(-vViewPos.xyz);

	vec4 clipPosition = projectionMatrix * vViewPos;
	gl_Position = clipPosition;
}