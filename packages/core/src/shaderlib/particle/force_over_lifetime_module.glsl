#if defined(RENDERER_FOL_CONSTANT_MODE) || defined(RENDERER_FOL_CURVE_MODE)
    #define _FOL_MODULE_ENABLED
#endif

#ifdef _FOL_MODULE_ENABLED
    attribute vec4 a_Random2;

    uniform int renderer_FOLSpace;

    #ifdef RENDERER_FOL_CONSTANT_MODE
        uniform vec3 renderer_FOLMaxConst;

        #ifdef RENDERER_FOL_IS_RANDOM_TWO
            uniform vec3 renderer_FOLMinConst;
        #endif

    #endif

    #ifdef RENDERER_FOL_CURVE_MODE
        uniform vec2 renderer_FOLMaxGradientX[4];
        uniform vec2 renderer_FOLMaxGradientY[4];
        uniform vec2 renderer_FOLMaxGradientZ[4];

        #ifdef RENDERER_FOL_IS_RANDOM_TWO
            uniform vec2 renderer_FOLMinGradientX[4];
            uniform vec2 renderer_FOLMinGradientY[4];
            uniform vec2 renderer_FOLMinGradientZ[4];
        #endif
    #endif

    // (tHat - t1) * (tHat - t1) * (tHat - t1) * (a2 - a1) / ((t2 - t1) * 6.0) + a1 * (tHat - t1) * (tHat - t1) * 0.5 + v1 * (tHat - t1);
    // to * to * to * (a2 - a1) / (tr * 6.0) + a1 * to * to * 0.5 + v1 * to;
    float computeDisplacementIntegral(in float to, in float tr, in float a1, in float a2, in float v1) {
        return to * to * to * (a2 - a1) / (tr * 6.0) + a1 * to * to * 0.5 + v1 * to;
    }

    float evaluateForceParticleCurveCumulative(in vec2 keys[4], in float normalizedAge, out float currentVelocity) {
        float cumulativeValue = 0.0;
        currentVelocity = 0.0;

        for (int i = 1; i < 4; i++){
            vec2 key = keys[i];
            vec2 lastKey = keys[i - 1];

            float normalizedTimeRange = key.x - lastKey.x;
            float timeRange = normalizedTimeRange * a_ShapePositionStartLifeTime.w;
            if (key.x >= normalizedAge){
                float timeOffset = (normalizedAge - lastKey.x) * a_ShapePositionStartLifeTime.w;
                cumulativeValue += computeDisplacementIntegral(timeOffset, timeRange, lastKey.y, key.y, currentVelocity);

                float normalizedTimeOffset = normalizedAge - lastKey.x;
                float acceleration = mix(lastKey.y, key.y, normalizedTimeOffset / normalizedTimeRange);
                currentVelocity += 0.5 * normalizedTimeOffset * (lastKey.y + acceleration);
                break;
            } else {  
                cumulativeValue += computeDisplacementIntegral(timeRange, timeRange, lastKey.y, key.y, currentVelocity);
                currentVelocity += 0.5 * normalizedTimeRange * (lastKey.y + key.y);
            }
        }
        return cumulativeValue;
    }

    vec3 computeForcePositionOffset(in float normalizedAge, in float age, out vec3 currentVelocity) {
        vec3 forcePosition;

        #if defined(RENDERER_FOL_CONSTANT_MODE)
            vec3 forceAcceleration = renderer_FOLMaxConst;

            #ifdef RENDERER_FOL_IS_RANDOM_TWO
                forceAcceleration = mix(renderer_FOLMinConst, forceAcceleration, vec3(a_Random2.x, a_Random2.y, a_Random2.z));
            #endif

            currentVelocity = forceAcceleration * age;

            forcePosition = 0.5 * forceAcceleration * age * age;
        #elif defined(RENDERER_FOL_CURVE_MODE)
            forcePosition = vec3(
                evaluateForceParticleCurveCumulative(renderer_FOLMaxGradientX, normalizedAge, currentVelocity.x),
                evaluateForceParticleCurveCumulative(renderer_FOLMaxGradientY, normalizedAge, currentVelocity.y),
                evaluateForceParticleCurveCumulative(renderer_FOLMaxGradientZ, normalizedAge, currentVelocity.z)
            );
            #ifdef RENDERER_FOL_IS_RANDOM_TWO
                vec3 minCurrentVelocity;

                forcePosition = vec3(
                    mix(evaluateForceParticleCurveCumulative(renderer_FOLMinGradientX, normalizedAge, minCurrentVelocity.x), forcePosition.x, a_Random2.x),
                    mix(evaluateForceParticleCurveCumulative(renderer_FOLMinGradientY, normalizedAge, minCurrentVelocity.y), forcePosition.y, a_Random2.y),
                    mix(evaluateForceParticleCurveCumulative(renderer_FOLMinGradientZ, normalizedAge, minCurrentVelocity.z), forcePosition.z, a_Random2.z)
                );

                currentVelocity = mix(minCurrentVelocity, currentVelocity, vec3(a_Random2.x, a_Random2.y, a_Random2.z));
            #endif
        #endif
        return forcePosition;
    }
#endif