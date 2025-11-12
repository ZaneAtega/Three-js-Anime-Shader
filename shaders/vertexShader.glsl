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
varying vec3 vNormal;
varying vec3 vNormalTransformed;
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
	if(isOutline) transformed = vec3(position + normal * outlineThickness);

	for (int i = 0; i < MORPHTARGETS_COUNT; i++) { // morphtarget_vertex
		if (morphTargetInfluences[i] > 0.0) transformed += getMorph2(gl_VertexID, i, 0) * morphTargetInfluences[i];
	}

	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <skinning_vertex>

	#include <worldpos_vertex>
	// #include <shadowmap_vertex>

	vUv = uv;

	vec4 modelPosition = modelMatrix * vec4(transformed, 1.0);
	vec4 viewPosition = viewMatrix * modelPosition;
	vec4 clipPosition = projectionMatrix * viewPosition;

	vNormal = normalize(normalMatrix * objectNormal);
	vNormalTransformed = normalize(normalMatrix * transformedNormal);
	vViewDir = normalize(-viewPosition.xyz);

	gl_Position = clipPosition;
}