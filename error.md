Navigated to http://localhost:5173/
chunk-KDCVS43I.js?v=e3644f05:21609 Download the React DevTools for a better development experience: https://reactjs.org/link/react-devtools
CookieBanner.tsx:45 🍪 CookieBanner: Banner oculto, no renderizando
CookieBanner.tsx:45 🍪 CookieBanner: Banner oculto, no renderizando
CookieBanner.tsx:52 Uncaught TypeError: Cannot convert undefined or null to object
    at Object.keys (<anonymous>)
    at CookieBanner (CookieBanner.tsx:52:24)
    at renderWithHooks (chunk-KDCVS43I.js?v=e3644f05:11596:26)
    at updateFunctionComponent (chunk-KDCVS43I.js?v=e3644f05:14630:28)
    at beginWork (chunk-KDCVS43I.js?v=e3644f05:15972:22)
    at HTMLUnknownElement.callCallback2 (chunk-KDCVS43I.js?v=e3644f05:3680:22)
    at Object.invokeGuardedCallbackDev (chunk-KDCVS43I.js?v=e3644f05:3705:24)
    at invokeGuardedCallback (chunk-KDCVS43I.js?v=e3644f05:3739:39)
    at beginWork$1 (chunk-KDCVS43I.js?v=e3644f05:19818:15)
    at performUnitOfWork (chunk-KDCVS43I.js?v=e3644f05:19251:20)
CookieBanner @ CookieBanner.tsx:52
renderWithHooks @ chunk-KDCVS43I.js?v=e3644f05:11596
updateFunctionComponent @ chunk-KDCVS43I.js?v=e3644f05:14630
beginWork @ chunk-KDCVS43I.js?v=e3644f05:15972
callCallback2 @ chunk-KDCVS43I.js?v=e3644f05:3680
invokeGuardedCallbackDev @ chunk-KDCVS43I.js?v=e3644f05:3705
invokeGuardedCallback @ chunk-KDCVS43I.js?v=e3644f05:3739
beginWork$1 @ chunk-KDCVS43I.js?v=e3644f05:19818
performUnitOfWork @ chunk-KDCVS43I.js?v=e3644f05:19251
workLoopSync @ chunk-KDCVS43I.js?v=e3644f05:19190
renderRootSync @ chunk-KDCVS43I.js?v=e3644f05:19169
performConcurrentWorkOnRoot @ chunk-KDCVS43I.js?v=e3644f05:18728
workLoop @ chunk-KDCVS43I.js?v=e3644f05:197
flushWork @ chunk-KDCVS43I.js?v=e3644f05:176
performWorkUntilDeadline @ chunk-KDCVS43I.js?v=e3644f05:384
CookieBanner.tsx:52 Uncaught TypeError: Cannot convert undefined or null to object
    at Object.keys (<anonymous>)
    at CookieBanner (CookieBanner.tsx:52:24)
    at renderWithHooks (chunk-KDCVS43I.js?v=e3644f05:11596:26)
    at updateFunctionComponent (chunk-KDCVS43I.js?v=e3644f05:14630:28)
    at beginWork (chunk-KDCVS43I.js?v=e3644f05:15972:22)
    at HTMLUnknownElement.callCallback2 (chunk-KDCVS43I.js?v=e3644f05:3680:22)
    at Object.invokeGuardedCallbackDev (chunk-KDCVS43I.js?v=e3644f05:3705:24)
    at invokeGuardedCallback (chunk-KDCVS43I.js?v=e3644f05:3739:39)
    at beginWork$1 (chunk-KDCVS43I.js?v=e3644f05:19818:15)
    at performUnitOfWork (chunk-KDCVS43I.js?v=e3644f05:19251:20)
CookieBanner @ CookieBanner.tsx:52
renderWithHooks @ chunk-KDCVS43I.js?v=e3644f05:11596
updateFunctionComponent @ chunk-KDCVS43I.js?v=e3644f05:14630
beginWork @ chunk-KDCVS43I.js?v=e3644f05:15972
callCallback2 @ chunk-KDCVS43I.js?v=e3644f05:3680
invokeGuardedCallbackDev @ chunk-KDCVS43I.js?v=e3644f05:3705
invokeGuardedCallback @ chunk-KDCVS43I.js?v=e3644f05:3739
beginWork$1 @ chunk-KDCVS43I.js?v=e3644f05:19818
performUnitOfWork @ chunk-KDCVS43I.js?v=e3644f05:19251
workLoopSync @ chunk-KDCVS43I.js?v=e3644f05:19190
renderRootSync @ chunk-KDCVS43I.js?v=e3644f05:19169
recoverFromConcurrentError @ chunk-KDCVS43I.js?v=e3644f05:18786
performConcurrentWorkOnRoot @ chunk-KDCVS43I.js?v=e3644f05:18734
workLoop @ chunk-KDCVS43I.js?v=e3644f05:197
flushWork @ chunk-KDCVS43I.js?v=e3644f05:176
performWorkUntilDeadline @ chunk-KDCVS43I.js?v=e3644f05:384
chunk-KDCVS43I.js?v=e3644f05:14080 The above error occurred in the <CookieBanner> component:

    at CookieBanner (http://localhost:5173/src/components/CookieBanner.tsx?t=1757106508322:30:7)
    at div
    at Router (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=e3644f05:6300:13)
    at BrowserRouter (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=e3644f05:9401:3)
    at AuthProvider (http://localhost:5173/src/contexts/AuthContext.tsx:29:32)
    at App

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
logCapturedError @ chunk-KDCVS43I.js?v=e3644f05:14080
update.callback @ chunk-KDCVS43I.js?v=e3644f05:14100
callCallback @ chunk-KDCVS43I.js?v=e3644f05:11296
commitUpdateQueue @ chunk-KDCVS43I.js?v=e3644f05:11313
commitLayoutEffectOnFiber @ chunk-KDCVS43I.js?v=e3644f05:17141
commitLayoutMountEffects_complete @ chunk-KDCVS43I.js?v=e3644f05:18030
commitLayoutEffects_begin @ chunk-KDCVS43I.js?v=e3644f05:18019
commitLayoutEffects @ chunk-KDCVS43I.js?v=e3644f05:17970
commitRootImpl @ chunk-KDCVS43I.js?v=e3644f05:19406
commitRoot @ chunk-KDCVS43I.js?v=e3644f05:19330
finishConcurrentRender @ chunk-KDCVS43I.js?v=e3644f05:18813
performConcurrentWorkOnRoot @ chunk-KDCVS43I.js?v=e3644f05:18768
workLoop @ chunk-KDCVS43I.js?v=e3644f05:197
flushWork @ chunk-KDCVS43I.js?v=e3644f05:176
performWorkUntilDeadline @ chunk-KDCVS43I.js?v=e3644f05:384
chunk-KDCVS43I.js?v=e3644f05:19466 Uncaught TypeError: Cannot convert undefined or null to object
    at Object.keys (<anonymous>)
    at CookieBanner (CookieBanner.tsx:52:24)
    at renderWithHooks (chunk-KDCVS43I.js?v=e3644f05:11596:26)
    at updateFunctionComponent (chunk-KDCVS43I.js?v=e3644f05:14630:28)
    at beginWork (chunk-KDCVS43I.js?v=e3644f05:15972:22)
    at beginWork$1 (chunk-KDCVS43I.js?v=e3644f05:19806:22)
    at performUnitOfWork (chunk-KDCVS43I.js?v=e3644f05:19251:20)
    at workLoopSync (chunk-KDCVS43I.js?v=e3644f05:19190:13)
    at renderRootSync (chunk-KDCVS43I.js?v=e3644f05:19169:15)
    at recoverFromConcurrentError (chunk-KDCVS43I.js?v=e3644f05:18786:28)
CookieBanner @ CookieBanner.tsx:52
renderWithHooks @ chunk-KDCVS43I.js?v=e3644f05:11596
updateFunctionComponent @ chunk-KDCVS43I.js?v=e3644f05:14630
beginWork @ chunk-KDCVS43I.js?v=e3644f05:15972
beginWork$1 @ chunk-KDCVS43I.js?v=e3644f05:19806
performUnitOfWork @ chunk-KDCVS43I.js?v=e3644f05:19251
workLoopSync @ chunk-KDCVS43I.js?v=e3644f05:19190
renderRootSync @ chunk-KDCVS43I.js?v=e3644f05:19169
recoverFromConcurrentError @ chunk-KDCVS43I.js?v=e3644f05:18786
performConcurrentWorkOnRoot @ chunk-KDCVS43I.js?v=e3644f05:18734
workLoop @ chunk-KDCVS43I.js?v=e3644f05:197
flushWork @ chunk-KDCVS43I.js?v=e3644f05:176
performWorkUntilDeadline @ chunk-KDCVS43I.js?v=e3644f05:384
