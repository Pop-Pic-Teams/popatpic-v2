(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/src/admin/AdminDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminDashboard",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-x.js [app-client] (ecmascript) <export default as UserX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$power$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Power$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/power.js [app-client] (ecmascript) <export default as Power>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/archive.js [app-client] (ecmascript) <export default as Archive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-client] (ecmascript) <export default as PieChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$frames$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/frames.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$admin$2f$AdminSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/admin/AdminSidebar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const AdminDashboard = ()=>{
    _s();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"])();
    const { currentUser, users, updateUserStatus, deleteCreator } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    // Guard: Must be logged in Admin
    const isAdmin = currentUser?.role === 'Admin';
    const [isSidebarCollapsed, setIsSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentView, setCurrentView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('overview');
    const [frames, setFrames] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$frames$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllFrames"]);
    const [auditLogs, setAuditLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$frames$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuditLogs"]);
    const [guestPhotos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$frames$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGuestPhotos"]);
    // Frame Detail Inspection View State (Requirement 5: preserves admin sidebar)
    const [selectedDetailFrame, setSelectedDetailFrame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showSlotOverlays, setShowSlotOverlays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showMockupPhotos, setShowMockupPhotos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Moderation action modal for rejection note
    const [rejectModalData, setRejectModalData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rejectionNote, setRejectionNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Delete creator confirmation modal
    const [deleteConfirmCreator, setDeleteConfirmCreator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Analytics Timeframe
    const [analyticsRange, setAnalyticsRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('7d');
    const [activeChartPoint, setActiveChartPoint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    if (!currentUser || !isAdmin) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#FDFFEB] flex flex-col items-center justify-center p-6 text-center font-sans",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-16 w-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "h-8 w-8"
                    }, void 0, false, {
                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-serif text-[#4B2E1F] mb-2",
                    children: "Restricted Access: Administrators Only"
                }, void 0, false, {
                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-[#4B2E1F]/70 max-w-sm mb-6",
                    children: "Administrator credentials are required to view this console. Please sign in with an authorized account."
                }, void 0, false, {
                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>navigate('/login'),
                    className: "rounded-lg bg-[#4B2E1F] px-6 py-2.5 text-xs font-semibold text-[#FDFFEB] shadow-xs hover:bg-[#3D2418] cursor-pointer transition-colors",
                    children: "Go to Sign In"
                }, void 0, false, {
                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/admin/AdminDashboard.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const refreshData = ()=>{
        const updated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$frames$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllFrames"])();
        setFrames(updated);
        setAuditLogs((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$frames$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuditLogs"])());
        if (selectedDetailFrame) {
            const refreshedTarget = updated.find((f)=>f.id === selectedDetailFrame.id);
            setSelectedDetailFrame(refreshedTarget || null);
        }
    };
    const handleApproveFrame = (frame)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$frames$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminModerateFrame"])(frame.id, 'approve', currentUser.id, currentUser.name);
        refreshData();
        setNotification(`Frame "${frame.name}" approved and is now active for guest photobooth sessions.`);
        setTimeout(()=>setNotification(null), 3000);
    };
    const handleOpenRejectFrame = (frame)=>{
        setRejectModalData({
            id: frame.id,
            title: `Reject Frame: ${frame.name}`
        });
        setRejectionNote('');
    };
    const handleConfirmRejection = (e)=>{
        e.preventDefault();
        if (!rejectModalData) return;
        if (!rejectionNote.trim()) {
            alert('A rejection reason note is required.');
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$frames$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminModerateFrame"])(rejectModalData.id, 'reject', currentUser.id, currentUser.name, rejectionNote);
        setNotification(`Frame rejected with reason note sent to creator.`);
        refreshData();
        setRejectModalData(null);
        setRejectionNote('');
        setTimeout(()=>setNotification(null), 3500);
    };
    const handleToggleFrameActive = (frame)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$frames$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminModerateFrame"])(frame.id, 'toggle_active', currentUser.id, currentUser.name);
        refreshData();
        setNotification(`Visibility for "${frame.name}" updated.`);
        setTimeout(()=>setNotification(null), 2500);
    };
    const handleArchiveFrame = (frame)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$frames$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminModerateFrame"])(frame.id, 'archive', currentUser.id, currentUser.name);
        refreshData();
        setNotification(`Frame "${frame.name}" archived.`);
        setTimeout(()=>setNotification(null), 2500);
    };
    const handleDeleteFrame = (frame)=>{
        if (confirm(`Apakah Anda yakin ingin menghapus frame "${frame.name}" secara permanen?`)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$frames$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminDeleteFrame"])(frame.id);
            if (selectedDetailFrame?.id === frame.id) {
                setSelectedDetailFrame(null);
            }
            refreshData();
            setNotification(`Frame "${frame.name}" berhasil dihapus secara permanen.`);
            setTimeout(()=>setNotification(null), 3000);
        }
    };
    // Creator Account Management Actions
    const handleToggleCreatorStatus = (creator)=>{
        const isSuspended = creator.creatorStatus === 'suspended';
        const newStatus = isSuspended ? 'active' : 'suspended';
        updateUserStatus(creator.id, newStatus);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$frames$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAuditLog"])({
            id: `log_${Date.now()}`,
            adminId: currentUser.id,
            adminName: currentUser.name,
            action: isSuspended ? 'ACTIVATE_CREATOR' : 'SUSPEND_CREATOR',
            targetType: 'creator',
            targetId: creator.id,
            details: `${isSuspended ? 'Reactivated' : 'Suspended'} Creator account ${creator.name} (${creator.email}).`,
            timestamp: new Date().toISOString()
        });
        refreshData();
        setNotification(`Creator "${creator.name}" account status updated to ${isSuspended ? 'Active' : 'Suspended'}.`);
        setTimeout(()=>setNotification(null), 3000);
    };
    const handleConfirmDeleteCreator = ()=>{
        if (!deleteConfirmCreator) return;
        const targetCreator = deleteConfirmCreator;
        deleteCreator(targetCreator.id);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$frames$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAuditLog"])({
            id: `log_${Date.now()}`,
            adminId: currentUser.id,
            adminName: currentUser.name,
            action: 'DELETE_CREATOR',
            targetType: 'creator',
            targetId: targetCreator.id,
            details: `Deleted Creator account ${targetCreator.name} (${targetCreator.email}) due to policy violations.`,
            timestamp: new Date().toISOString()
        });
        refreshData();
        setDeleteConfirmCreator(null);
        setNotification(`Creator account "${targetCreator.name}" permanently deleted.`);
        setTimeout(()=>setNotification(null), 3000);
    };
    // Stats Counters
    const totalUsers = users.length;
    const creatorUsers = users.filter((u)=>u.role === 'Creator');
    const totalCreators = creatorUsers.length;
    const totalFrames = frames.length;
    const pendingFrames = frames.filter((f)=>f.status === 'pending_review');
    const pendingFramesCount = pendingFrames.length;
    const totalPhotos = guestPhotos.length;
    // Analytics Sample Data
    const trendData7d = [
        {
            label: 'Mon',
            sessions: 142,
            photos: 568
        },
        {
            label: 'Tue',
            sessions: 185,
            photos: 740
        },
        {
            label: 'Wed',
            sessions: 220,
            photos: 880
        },
        {
            label: 'Thu',
            sessions: 265,
            photos: 1060
        },
        {
            label: 'Fri',
            sessions: 390,
            photos: 1560
        },
        {
            label: 'Sat',
            sessions: 480,
            photos: 1920
        },
        {
            label: 'Sun',
            sessions: 430,
            photos: 1720
        }
    ];
    const trendData30d = [
        {
            label: 'W1',
            sessions: 980,
            photos: 3920
        },
        {
            label: 'W2',
            sessions: 1240,
            photos: 4960
        },
        {
            label: 'W3',
            sessions: 1510,
            photos: 6040
        },
        {
            label: 'W4',
            sessions: 1890,
            photos: 7560
        }
    ];
    const activeTrendData = analyticsRange === '7d' ? trendData7d : trendData30d;
    const maxSessions = Math.max(...activeTrendData.map((d)=>d.sessions));
    // Category breakdown data
    const categoryCounts = {
        Cute: frames.filter((f)=>f.category === 'Cute').length,
        Vintage: frames.filter((f)=>f.category === 'Vintage').length,
        Retro: frames.filter((f)=>f.category === 'Retro').length,
        Minimalist: frames.filter((f)=>f.category === 'Minimalist').length,
        Formal: frames.filter((f)=>f.category === 'Formal').length
    };
    const categoryTotal = Object.values(categoryCounts).reduce((a, b)=>a + b, 0) || 1;
    // Sample portrait dummy photos for cutout inspection
    const samplePortraits = [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#FDFFEB] flex font-sans text-[#4B2E1F] relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$admin$2f$AdminSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminSidebar"], {
                currentView: currentView,
                onSelectView: (view)=>{
                    setSelectedDetailFrame(null); // Return to list if inspecting
                    setCurrentView(view);
                },
                pendingFramesCount: pendingFramesCount,
                isCollapsed: isSidebarCollapsed,
                onToggleCollapse: ()=>setIsSidebarCollapsed(!isSidebarCollapsed)
            }, void 0, false, {
                fileName: "[project]/src/admin/AdminDashboard.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "w-full flex-1 min-w-0 min-h-screen md:h-screen md:overflow-y-auto p-4 sm:p-6 md:p-8 lg:p-10 pt-18 md:pt-8 pb-24 md:pb-12",
                children: [
                    notification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 flex items-center gap-2 rounded-xl bg-emerald-50 p-4 text-xs font-semibold text-emerald-800 border border-emerald-300 shadow-xs animate-in fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "h-4 w-4 shrink-0 text-emerald-600"
                            }, void 0, false, {
                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                lineNumber: 299,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: notification
                            }, void 0, false, {
                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                lineNumber: 300,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                        lineNumber: 298,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    currentView === 'frames' && selectedDetailFrame ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#DEE6BD] pb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedDetailFrame(null),
                                                className: "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#DEE6BD] bg-white text-[#4B2E1F] transition-colors hover:bg-[#DEE6BD]/30 cursor-pointer shadow-xs",
                                                title: "Back to Frame Moderation",
                                                "aria-label": "Back to Frame Moderation",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 312,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "text-2xl md:text-3xl font-serif font-normal text-[#4B2E1F]",
                                                                children: selectedDetailFrame.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 322,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full ${selectedDetailFrame.status === 'approved' ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : selectedDetailFrame.status === 'pending_review' ? 'bg-amber-100 text-amber-800 border border-amber-300' : selectedDetailFrame.status === 'rejected' ? 'bg-red-100 text-red-800 border border-red-300' : 'bg-[#DEE6BD]/50 text-[#4B2E1F] border border-[#DEE6BD]'}`,
                                                                children: selectedDetailFrame.status.replace('_', ' ')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-[#4B2E1F]/70 mt-0.5",
                                                        children: [
                                                            "ID: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                className: "text-[#4B2E1F] font-mono text-[11px] bg-[#DEE6BD]/30 px-1 py-0.5 rounded",
                                                                children: selectedDetailFrame.id
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 340,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " • Submitted by ",
                                                            selectedDetailFrame.author
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 320,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            selectedDetailFrame.status === 'pending_review' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleApproveFrame(selectedDetailFrame),
                                                        className: "inline-flex items-center gap-1.5 rounded-lg bg-emerald-700 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-800 transition-colors shadow-xs cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 353,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Approve Frame"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 354,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleOpenRejectFrame(selectedDetailFrame),
                                                        className: "inline-flex items-center gap-1.5 rounded-lg bg-red-700 px-4 py-2 text-xs font-semibold text-white hover:bg-red-800 transition-colors shadow-xs cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 360,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Reject with Note"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 361,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 348,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            selectedDetailFrame.status === 'approved' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleToggleFrameActive(selectedDetailFrame),
                                                        className: `inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-xs font-semibold transition-colors cursor-pointer shadow-xs ${selectedDetailFrame.is_active ? 'border-emerald-300 bg-emerald-100 text-emerald-900 hover:bg-emerald-200' : 'border-[#DEE6BD] bg-[#FDFFEB] text-[#4B2E1F]/70 hover:bg-[#DEE6BD]/40'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$power$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Power$3e$__["Power"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 376,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: selectedDetailFrame.is_active ? 'Active on Guest' : 'Hidden from Guest'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 377,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleArchiveFrame(selectedDetailFrame),
                                                        className: "inline-flex items-center gap-1.5 rounded-lg border border-[#DEE6BD] bg-white px-3.5 py-2 text-xs font-semibold text-[#4B2E1F] hover:bg-[#DEE6BD]/30 transition-colors cursor-pointer shadow-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 384,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Archive"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 385,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDeleteFrame(selectedDetailFrame),
                                                        className: "inline-flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3.5 py-2 text-xs font-semibold text-red-700 hover:bg-red-100 transition-colors cursor-pointer shadow-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 392,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Delete Frame"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 393,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 388,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 367,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 346,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                lineNumber: 310,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-7 flex flex-col rounded-xl border border-[#DEE6BD] bg-white p-5 shadow-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-4 pb-3 border-b border-[#DEE6BD]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                                className: "h-4 w-4 text-[#4B2E1F]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 406,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-semibold text-[#4B2E1F]",
                                                                children: "Visual Layout & Cutouts Inspector"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 407,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 405,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setShowSlotOverlays(!showSlotOverlays),
                                                                className: `px-2.5 py-1 rounded-md text-[11px] font-semibold border transition-colors cursor-pointer ${showSlotOverlays ? 'bg-[#4B2E1F] text-[#FDFFEB] border-[#3D2418]' : 'bg-[#FDFFEB] text-[#4B2E1F] border-[#DEE6BD]'}`,
                                                                children: showSlotOverlays ? 'Hide Slot Coordinates' : 'Show Slot Coordinates'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 413,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setShowMockupPhotos(!showMockupPhotos),
                                                                className: `px-2.5 py-1 rounded-md text-[11px] font-semibold border transition-colors cursor-pointer ${showMockupPhotos ? 'bg-[#F4B8A5] text-[#4B2E1F] border-[#DE9784]' : 'bg-[#FDFFEB] text-[#4B2E1F] border-[#DEE6BD]'}`,
                                                                children: showMockupPhotos ? 'Hide Mock Photos' : 'Test With Mock Photos'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 424,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 404,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative aspect-[4000/5900] w-full max-w-md mx-auto overflow-hidden rounded-xl bg-stone-900 border border-[#DEE6BD] p-2 flex items-center justify-center shadow-inner",
                                                children: [
                                                    showMockupPhotos && selectedDetailFrame.slots && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-2 z-0",
                                                        children: selectedDetailFrame.slots.map((s, idx)=>{
                                                            const scaleW = 100 / 4000;
                                                            const scaleH = 100 / 5900;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    position: 'absolute',
                                                                    left: `${s.x * scaleW}%`,
                                                                    top: `${s.y * scaleH}%`,
                                                                    width: `${s.w * scaleW}%`,
                                                                    height: `${s.h * scaleH}%`
                                                                },
                                                                className: "overflow-hidden rounded-lg bg-stone-800 shadow-inner",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: samplePortraits[idx % samplePortraits.length],
                                                                    alt: `Test Model #${idx + 1}`,
                                                                    className: "h-full w-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                    lineNumber: 457,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, idx, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 446,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0));
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 441,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: selectedDetailFrame.image,
                                                        alt: selectedDetailFrame.name,
                                                        className: "relative z-10 h-full w-full object-contain pointer-events-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 469,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    showSlotOverlays && selectedDetailFrame.slots && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-2 z-20 pointer-events-none",
                                                        children: selectedDetailFrame.slots.map((s, idx)=>{
                                                            const scaleW = 100 / 4000;
                                                            const scaleH = 100 / 5900;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    position: 'absolute',
                                                                    left: `${s.x * scaleW}%`,
                                                                    top: `${s.y * scaleH}%`,
                                                                    width: `${s.w * scaleW}%`,
                                                                    height: `${s.h * scaleH}%`
                                                                },
                                                                className: "border-2 border-dashed border-[#4B2E1F] bg-[#4B2E1F]/15 rounded-md flex flex-col items-center justify-center text-center p-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded bg-[#4B2E1F] px-1.5 py-0.5 text-[9px] font-mono font-bold text-[#FDFFEB]",
                                                                        children: [
                                                                            "Slot #",
                                                                            idx + 1
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 493,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[8px] font-mono text-[#FDFFEB] bg-[#4B2E1F]/80 px-1 rounded mt-0.5",
                                                                        children: [
                                                                            s.w,
                                                                            " × ",
                                                                            s.h,
                                                                            "px"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 496,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 482,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0));
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 477,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 438,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 text-center text-[11px] text-[#4B2E1F]/70",
                                                children: "Standard Photobooth Canvas: 4000 × 5900 px (300 DPI Export Ready)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 507,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 403,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-5 space-y-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl border border-[#DEE6BD] bg-white p-5 shadow-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-base font-serif font-normal text-[#4B2E1F] mb-3",
                                                        children: "Technical Specifications"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 516,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "divide-y divide-[#DEE6BD] text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "py-2.5 flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#4B2E1F]/70",
                                                                        children: "Pose Layout"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 522,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-[#4B2E1F]",
                                                                        children: [
                                                                            selectedDetailFrame.count,
                                                                            " Poses"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 523,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 521,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "py-2.5 flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#4B2E1F]/70",
                                                                        children: "Category / Style"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 526,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-[#4B2E1F] bg-[#FDFFEB] px-2 py-0.5 rounded border border-[#DEE6BD]",
                                                                        children: selectedDetailFrame.category
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 527,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 525,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "py-2.5 flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#4B2E1F]/70",
                                                                        children: "Canvas Dimensions"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 532,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono font-semibold text-[#4B2E1F]",
                                                                        children: "4000 × 5900 px"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 533,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 531,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "py-2.5 flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#4B2E1F]/70",
                                                                        children: "Aspect Ratio"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 536,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono text-[#4B2E1F]",
                                                                        children: "4:5.9 (High-Res Strip)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 537,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 535,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "py-2.5 flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#4B2E1F]/70",
                                                                        children: "Transparent Cutout Slots"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 540,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-emerald-700",
                                                                        children: [
                                                                            selectedDetailFrame.slots?.length || selectedDetailFrame.count,
                                                                            " Verified Slots"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 541,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 539,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "py-2.5 flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#4B2E1F]/70",
                                                                        children: "Submitted At"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 546,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#4B2E1F]",
                                                                        children: new Date(selectedDetailFrame.created_at).toLocaleString()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 547,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 545,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 520,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 515,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl border border-[#DEE6BD] bg-white p-5 shadow-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-base font-serif font-normal text-[#4B2E1F] mb-2",
                                                        children: "Creator Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 556,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-[#4B2E1F]/80 leading-relaxed bg-[#FDFFEB] p-3 rounded-lg border border-[#DEE6BD]",
                                                        children: selectedDetailFrame.desc || 'No description provided by the creator.'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 559,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    selectedDetailFrame.rejection_reason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 rounded-lg bg-red-50 p-3 border border-red-200 text-xs text-red-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "block mb-0.5 font-semibold",
                                                                children: "Previous Rejection Note:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 565,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            selectedDetailFrame.rejection_reason
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 564,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 555,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl border border-[#DEE6BD] bg-white p-5 shadow-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-base font-serif font-normal text-[#4B2E1F] flex items-center gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"], {
                                                                        className: "h-4 w-4 text-[#4B2E1F]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 575,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Hashtags & Curation Tags"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 576,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 574,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-[#4B2E1F]/60",
                                                                children: [
                                                                    selectedDetailFrame.tags?.length || 0,
                                                                    " tags"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 578,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 573,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-1.5",
                                                        children: selectedDetailFrame.tags && selectedDetailFrame.tags.length > 0 ? selectedDetailFrame.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#FDFFEB] border border-[#DEE6BD] text-[#4B2E1F]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#4B2E1F]/70 font-bold",
                                                                        children: "#"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 589,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: t.replace(/^#/, '')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 590,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, t, true, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 585,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-[#4B2E1F]/60 italic",
                                                            children: [
                                                                "Tidak ada hashtag khusus (default kategori: #",
                                                                selectedDetailFrame.category.toLowerCase(),
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                            lineNumber: 594,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 582,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 572,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl border border-[#DEE6BD] bg-white p-5 shadow-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-base font-serif font-normal text-[#4B2E1F] mb-3",
                                                        children: "Creator Information"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 603,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-10 w-10 rounded-lg bg-[#FDFFEB] text-[#4B2E1F] border border-[#DEE6BD] flex items-center justify-center font-bold text-sm shrink-0 shadow-xs",
                                                                children: selectedDetailFrame.author.charAt(0).toUpperCase()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 607,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-semibold text-xs text-[#4B2E1F]",
                                                                        children: selectedDetailFrame.author
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 611,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[11px] text-[#4B2E1F]/60",
                                                                        children: [
                                                                            "Creator ID: ",
                                                                            selectedDetailFrame.creator_id
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 612,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 610,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 606,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 602,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 513,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                lineNumber: 401,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : null,
                    currentView === 'overview' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-3xl font-serif font-normal text-[#4B2E1F]",
                                                children: [
                                                    "Admin Overview & ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "italic text-[#4B2E1F]",
                                                        children: "Analytics"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 629,
                                                        columnNumber: 36
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 628,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[#4B2E1F]/70 mt-1",
                                                children: "Comprehensive performance metrics, photo trends, and creator moderation health."
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 631,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 627,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] p-1 shadow-2xs",
                                        children: [
                                            '7d',
                                            '30d'
                                        ].map((range)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setAnalyticsRange(range),
                                                className: `rounded-md px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${analyticsRange === range ? 'bg-[#4B2E1F] text-[#FDFFEB] shadow-xs' : 'text-[#4B2E1F]/70 hover:text-[#4B2E1F]'}`,
                                                children: range === '7d' ? 'Last 7 Days' : 'Last 30 Days'
                                            }, range, false, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 639,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 637,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                lineNumber: 626,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-[#DEE6BD] bg-white p-4 shadow-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-[#4B2E1F]/50 mb-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-semibold uppercase text-[#4B2E1F]/70",
                                                        children: "Total Users"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 658,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        className: "h-4 w-4 text-[#4B2E1F]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 659,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 657,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-serif font-normal text-[#4B2E1F]",
                                                children: totalUsers
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 661,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-emerald-700 font-semibold mt-0.5 flex items-center gap-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 663,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " +12% this month"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 662,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 656,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-[#DEE6BD] bg-white p-4 shadow-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-[#4B2E1F]/50 mb-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-semibold uppercase text-[#4B2E1F]/70",
                                                        children: "Creators"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 669,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        className: "h-4 w-4 text-[#F4B8A5]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 670,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 668,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-serif font-normal text-[#4B2E1F]",
                                                children: totalCreators
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 672,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-[#4B2E1F]/60 mt-0.5",
                                                children: "Active design studios"
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 673,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 667,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-[#DEE6BD] bg-white p-4 shadow-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-[#4B2E1F]/50 mb-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-semibold uppercase text-[#4B2E1F]/70",
                                                        children: "Frames Catalog"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 678,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                        className: "h-4 w-4 text-[#4B2E1F]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 679,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 677,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-serif font-normal text-[#4B2E1F]",
                                                children: totalFrames
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 681,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-[#4B2E1F]/60 mt-0.5",
                                                children: "Published templates"
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 682,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 676,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-[#DEE6BD] bg-white p-4 shadow-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-[#4B2E1F]/50 mb-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-semibold uppercase text-[#4B2E1F]/70",
                                                        children: "Review Queue"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 687,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "h-4 w-4 text-amber-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 688,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 686,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-serif font-normal text-amber-700",
                                                children: pendingFramesCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 690,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-amber-700 font-semibold mt-0.5",
                                                children: pendingFramesCount > 0 ? 'Action required' : 'Queue cleared'
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 691,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 685,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-[#DEE6BD] bg-white p-4 shadow-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-[#4B2E1F]/50 mb-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-semibold uppercase text-[#4B2E1F]/70",
                                                        children: "Photo Sessions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 698,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        className: "h-4 w-4 text-[#F4B8A5]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 699,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 697,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-serif font-normal text-[#4B2E1F]",
                                                children: totalPhotos + 1480
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 701,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-emerald-700 font-semibold mt-0.5 flex items-center gap-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 703,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " +24% activity"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 702,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 696,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                lineNumber: 655,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-8 rounded-xl border border-[#DEE6BD] bg-white p-5 md:p-6 shadow-xs flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                                        className: "h-4 w-4 text-[#4B2E1F]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 715,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                        className: "text-base font-serif font-normal text-[#4B2E1F]",
                                                                        children: "Photobooth Sessions & Photo Strip Velocity"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 716,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 714,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] text-[#4B2E1F]/70",
                                                                children: [
                                                                    "Average: ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "text-[#4B2E1F]",
                                                                        children: "340 sessions/day"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 721,
                                                                        columnNumber: 32
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 720,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 713,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-[#4B2E1F]/70 mb-6",
                                                        children: "Real-time guest traffic trends across live webcam captures and high-res downloads."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 724,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 712,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-full h-56 pt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-full h-full overflow-visible",
                                                        viewBox: "0 0 500 180",
                                                        preserveAspectRatio: "none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                        id: "areaGradient",
                                                                        x1: "0",
                                                                        y1: "0",
                                                                        x2: "0",
                                                                        y2: "1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                offset: "0%",
                                                                                stopColor: "#4B2E1F",
                                                                                stopOpacity: "0.28"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                lineNumber: 734,
                                                                                columnNumber: 25
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                offset: "100%",
                                                                                stopColor: "#F4B8A5",
                                                                                stopOpacity: "0.0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                lineNumber: 735,
                                                                                columnNumber: 25
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 733,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                        id: "lineGradient",
                                                                        x1: "0",
                                                                        y1: "0",
                                                                        x2: "1",
                                                                        y2: "0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                offset: "0%",
                                                                                stopColor: "#4B2E1F"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                lineNumber: 738,
                                                                                columnNumber: 25
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                offset: "100%",
                                                                                stopColor: "#F4B8A5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                lineNumber: 739,
                                                                                columnNumber: 25
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 737,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 732,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            [
                                                                0,
                                                                45,
                                                                90,
                                                                135
                                                            ].map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "0",
                                                                    y1: y,
                                                                    x2: "500",
                                                                    y2: y,
                                                                    stroke: "#DEE6BD",
                                                                    strokeDasharray: "4 4",
                                                                    strokeWidth: "1"
                                                                }, y, false, {
                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                    lineNumber: 745,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))),
                                                            (()=>{
                                                                const points = activeTrendData.map((d, i)=>{
                                                                    const x = i / (activeTrendData.length - 1) * 500;
                                                                    const y = 160 - d.sessions / maxSessions * 130;
                                                                    return `${x},${y}`;
                                                                });
                                                                const dArea = `M 0,160 L ${points.join(' L ')} L 500,160 Z`;
                                                                const dLine = `M ${points.join(' L ')}`;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: dArea,
                                                                            fill: "url(#areaGradient)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                            lineNumber: 769,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: dLine,
                                                                            fill: "none",
                                                                            stroke: "url(#lineGradient)",
                                                                            strokeWidth: "3.5",
                                                                            strokeLinecap: "round"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                            lineNumber: 770,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                    lineNumber: 768,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0));
                                                            })(),
                                                            activeTrendData.map((d, i)=>{
                                                                const x = i / (activeTrendData.length - 1) * 500;
                                                                const y = 160 - d.sessions / maxSessions * 130;
                                                                const isHovered = activeChartPoint === i;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: x,
                                                                            cy: y,
                                                                            r: isHovered ? 6 : 4,
                                                                            fill: "#FDFFEB",
                                                                            stroke: "#4B2E1F",
                                                                            strokeWidth: isHovered ? 3.5 : 2.5,
                                                                            className: "cursor-pointer transition-all",
                                                                            onMouseEnter: ()=>setActiveChartPoint(i),
                                                                            onMouseLeave: ()=>setActiveChartPoint(null)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                            lineNumber: 789,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                    x: Math.min(Math.max(x - 45, 10), 410),
                                                                                    y: y - 38,
                                                                                    width: "90",
                                                                                    height: "28",
                                                                                    rx: "6",
                                                                                    fill: "#4B2E1F"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                    lineNumber: 802,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                                    x: Math.min(Math.max(x - 45, 10), 410) + 45,
                                                                                    y: y - 20,
                                                                                    textAnchor: "middle",
                                                                                    fill: "#FDFFEB",
                                                                                    fontSize: "11",
                                                                                    fontWeight: "bold",
                                                                                    fontFamily: "sans-serif",
                                                                                    children: [
                                                                                        d.sessions,
                                                                                        " Sessions"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                    lineNumber: 810,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                            lineNumber: 801,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, i, true, {
                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                    lineNumber: 788,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0));
                                                            })
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 731,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-[11px] text-[#4B2E1F]/60 mt-2 px-1",
                                                        children: activeTrendData.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: d.label
                                                            }, i, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 831,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 829,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 730,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 711,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-4 rounded-xl border border-[#DEE6BD] bg-white p-5 md:p-6 shadow-xs flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__["PieChart"], {
                                                                className: "h-4 w-4 text-[#F4B8A5]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 843,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-base font-serif font-normal text-[#4B2E1F]",
                                                                children: "Frame Category Popularity"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 844,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 842,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-[#4B2E1F]/70 mb-5",
                                                        children: "Distribution of frames across community design styles."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 848,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 841,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3.5 my-auto",
                                                children: Object.entries(categoryCounts).map(([cat, count])=>{
                                                    const percentage = Math.round(count / categoryTotal * 100);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between text-xs mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-[#4B2E1F]",
                                                                        children: cat
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 860,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#4B2E1F]/70 font-mono text-[11px]",
                                                                        children: [
                                                                            count,
                                                                            " frames (",
                                                                            percentage,
                                                                            "%)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 861,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 859,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 w-full rounded-full bg-[#FDFFEB] overflow-hidden border border-[#DEE6BD]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `h-full rounded-full transition-all duration-700 ${cat === 'Cute' ? 'bg-[#F4B8A5]' : cat === 'Vintage' ? 'bg-amber-600' : cat === 'Retro' ? 'bg-[#4B2E1F]/80' : cat === 'Minimalist' ? 'bg-[#4B2E1F]' : 'bg-[#4B2E1F]/60'}`,
                                                                    style: {
                                                                        width: `${Math.max(percentage, 8)}%`
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                    lineNumber: 866,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 865,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, cat, true, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 858,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0));
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 854,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 pt-3 border-t border-[#DEE6BD] flex items-center justify-between text-[11px] text-[#4B2E1F]/70",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Total Designs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 887,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-[#4B2E1F]",
                                                        children: [
                                                            totalFrames,
                                                            " frames"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 888,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 886,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 840,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                lineNumber: 709,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            pendingFramesCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-amber-300 bg-amber-50/50 p-5 shadow-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "h-4 w-4 text-amber-700"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 898,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-sm font-semibold text-amber-950",
                                                        children: [
                                                            "Pending Moderation Queue (",
                                                            pendingFramesCount,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 899,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 897,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCurrentView('frames'),
                                                className: "text-xs font-semibold text-amber-900 hover:underline cursor-pointer",
                                                children: "Open Full Moderation Table →"
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 903,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 896,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",
                                        children: pendingFrames.map((frame)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-lg p-3 border border-amber-300 shadow-xs flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setSelectedDetailFrame(frame);
                                                            setCurrentView('frames');
                                                        },
                                                        className: "h-14 w-10 shrink-0 object-contain rounded border border-[#DEE6BD] bg-[#FDFFEB] p-0.5 hover:ring-2 hover:ring-[#4B2E1F] transition-all cursor-pointer",
                                                        title: "Inspect Frame",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: frame.image,
                                                            alt: frame.name,
                                                            className: "h-full w-full object-contain"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                            lineNumber: 925,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 917,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 overflow-hidden",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs font-bold text-[#4B2E1F] truncate",
                                                                children: frame.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 933,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] text-[#4B2E1F]/70",
                                                                children: [
                                                                    "By ",
                                                                    frame.author,
                                                                    " • ",
                                                                    frame.count,
                                                                    " Poses"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 936,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            frame.tags && frame.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1 flex flex-wrap gap-1",
                                                                children: frame.tags.slice(0, 2).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[9px] font-semibold text-[#4B2E1F] bg-[#FDFFEB] px-1 py-0.2 rounded border border-[#DEE6BD]",
                                                                        children: [
                                                                            "#",
                                                                            t.replace(/^#/, '')
                                                                        ]
                                                                    }, t, true, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 942,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 940,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 flex items-center gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleApproveFrame(frame),
                                                                        className: "rounded bg-emerald-700 text-white px-2.5 py-1 text-[10px] font-semibold hover:bg-emerald-800 transition-colors cursor-pointer",
                                                                        children: "Approve"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 952,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleOpenRejectFrame(frame),
                                                                        className: "rounded bg-red-700 text-white px-2.5 py-1 text-[10px] font-semibold hover:bg-red-800 transition-colors cursor-pointer",
                                                                        children: "Reject"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 958,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            setSelectedDetailFrame(frame);
                                                                            setCurrentView('frames');
                                                                        },
                                                                        className: "rounded border border-[#DEE6BD] bg-[#FDFFEB] text-[#4B2E1F] px-2 py-1 text-[10px] font-semibold hover:bg-[#DEE6BD]/40 transition-colors cursor-pointer",
                                                                        children: "Inspect"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 964,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 951,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 932,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, frame.id, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 913,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 911,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                lineNumber: 895,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                        lineNumber: 625,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    currentView === 'frames' && !selectedDetailFrame && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl md:text-3xl font-serif font-normal text-[#4B2E1F]",
                                                children: [
                                                    "Frame ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "italic text-[#4B2E1F]",
                                                        children: "Moderation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 991,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 990,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[#4B2E1F]/70 mt-0.5",
                                                children: "Click any frame preview or inspect icon to view detailed slot coordinates and layout mockups."
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 993,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 989,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-medium text-[#4B2E1F]/80 bg-white border border-[#DEE6BD] px-3 py-1.5 rounded-lg shadow-2xs",
                                        children: [
                                            "Total: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-[#4B2E1F]",
                                                children: frames.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 999,
                                                columnNumber: 24
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " | Pending:",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-amber-700",
                                                children: pendingFramesCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 1000,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 998,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                lineNumber: 988,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-[#DEE6BD] bg-white shadow-xs overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-left text-xs border-collapse min-w-[700px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-[#FDFFEB] text-[#4B2E1F]/70 uppercase tracking-wider border-b border-[#DEE6BD]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "py-3.5 px-4",
                                                            children: "Preview"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                            lineNumber: 1010,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "py-3.5 px-4",
                                                            children: "Frame Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                            lineNumber: 1011,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "py-3.5 px-4",
                                                            children: "Creator"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                            lineNumber: 1012,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "py-3.5 px-4",
                                                            children: "Style & Poses"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                            lineNumber: 1013,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "py-3.5 px-4",
                                                            children: "Curation Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                            lineNumber: 1014,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "py-3.5 px-4",
                                                            children: "Visibility"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                            lineNumber: 1015,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "py-3.5 px-4 text-center sticky right-0 bg-[#FDFFEB] z-10 border-l border-[#DEE6BD] shadow-[-6px_0_12px_rgba(44,33,27,0.03)]",
                                                            children: "Actions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                            lineNumber: 1017,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                    lineNumber: 1009,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 1008,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-[#DEE6BD]",
                                                children: frames.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "hover:bg-[#DEE6BD]/20 transition-colors group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setSelectedDetailFrame(f),
                                                                    className: "h-14 w-10 shrink-0 object-contain rounded-lg border border-[#DEE6BD] bg-white p-0.5 shadow-2xs hover:ring-2 hover:ring-[#4B2E1F] hover:scale-105 transition-all cursor-pointer block",
                                                                    title: "Click to inspect frame details",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: f.image,
                                                                        alt: f.name,
                                                                        className: "h-full w-full object-contain"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 1032,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                    lineNumber: 1027,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 1026,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setSelectedDetailFrame(f),
                                                                        className: "font-semibold text-[#4B2E1F] hover:underline transition-colors text-left cursor-pointer",
                                                                        children: f.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 1041,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[10px] text-[#4B2E1F]/60 line-clamp-1 max-w-[200px]",
                                                                        children: f.desc
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 1047,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    f.tags && f.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-1 flex flex-wrap gap-1",
                                                                        children: [
                                                                            f.tags.slice(0, 3).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[9px] font-semibold text-[#4B2E1F] bg-[#FDFFEB] px-1.5 py-0.2 rounded border border-[#DEE6BD]",
                                                                                    children: [
                                                                                        "#",
                                                                                        t.replace(/^#/, '')
                                                                                    ]
                                                                                }, t, true, {
                                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                    lineNumber: 1051,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0))),
                                                                            f.tags.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[9px] text-[#4B2E1F]/60 font-medium",
                                                                                children: [
                                                                                    "+",
                                                                                    f.tags.length - 3
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                lineNumber: 1059,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 1049,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 1040,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-4 text-[#4B2E1F] font-medium",
                                                                children: f.author
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 1067,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-[#4B2E1F] bg-[#FDFFEB] px-2 py-0.5 rounded text-[10px] mr-1.5 border border-[#DEE6BD]",
                                                                        children: f.category
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 1070,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#4B2E1F]/70 text-[11px]",
                                                                        children: [
                                                                            f.count,
                                                                            " Poses"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 1073,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 1069,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-4",
                                                                children: [
                                                                    f.status === 'approved' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase px-2.5 py-0.5",
                                                                        children: "Approved"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 1078,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    f.status === 'pending_review' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-flex items-center gap-1 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold uppercase px-2.5 py-0.5",
                                                                        children: "Pending Review"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 1083,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    f.status === 'rejected' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-flex items-center gap-1 rounded-full bg-red-100 text-red-800 text-[10px] font-bold uppercase px-2.5 py-0.5",
                                                                        children: "Rejected"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 1088,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    f.status === 'archived' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-flex items-center gap-1 rounded-full bg-[#DEE6BD]/50 text-[#4B2E1F] text-[10px] font-bold uppercase px-2.5 py-0.5",
                                                                        children: "Archived"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 1093,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 1076,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleToggleFrameActive(f),
                                                                    disabled: f.status !== 'approved',
                                                                    className: `rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase transition-colors ${f.is_active ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-[#FDFFEB] text-[#4B2E1F]/60 border border-[#DEE6BD]'} ${f.status !== 'approved' ? 'opacity-40 cursor-not-allowed' : 'hover:scale-105 cursor-pointer'}`,
                                                                    children: f.is_active ? 'Active' : 'Hidden'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                    lineNumber: 1100,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 1099,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-4 text-center sticky right-0 bg-white group-hover:bg-[#FDFFEB] z-10 border-l border-[#DEE6BD] shadow-[-6px_0_12px_rgba(44,33,27,0.03)] transition-colors",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-center gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>setSelectedDetailFrame(f),
                                                                            className: "h-7 w-7 rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] text-[#4B2E1F] hover:bg-[#DEE6BD]/50 flex items-center justify-center transition-colors cursor-pointer shadow-2xs",
                                                                            title: "Inspect Frame Details",
                                                                            "aria-label": "Inspect Frame Details",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                className: "h-3.5 w-3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                lineNumber: 1123,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                            lineNumber: 1117,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        f.status === 'pending_review' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleApproveFrame(f),
                                                                                    className: "h-7 w-7 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 flex items-center justify-center transition-colors cursor-pointer shadow-2xs",
                                                                                    title: "Approve Frame",
                                                                                    "aria-label": "Approve Frame",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                        className: "h-3.5 w-3.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                        lineNumber: 1134,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                    lineNumber: 1128,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleOpenRejectFrame(f),
                                                                                    className: "h-7 w-7 rounded-lg bg-red-700 text-white hover:bg-red-800 flex items-center justify-center transition-colors cursor-pointer shadow-2xs",
                                                                                    title: "Reject Frame",
                                                                                    "aria-label": "Reject Frame",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                        className: "h-3.5 w-3.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                        lineNumber: 1142,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                    lineNumber: 1136,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                            lineNumber: 1127,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        f.status === 'approved' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleToggleFrameActive(f),
                                                                                    className: `h-7 w-7 rounded-lg border flex items-center justify-center transition-colors cursor-pointer shadow-2xs ${f.is_active ? 'border-emerald-300 bg-emerald-100 text-emerald-800 hover:bg-emerald-200' : 'border-[#DEE6BD] bg-[#FDFFEB] text-[#4B2E1F]/60 hover:bg-[#DEE6BD]/40'}`,
                                                                                    title: f.is_active ? 'Hide from Guest' : 'Show on Guest',
                                                                                    "aria-label": "Toggle Public Visibility",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$power$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Power$3e$__["Power"], {
                                                                                        className: "h-3.5 w-3.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                        lineNumber: 1159,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                    lineNumber: 1149,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleArchiveFrame(f),
                                                                                    className: "h-7 w-7 rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] text-[#4B2E1F] hover:bg-[#DEE6BD]/50 flex items-center justify-center transition-colors cursor-pointer shadow-2xs",
                                                                                    title: "Archive Frame",
                                                                                    "aria-label": "Archive Frame",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"], {
                                                                                        className: "h-3.5 w-3.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                        lineNumber: 1167,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                    lineNumber: 1161,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                            lineNumber: 1148,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        f.status === 'rejected' && f.rejection_reason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>setSelectedDetailFrame(f),
                                                                            className: "h-7 w-7 rounded-lg border border-red-200 bg-red-50 text-red-700 hover:bg-red-100 flex items-center justify-center transition-colors cursor-pointer shadow-2xs",
                                                                            title: `Rejected: ${f.rejection_reason}`,
                                                                            "aria-label": "View Rejection Reason",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                                className: "h-3.5 w-3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                lineNumber: 1179,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                            lineNumber: 1173,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleDeleteFrame(f),
                                                                            className: "h-7 w-7 rounded-lg border border-red-200 bg-red-50 text-red-600 hover:bg-red-100 flex items-center justify-center transition-colors cursor-pointer shadow-2xs",
                                                                            title: "Delete Frame Permanently",
                                                                            "aria-label": "Delete Frame Permanently",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                className: "h-3.5 w-3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                lineNumber: 1190,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                            lineNumber: 1184,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                    lineNumber: 1115,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 1114,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, f.id, true, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 1024,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 1022,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 1007,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                    lineNumber: 1006,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                lineNumber: 1005,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                        lineNumber: 987,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    currentView === 'creators' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl md:text-3xl font-serif font-normal text-[#4B2E1F]",
                                        children: [
                                            "Creator ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "italic text-[#4B2E1F]",
                                                children: "Management"
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 1210,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 1209,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[#4B2E1F]/70 mt-0.5",
                                        children: "Oversee independent creator studios, manage publishing permissions, and enforce community standards."
                                    }, void 0, false, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 1212,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                lineNumber: 1208,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-[#DEE6BD] bg-white shadow-xs overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 border-b border-[#DEE6BD] flex items-center justify-between",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-sm font-semibold text-[#4B2E1F]",
                                            children: [
                                                "Registered Studios (",
                                                creatorUsers.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                            lineNumber: 1219,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 1218,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    creatorUsers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-12 text-center text-[#4B2E1F]/60 text-xs italic",
                                        children: "No registered creator accounts yet."
                                    }, void 0, false, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 1225,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-left text-xs border-collapse min-w-[700px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "bg-[#FDFFEB] text-[#4B2E1F]/70 uppercase tracking-wider border-b border-[#DEE6BD]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-3.5 px-4",
                                                                children: "Creator / Studio"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 1233,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-3.5 px-4",
                                                                children: "Username"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 1234,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-3.5 px-4",
                                                                children: "Email"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 1235,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-3.5 px-4",
                                                                children: "Frames Uploaded"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 1236,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-3.5 px-4",
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 1237,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "py-3.5 px-4 text-center sticky right-0 bg-[#FDFFEB] z-10 border-l border-[#DEE6BD] shadow-[-6px_0_12px_rgba(44,33,27,0.03)]",
                                                                children: "Actions"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                lineNumber: 1239,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                        lineNumber: 1232,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                    lineNumber: 1231,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "divide-y divide-[#DEE6BD]",
                                                    children: creatorUsers.map((creator)=>{
                                                        const isSuspended = creator.creatorStatus === 'suspended';
                                                        const creatorFrameCount = frames.filter((f)=>f.creator_id === creator.id).length;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "hover:bg-[#DEE6BD]/20 transition-colors group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-3.5 px-4 font-semibold text-[#4B2E1F]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "h-8 w-8 rounded-md bg-[#FDFFEB] text-[#4B2E1F] border border-[#DEE6BD] flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs",
                                                                                children: creator.name.charAt(0).toUpperCase()
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                lineNumber: 1253,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "font-semibold text-[#4B2E1F]",
                                                                                        children: creator.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                        lineNumber: 1257,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-[10px] text-[#4B2E1F]/60",
                                                                                        children: [
                                                                                            "Joined: ",
                                                                                            new Date(creator.createdAt).toLocaleDateString()
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                        lineNumber: 1258,
                                                                                        columnNumber: 35
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                lineNumber: 1256,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 1252,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                    lineNumber: 1251,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-3.5 px-4 font-mono text-[#4B2E1F]/80",
                                                                    children: [
                                                                        "@",
                                                                        creator.username || 'creator'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                    lineNumber: 1265,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-3.5 px-4 text-[#4B2E1F]/70",
                                                                    children: creator.email
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                    lineNumber: 1269,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-3.5 px-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-[#4B2E1F] bg-[#FDFFEB] px-2.5 py-1 rounded-md text-[11px] border border-[#DEE6BD]",
                                                                        children: [
                                                                            creatorFrameCount,
                                                                            " ",
                                                                            creatorFrameCount === 1 ? 'Frame' : 'Frames'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 1272,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                    lineNumber: 1271,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-3.5 px-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${isSuspended ? 'bg-red-100 text-red-700 border border-red-200' : 'bg-emerald-100 text-emerald-700 border border-emerald-200'}`,
                                                                        children: isSuspended ? 'Suspended' : 'Active'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 1278,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                    lineNumber: 1277,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-3.5 px-4 text-center sticky right-0 bg-white group-hover:bg-[#FDFFEB] z-10 border-l border-[#DEE6BD] shadow-[-6px_0_12px_rgba(44,33,27,0.03)] transition-colors",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleToggleCreatorStatus(creator),
                                                                                className: `h-7 w-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer shadow-2xs ${isSuspended ? 'bg-emerald-700 text-white hover:bg-emerald-800' : 'border border-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100'}`,
                                                                                title: isSuspended ? 'Activate Creator Account' : 'Suspend Creator Account',
                                                                                "aria-label": isSuspended ? 'Activate Creator' : 'Suspend Creator',
                                                                                children: isSuspended ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                                                                    className: "h-3.5 w-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                    lineNumber: 1303,
                                                                                    columnNumber: 37
                                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__["UserX"], {
                                                                                    className: "h-3.5 w-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                    lineNumber: 1305,
                                                                                    columnNumber: 37
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                lineNumber: 1292,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>setDeleteConfirmCreator(creator),
                                                                                className: "h-7 w-7 rounded-lg border border-red-200 bg-red-50 text-red-600 hover:bg-red-100 flex items-center justify-center transition-colors cursor-pointer shadow-2xs",
                                                                                title: "Delete Creator Account",
                                                                                "aria-label": "Delete Creator Account",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                    className: "h-3.5 w-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                    lineNumber: 1315,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                                lineNumber: 1309,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                        lineNumber: 1291,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                    lineNumber: 1290,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, creator.id, true, {
                                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                            lineNumber: 1250,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0));
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                    lineNumber: 1244,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                            lineNumber: 1230,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 1229,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                lineNumber: 1217,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                        lineNumber: 1207,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    currentView === 'sessions' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl md:text-3xl font-serif font-normal text-[#4B2E1F]",
                                        children: [
                                            "Photo Sessions ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "italic text-[#4B2E1F]",
                                                children: "Monitoring"
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 1337,
                                                columnNumber: 32
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 1336,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[#4B2E1F]/70 mt-0.5",
                                        children: "Audit and monitor guest photobooth strips generated across all active frames."
                                    }, void 0, false, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 1339,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                lineNumber: 1335,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-[#DEE6BD] bg-white p-5 md:p-6 shadow-xs",
                                children: guestPhotos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-16 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                            className: "h-8 w-8 text-[#4B2E1F]/40 mx-auto mb-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                            lineNumber: 1347,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-[#4B2E1F]/60",
                                            children: "No session strips recorded yet."
                                        }, void 0, false, {
                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                            lineNumber: 1348,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                    lineNumber: 1346,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4",
                                    children: guestPhotos.map((photo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-hidden rounded-xl border border-[#DEE6BD] bg-[#FDFFEB] p-2 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: photo.image_url,
                                                    alt: photo.frame_name,
                                                    className: "aspect-[3/4] w-full object-contain rounded-lg bg-white mb-2 shadow-2xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                    lineNumber: 1357,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] font-semibold text-[#4B2E1F] truncate",
                                                    children: photo.frame_name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                    lineNumber: 1362,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[9px] text-[#4B2E1F]/60",
                                                    children: [
                                                        photo.filter_applied,
                                                        " • ",
                                                        new Date(photo.created_at).toLocaleTimeString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                    lineNumber: 1365,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, photo.id, true, {
                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                            lineNumber: 1353,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                    lineNumber: 1351,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                lineNumber: 1344,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                        lineNumber: 1334,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    currentView === 'audit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl md:text-3xl font-serif font-normal text-[#4B2E1F]",
                                        children: [
                                            "System ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "italic text-[#4B2E1F]",
                                                children: "Audit Logs"
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                lineNumber: 1383,
                                                columnNumber: 24
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 1382,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[#4B2E1F]/70 mt-0.5",
                                        children: "Immutable chronological log of all administrative actions, frame curation, and access events."
                                    }, void 0, false, {
                                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                                        lineNumber: 1385,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                lineNumber: 1381,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-[#DEE6BD] bg-white p-5 shadow-xs",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "divide-y divide-[#DEE6BD]",
                                    children: auditLogs.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-3.5 flex items-start justify-between gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-xs text-[#4B2E1F]",
                                                                    children: log.action
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                    lineNumber: 1396,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] bg-[#FDFFEB] text-[#4B2E1F] border border-[#DEE6BD] font-medium px-1.5 py-0.5 rounded",
                                                                    children: log.targetType
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                                    lineNumber: 1397,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                            lineNumber: 1395,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-[#4B2E1F]/80 mt-0.5",
                                                            children: log.details
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                            lineNumber: 1401,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] text-[#4B2E1F]/60 mt-0.5",
                                                            children: [
                                                                "Admin: ",
                                                                log.adminName
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                            lineNumber: 1402,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                    lineNumber: 1394,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] text-[#4B2E1F]/60 shrink-0 font-mono",
                                                    children: new Date(log.timestamp).toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                                    lineNumber: 1406,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, log.id, true, {
                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                            lineNumber: 1393,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                    lineNumber: 1391,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                lineNumber: 1390,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                        lineNumber: 1380,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/admin/AdminDashboard.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            rejectModalData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 font-sans",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-md rounded-xl bg-white shadow-xl border border-[#DEE6BD] p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base font-serif text-[#4B2E1F] mb-1",
                            children: rejectModalData.title
                        }, void 0, false, {
                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                            lineNumber: 1421,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-[#4B2E1F]/70 mb-3",
                            children: "Write an actionable critique note explaining why the frame does not meet layout guidelines."
                        }, void 0, false, {
                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                            lineNumber: 1424,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleConfirmRejection,
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-medium text-[#4B2E1F] mb-1",
                                            children: "Rejection Reason Note *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                            lineNumber: 1430,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            required: true,
                                            rows: 3,
                                            value: rejectionNote,
                                            onChange: (e)=>setRejectionNote(e.target.value),
                                            placeholder: "e.g. Transparent photo cutout area is not properly cleared, or incorrect aspect ratio...",
                                            className: "w-full rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] p-2.5 text-xs text-[#4B2E1F] focus:border-[#4B2E1F] focus:outline-none transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                            lineNumber: 1433,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                    lineNumber: 1429,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 pt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setRejectModalData(null),
                                            className: "flex-1 rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] py-2 text-xs font-semibold text-[#4B2E1F] hover:bg-[#DEE6BD]/30 transition-colors cursor-pointer",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                            lineNumber: 1444,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "flex-1 rounded-lg bg-red-700 py-2 text-xs font-semibold text-white hover:bg-red-800 transition-colors cursor-pointer",
                                            children: "Confirm Rejection"
                                        }, void 0, false, {
                                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                                            lineNumber: 1451,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                    lineNumber: 1443,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                            lineNumber: 1428,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                    lineNumber: 1420,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/admin/AdminDashboard.tsx",
                lineNumber: 1419,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            deleteConfirmCreator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 font-sans",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-md rounded-xl bg-white shadow-xl border border-[#DEE6BD] p-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-red-100 text-red-600 mb-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/src/admin/AdminDashboard.tsx",
                                lineNumber: 1468,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                            lineNumber: 1467,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base font-serif text-[#4B2E1F] mb-1.5",
                            children: "Delete Creator Account?"
                        }, void 0, false, {
                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                            lineNumber: 1470,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-[#4B2E1F]/70 mb-5 leading-relaxed",
                            children: [
                                "Are you sure you want to permanently delete creator ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: deleteConfirmCreator.name
                                }, void 0, false, {
                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                    lineNumber: 1474,
                                    columnNumber: 67
                                }, ("TURBOPACK compile-time value", void 0)),
                                " (@",
                                deleteConfirmCreator.username || deleteConfirmCreator.email,
                                ")? This action cannot be undone."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                            lineNumber: 1473,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setDeleteConfirmCreator(null),
                                    className: "flex-1 rounded-lg border border-[#DEE6BD] bg-[#FDFFEB] py-2 text-xs font-semibold text-[#4B2E1F] hover:bg-[#DEE6BD]/30 transition-colors cursor-pointer",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                    lineNumber: 1478,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleConfirmDeleteCreator,
                                    className: "flex-1 rounded-lg bg-red-700 py-2 text-xs font-semibold text-white hover:bg-red-800 transition-colors cursor-pointer",
                                    children: "Delete Account"
                                }, void 0, false, {
                                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                                    lineNumber: 1485,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/admin/AdminDashboard.tsx",
                            lineNumber: 1477,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/admin/AdminDashboard.tsx",
                    lineNumber: 1466,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/admin/AdminDashboard.tsx",
                lineNumber: 1465,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>navigate('/'),
                className: "fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#4B2E1F] hover:bg-[#3D2418] text-[#FDFFEB] px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-bold shadow-xl border-2 border-[#DEE6BD] hover:scale-105 active:scale-95 transition-all cursor-pointer group",
                title: "Return to Guest Home",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                        className: "h-4 w-4 text-[#F4B8A5] group-hover:rotate-12 transition-transform"
                    }, void 0, false, {
                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                        lineNumber: 1503,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Guest Home"
                    }, void 0, false, {
                        fileName: "[project]/src/admin/AdminDashboard.tsx",
                        lineNumber: 1504,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/admin/AdminDashboard.tsx",
                lineNumber: 1498,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/admin/AdminDashboard.tsx",
        lineNumber: 282,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AdminDashboard, "TTnXSyrzpF04MbsKZBMspJ2ipds=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = AdminDashboard;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/admin/AdminSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminSidebar",
    ()=>AdminSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderTree$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-tree.js [app-client] (ecmascript) <export default as FolderTree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftClose$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-left-close.js [app-client] (ecmascript) <export default as PanelLeftClose>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-left-open.js [app-client] (ecmascript) <export default as PanelLeftOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const AdminSidebar = ({ currentView, onSelectView, pendingFramesCount, isCollapsed = false, onToggleCollapse })=>{
    _s();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"])();
    const { currentUser, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [isMobileOpen, setIsMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            id: 'overview',
            label: 'Overview & Analytics',
            shortLabel: 'Overview',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
        },
        {
            id: 'frames',
            label: 'Frame Moderation',
            shortLabel: 'Frames',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
            badge: pendingFramesCount > 0 ? pendingFramesCount : undefined
        },
        {
            id: 'creators',
            label: 'Creator Management',
            shortLabel: 'Creators',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
        },
        {
            id: 'sessions',
            label: 'Photo Sessions',
            shortLabel: 'Sessions',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderTree$3e$__["FolderTree"]
        },
        {
            id: 'audit',
            label: 'System Audit Logs',
            shortLabel: 'Audit',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"]
        }
    ];
    const handleSelectNav = (view)=>{
        onSelectView(view);
        setIsMobileOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "md:hidden fixed top-0 left-0 right-0 h-14 bg-[#4B2E1F] text-[#FDFFEB] z-40 border-b border-[#3D2418] flex items-center justify-between px-4 shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-8 w-8 items-center justify-center rounded-lg bg-[#3D2418] text-[#F4B8A5] border border-[#DEE6BD]/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/admin/AdminSidebar.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/admin/AdminSidebar.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl font-serif tracking-tight text-[#FDFFEB]",
                                        children: [
                                            "Pop",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#F4B8A5]",
                                                children: "@"
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                lineNumber: 92,
                                                columnNumber: 18
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#FDFFEB] italic",
                                                children: "Pic!"
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                lineNumber: 92,
                                                columnNumber: 59
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/admin/AdminSidebar.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-2 text-[9px] bg-[#3D2418] text-[#DEE6BD] px-1.5 py-0.5 rounded border border-[#DEE6BD]/20 font-bold uppercase tracking-wider",
                                        children: "Admin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/admin/AdminSidebar.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/admin/AdminSidebar.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/admin/AdminSidebar.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsMobileOpen(true),
                        className: "inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#3D2418] text-[#FDFFEB] border border-[#DEE6BD]/20 hover:bg-[#2A180E] transition-colors cursor-pointer shadow-xs",
                        "aria-label": "Open Admin Menu",
                        title: "Open Admin Menu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/src/admin/AdminSidebar.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/admin/AdminSidebar.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/admin/AdminSidebar.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isMobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 md:hidden flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity",
                        onClick: ()=>setIsMobileOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/admin/AdminSidebar.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-72 max-w-[80vw] bg-[#4B2E1F] text-[#FDFFEB] h-full flex flex-col justify-between shadow-2xl z-10 border-r border-[#3D2418] p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between border-b border-[#3D2418] pb-4 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex h-9 w-9 items-center justify-center rounded-lg bg-[#3D2418] text-[#F4B8A5] border border-[#DEE6BD]/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                            className: "h-4.5 w-4.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xl font-serif tracking-tight text-[#FDFFEB]",
                                                                children: [
                                                                    "Pop",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#F4B8A5]",
                                                                        children: "@"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                                        lineNumber: 132,
                                                                        columnNumber: 26
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#FDFFEB] italic",
                                                                        children: "Pic!"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                                        lineNumber: 132,
                                                                        columnNumber: 67
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                                lineNumber: 131,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] font-semibold uppercase tracking-wider text-[#DEE6BD]",
                                                                children: "Admin Console"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsMobileOpen(false),
                                                className: "rounded-lg p-1.5 text-[#FDFFEB]/70 hover:text-[#FDFFEB] hover:bg-[#3D2418] transition-colors cursor-pointer",
                                                "aria-label": "Close Menu",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/admin/AdminSidebar.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        className: "space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-2 py-1 text-[10px] font-semibold uppercase text-[#FDFFEB]/60 tracking-wider",
                                                children: "Management"
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            navItems.map((item)=>{
                                                const Icon = item.icon;
                                                const isActive = currentView === item.id;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleSelectNav(item.id),
                                                    className: `w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${isActive ? 'bg-[#FDFFEB] text-[#4B2E1F] font-bold shadow-xs' : 'text-[#FDFFEB]/85 hover:bg-[#3D2418] hover:text-[#FDFFEB]'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                    className: "h-4.5 w-4.5 shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                                    lineNumber: 170,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: item.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                                    lineNumber: 171,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        item.badge !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-[10px] font-bold px-2 py-0.5 rounded-md ${isActive ? 'bg-[#F4B8A5] text-[#4B2E1F]' : 'bg-[#F4B8A5] text-[#4B2E1F]'}`,
                                                            children: item.badge
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, item.id, true, {
                                                    fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/admin/AdminSidebar.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/admin/AdminSidebar.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-[#3D2418] pt-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between bg-[#3D2418] p-2.5 rounded-xl border border-[#DEE6BD]/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0 pr-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs font-bold text-[#FDFFEB] truncate",
                                                    children: currentUser?.name || 'Administrator'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] text-[#DEE6BD]",
                                                    children: "Super Admin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/admin/AdminSidebar.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                logout();
                                                navigate('/login');
                                            },
                                            className: "rounded-lg p-1.5 text-red-300 hover:bg-red-900/40 transition-colors cursor-pointer",
                                            title: "Sign Out",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                lineNumber: 209,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/admin/AdminSidebar.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/admin/AdminSidebar.tsx",
                                    lineNumber: 193,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/admin/AdminSidebar.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/admin/AdminSidebar.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/admin/AdminSidebar.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `hidden md:flex flex-col justify-between h-screen sticky top-0 bg-[#4B2E1F] text-[#FDFFEB] border-r border-[#3D2418] font-sans z-30 shrink-0 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-20' : 'w-64'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `border-b border-[#3D2418] flex items-center justify-between ${isCollapsed ? 'p-3 flex-col gap-3 justify-center' : 'p-5'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 overflow-hidden text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3D2418] text-[#F4B8A5] border border-[#DEE6BD]/20 shadow-xs",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                lineNumber: 233,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-serif tracking-tight text-[#FDFFEB] leading-tight truncate",
                                                        children: [
                                                            "Pop",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#F4B8A5]",
                                                                children: "@"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                                lineNumber: 239,
                                                                columnNumber: 24
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#FDFFEB] italic",
                                                                children: "Pic!"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                                lineNumber: 239,
                                                                columnNumber: 65
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] font-semibold uppercase tracking-wider text-[#DEE6BD]",
                                                        children: "Admin Console"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                lineNumber: 237,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/admin/AdminSidebar.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    onToggleCollapse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onToggleCollapse,
                                        className: `rounded-lg border border-[#DEE6BD]/20 bg-[#3D2418] p-1.5 text-[#FDFFEB]/80 hover:text-[#FDFFEB] hover:bg-[#2A180E] transition-colors cursor-pointer shadow-2xs ${isCollapsed ? 'w-full flex justify-center' : ''}`,
                                        title: isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar',
                                        "aria-label": isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar',
                                        children: isCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftOpen$3e$__["PanelLeftOpen"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/admin/AdminSidebar.tsx",
                                            lineNumber: 259,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftClose$3e$__["PanelLeftClose"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/admin/AdminSidebar.tsx",
                                            lineNumber: 261,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/admin/AdminSidebar.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/admin/AdminSidebar.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "p-3 space-y-1.5",
                                children: [
                                    !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-3 py-1.5 text-[10px] font-semibold uppercase text-[#FDFFEB]/60 tracking-wider",
                                        children: "Management"
                                    }, void 0, false, {
                                        fileName: "[project]/src/admin/AdminSidebar.tsx",
                                        lineNumber: 270,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    navItems.map((item)=>{
                                        const Icon = item.icon;
                                        const isActive = currentView === item.id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onSelectView(item.id),
                                            title: isCollapsed ? item.label : undefined,
                                            className: `w-full flex items-center rounded-xl text-xs font-semibold transition-all cursor-pointer group relative ${isCollapsed ? 'justify-center p-3' : 'justify-between px-3.5 py-2.5 text-left'} ${isActive ? 'bg-[#FDFFEB] text-[#4B2E1F] font-bold shadow-xs' : 'text-[#FDFFEB]/80 hover:bg-[#3D2418] hover:text-[#FDFFEB]'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `flex items-center gap-3 ${isCollapsed ? 'justify-center' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            className: `h-4.5 w-4.5 shrink-0 ${isActive ? 'text-[#4B2E1F]' : 'text-[#F4B8A5]'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate",
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                            lineNumber: 296,
                                                            columnNumber: 38
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                item.badge !== undefined && (isCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#F4B8A5] ring-2 ring-[#4B2E1F]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] font-bold px-2 py-0.5 rounded-md ${isActive ? 'bg-[#4B2E1F] text-[#FDFFEB]' : 'bg-[#F4B8A5] text-[#4B2E1F] border border-[#DE9784]'}`,
                                                    children: item.badge
                                                }, void 0, false, {
                                                    fileName: "[project]/src/admin/AdminSidebar.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)))
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/src/admin/AdminSidebar.tsx",
                                            lineNumber: 280,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/admin/AdminSidebar.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/admin/AdminSidebar.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 border-t border-[#3D2418] bg-[#3D2418]/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex items-center ${isCollapsed ? 'flex-col gap-2 justify-center' : 'justify-between px-1'}`,
                            children: [
                                !isCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden min-w-0 pr-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-bold text-[#FDFFEB] truncate",
                                            children: currentUser?.name || 'Administrator'
                                        }, void 0, false, {
                                            fileName: "[project]/src/admin/AdminSidebar.tsx",
                                            lineNumber: 329,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] text-[#DEE6BD] font-medium",
                                            children: "Super Admin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/admin/AdminSidebar.tsx",
                                            lineNumber: 332,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/admin/AdminSidebar.tsx",
                                    lineNumber: 328,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-8 w-8 rounded-lg bg-[#3D2418] text-[#F4B8A5] border border-[#DEE6BD]/20 flex items-center justify-center font-bold text-xs",
                                    title: currentUser?.name || 'Administrator',
                                    children: "A"
                                }, void 0, false, {
                                    fileName: "[project]/src/admin/AdminSidebar.tsx",
                                    lineNumber: 335,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        logout();
                                        navigate('/login');
                                    },
                                    className: `rounded-lg flex items-center justify-center text-[#FDFFEB]/70 hover:bg-red-950/50 hover:text-red-300 transition-colors cursor-pointer ${isCollapsed ? 'h-9 w-9 p-0' : 'h-8 w-8'}`,
                                    title: "Sign Out",
                                    "aria-label": "Sign Out",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/admin/AdminSidebar.tsx",
                                        lineNumber: 354,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/admin/AdminSidebar.tsx",
                                    lineNumber: 343,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/admin/AdminSidebar.tsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/admin/AdminSidebar.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/admin/AdminSidebar.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/admin/AdminSidebar.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AdminSidebar, "9DevRdjxyvYDSxdjQDz69tKVQho=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = AdminSidebar;
var _c;
__turbopack_context__.k.register(_c, "AdminSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin-dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboardRoutePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$routes$2f$RoleGuard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/routes/RoleGuard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$admin$2f$AdminDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/admin/AdminDashboard.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function AdminDashboardRoutePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$routes$2f$RoleGuard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoleGuard"], {
        allowedRoles: [
            'Admin'
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$admin$2f$AdminDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminDashboard"], {}, void 0, false, {
            fileName: "[project]/src/app/admin-dashboard/page.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin-dashboard/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = AdminDashboardRoutePage;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboardRoutePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/frames/circus-frame.png.mjs { IMAGE => \"[project]/src/assets/frames/circus-frame.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$frames$2f$circus$2d$frame$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/frames/circus-frame.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$frames$2f$circus$2d$frame$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 4000,
    height: 5900,
    blurWidth: 5,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAn0lEQVR42hXIuwrCMBiG4Z8KFaG0tQeTBo1B4wlxaLWlg2IHRV0yiKAiiK4OorOT9+kgXon5v+Xh/eB9Pv7u++3neVDfhxYbMk5VYFlS1qMczThRMGReXjbNSkTDJooNiaCFY1u+4GyAxoIU0CfuxDCMUhhUGdqrOWNI22zpey6VrcYI1b2AbmgnoIcH2gnsGK7r6WszS0+71fyGXnT/AY/dHCwjiaRsAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/frames/cute-frame.png.mjs { IMAGE => \"[project]/src/assets/frames/cute-frame.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$frames$2f$cute$2d$frame$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/frames/cute-frame.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$frames$2f$cute$2d$frame$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 4000,
    height: 5900,
    blurWidth: 5,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAlElEQVR42pXIsQqCQByA8f9b5EkOIXZd4StINKQWPlNv1FTRYBlcZBBJnCEYSgZJi9ESOqigo6vf8A0/cOg29q+HyKWrV3CjUeDaMcy1qdGXRCyJPVwPq5pqwIgMZWhECJFb4FhRJghxPOI6vCB0B/pMX8D9tAnZxfKO1tpzbPN5NpcZ/NiuTJNHkXz84v8N8zfblxUIaT2vct5y9wAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/frames/monochrome-frame.png.mjs { IMAGE => \"[project]/src/assets/frames/monochrome-frame.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$frames$2f$monochrome$2d$frame$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/frames/monochrome-frame.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$frames$2f$monochrome$2d$frame$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 4000,
    height: 5900,
    blurWidth: 5,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAs0lEQVR42gGoAFf/AJeWkOGJiIPdgX975oWCfd6VkoziACcmJUATExInKCgnYhQUFCglJSNAADc4N2kpKilMPT08gy4uLVM7OzpjABsbGisHBwcPIyMiUAkJCREeHh0sAC8vLlwYGRg9LS4tchwcG0EzMjFdACgpJ0gYGBguNDQycxwcGjUoKCdHACsrKkcaGhkvLi4tZhkZGTAnJyZCADMyL0YfHx0xMzMybh0dHDAsKyhDneMk+MqFbLUAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/frames/pixel-frame.png.mjs { IMAGE => \"[project]/src/assets/frames/pixel-frame.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$frames$2f$pixel$2d$frame$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/frames/pixel-frame.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$frames$2f$pixel$2d$frame$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 4000,
    height: 5900,
    blurWidth: 5,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAs0lEQVR42gGoAFf/AI1tja2CbICajm2PuIJrf5mLbY6yACgcLDgFBAUIMyY2UgQEBAYqHi1DAEg4SWAuKSo6Tz5QdS0oKjhJOUpoAJd5lL+QfYmwlniVyJB8ia+VeZTCAC4hMD4LCwoPOCo6VwsKCg0vIzFIAD0vPlEfHBwnRTZGaB4cGyU+MD9aALKXrOirkqfjrIys662TpuKxl6rpAPrs3v/pz9//5Mbf/+3V3//57N3+pgdFUl22D7AAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/frames/tape-frame.png.mjs { IMAGE => \"[project]/src/assets/frames/tape-frame.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$frames$2f$tape$2d$frame$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/frames/tape-frame.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$frames$2f$tape$2d$frame$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 4000,
    height: 5900,
    blurWidth: 5,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAm0lEQVR42m3LuwrCMBgF4B/a0Qvq2FnUlpQGExx0KpQYQfBCQzOIpKBYCopuTl6eo+/RJ8neR7EZBAcPHD7OcOB5UdX7dtT3bKdf14N+nFUF4YzKXrvldJoNp1sbTqkEir0IfkICNwK55Tn2RyRAQ2JMNjwHsWaZ7w0wcvvYKFbs9P8+GaO5bVn2t/VmkApe7uNFoZJlYUxjXn4AClok5yg8PngAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/frames.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INITIAL_FRAMES",
    ()=>INITIAL_FRAMES,
    "PHOTO_FILTERS",
    ()=>PHOTO_FILTERS,
    "addAuditLog",
    ()=>addAuditLog,
    "adminDeleteFrame",
    ()=>adminDeleteFrame,
    "adminModerateFrame",
    ()=>adminModerateFrame,
    "archiveCreatorFrame",
    ()=>archiveCreatorFrame,
    "getAllFrames",
    ()=>getAllFrames,
    "getApprovedActiveFrames",
    ()=>getApprovedActiveFrames,
    "getAuditLogs",
    ()=>getAuditLogs,
    "getFramesByCreator",
    ()=>getFramesByCreator,
    "getGuestPhotos",
    ()=>getGuestPhotos,
    "getLayoutGuideDownload",
    ()=>getLayoutGuideDownload,
    "getStandardSlots",
    ()=>getStandardSlots,
    "recordGuestPhoto",
    ()=>recordGuestPhoto,
    "saveAllFrames",
    ()=>saveAllFrames,
    "submitFrameForReview",
    ()=>submitFrameForReview,
    "updateCreatorFrame",
    ()=>updateCreatorFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$frames$2f$pixel$2d$frame$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$frames$2f$pixel$2d$frame$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/frames/pixel-frame.png.mjs { IMAGE => "[project]/src/assets/frames/pixel-frame.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$frames$2f$cute$2d$frame$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$frames$2f$cute$2d$frame$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/frames/cute-frame.png.mjs { IMAGE => "[project]/src/assets/frames/cute-frame.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$frames$2f$circus$2d$frame$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$frames$2f$circus$2d$frame$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/frames/circus-frame.png.mjs { IMAGE => "[project]/src/assets/frames/circus-frame.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$frames$2f$monochrome$2d$frame$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$frames$2f$monochrome$2d$frame$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/frames/monochrome-frame.png.mjs { IMAGE => "[project]/src/assets/frames/monochrome-frame.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$frames$2f$tape$2d$frame$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$frames$2f$tape$2d$frame$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/frames/tape-frame.png.mjs { IMAGE => "[project]/src/assets/frames/tape-frame.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
;
;
;
;
const resolveImgSrc = (img)=>typeof img === 'object' && img?.src ? img.src : String(img || '');
// Generate dynamic SVG frame data URL with Poppins typography
function createSvgFrameDataUrl(title, subtitle, theme, slots) {
    const width = 4000;
    const height = 5900;
    const bgGradient = theme === 'pink' ? [
        '#ffe4ec',
        '#fecdd3',
        '#fda4af'
    ] : theme === 'purple' ? [
        '#f3e8ff',
        '#e9d5ff',
        '#d8b4fe'
    ] : theme === 'dark' ? [
        '#0f172a',
        '#1e293b',
        '#334155'
    ] : theme === 'formal' ? [
        '#f8fafc',
        '#e2e8f0',
        '#cbd5e1'
    ] : [
        '#fef3c7',
        '#fde68a',
        '#fef9c3'
    ];
    const textColor = theme === 'dark' ? '#f8fafc' : '#4c1d95';
    const subtextColor = theme === 'dark' ? '#94a3b8' : '#6b21a8';
    const accentColor = theme === 'dark' ? '#38bdf8' : '#ec4899';
    const cutoutRects = slots.map((s)=>`<rect x="${s.x}" y="${s.y}" width="${s.w}" height="${s.h}" rx="30" fill="black" />`).join('');
    const slotBorders = slots.map((s)=>`<rect x="${s.x}" y="${s.y}" width="${s.w}" height="${s.h}" rx="30" fill="none" stroke="${accentColor}" stroke-width="12" opacity="0.6"/>`).join('');
    const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bgGradient[0]}" />
        <stop offset="50%" stop-color="${bgGradient[1]}" />
        <stop offset="100%" stop-color="${bgGradient[2]}" />
      </linearGradient>
      <mask id="cutoutMask">
        <rect width="${width}" height="${height}" fill="white" />
        ${cutoutRects}
      </mask>
    </defs>
    
    <rect width="${width}" height="${height}" fill="url(#frameGrad)" mask="url(#cutoutMask)" />
    
    <rect x="120" y="120" width="${width - 240}" height="${height - 240}" rx="60" fill="none" stroke="${accentColor}" stroke-width="16" opacity="0.35" />
    ${slotBorders}
    
    <text x="2000" y="5200" font-family="'Poppins', sans-serif" font-size="200" font-weight="800" text-anchor="middle" fill="${textColor}">
      ${title}
    </text>
    <text x="2000" y="5420" font-family="'Poppins', sans-serif" font-size="95" font-weight="600" text-anchor="middle" fill="${subtextColor}" letter-spacing="12">
      ${subtitle}
    </text>
    <circle cx="1200" cy="5140" r="30" fill="${accentColor}" />
    <circle cx="2800" cy="5140" r="30" fill="${accentColor}" />
  </svg>`.trim();
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
function getLayoutGuideDownload(poseCount) {
    const width = 4000;
    const height = 5900;
    const slots = getStandardSlots(poseCount);
    const slotGuide = slots.map((s, idx)=>`
    <rect x="${s.x}" y="${s.y}" width="${s.w}" height="${s.h}" rx="20" fill="none" stroke="#6b38d4" stroke-width="14" stroke-dasharray="24,16"/>
    <text x="${s.x + s.w / 2}" y="${s.y + s.h / 2}" font-family="'Poppins', sans-serif" font-size="120" font-weight="700" fill="#6b38d4" text-anchor="middle" dominant-baseline="middle">
      Slot #${idx + 1} (${s.w} x ${s.h}px)
    </text>`).join('');
    const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="${width}" height="${height}" fill="#f8fafc" />
    <rect x="80" y="80" width="${width - 160}" height="${height - 160}" fill="none" stroke="#cbd5e1" stroke-width="8" stroke-dasharray="16,16" />
    
    <text x="2000" y="240" font-family="'Inter', sans-serif" font-size="100" font-weight="800" fill="#1e293b" text-anchor="middle">
      POP@PIC! LAYOUT TEMPLATE GUIDE (${poseCount} POSES)
    </text>
    <text x="2000" y="320" font-family="'Inter', sans-serif" font-size="60" font-weight="500" fill="#64748b" text-anchor="middle">
      Standard Canvas: 4000 x 5900 px. Transparent areas reserved for photo slots.
    </text>
    
    ${slotGuide}
    
    <rect x="400" y="5250" width="3200" height="450" rx="30" fill="#f1f5f9" stroke="#e2e8f0" stroke-width="6"/>
    <text x="2000" y="5420" font-family="'Inter', sans-serif" font-size="65" font-weight="700" fill="#ea580c" text-anchor="middle">
      Creator Branding / Watermark Area (Leave blank or add artwork)
    </text>
    <text x="2000" y="5520" font-family="'Inter', sans-serif" font-size="50" font-weight="500" fill="#64748b" text-anchor="middle">
      Export your final design file in transparent PNG format.
    </text>
  </svg>`.trim();
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
function getStandardSlots(poseCount) {
    if (poseCount === 1) {
        // 1 Pose: Kotak besar di tengah
        return [
            {
                x: 500,
                y: 550,
                w: 3000,
                h: 4300
            }
        ];
    }
    if (poseCount === 2) {
        // 2 Poses: Susunan vertikal atas & bawah
        return [
            {
                x: 650,
                y: 480,
                w: 2700,
                h: 2150
            },
            {
                x: 650,
                y: 2850,
                w: 2700,
                h: 2150
            }
        ];
    }
    if (poseCount === 6) {
        // 6 Poses: Grid 2 kolom x 3 baris
        return [
            {
                x: 480,
                y: 380,
                w: 1460,
                h: 1420
            },
            {
                x: 2060,
                y: 380,
                w: 1460,
                h: 1420
            },
            {
                x: 480,
                y: 1930,
                w: 1460,
                h: 1420
            },
            {
                x: 2060,
                y: 1930,
                w: 1460,
                h: 1420
            },
            {
                x: 480,
                y: 3480,
                w: 1460,
                h: 1420
            },
            {
                x: 2060,
                y: 3480,
                w: 1460,
                h: 1420
            }
        ];
    }
    if (poseCount === 8) {
        // 8 Poses: Grid 2 kolom x 4 baris rapat
        return [
            {
                x: 480,
                y: 350,
                w: 1460,
                h: 1040
            },
            {
                x: 2060,
                y: 350,
                w: 1460,
                h: 1040
            },
            {
                x: 480,
                y: 1510,
                w: 1460,
                h: 1040
            },
            {
                x: 2060,
                y: 1510,
                w: 1460,
                h: 1040
            },
            {
                x: 480,
                y: 2670,
                w: 1460,
                h: 1040
            },
            {
                x: 2060,
                y: 2670,
                w: 1460,
                h: 1040
            },
            {
                x: 480,
                y: 3830,
                w: 1460,
                h: 1040
            },
            {
                x: 2060,
                y: 3830,
                w: 1460,
                h: 1040
            }
        ];
    }
    // Default 4 Poses: Grid 2 kolom x 2 baris
    return [
        {
            x: 480,
            y: 480,
            w: 1460,
            h: 1920
        },
        {
            x: 2060,
            y: 480,
            w: 1460,
            h: 1920
        },
        {
            x: 480,
            y: 2520,
            w: 1460,
            h: 1920
        },
        {
            x: 2060,
            y: 2520,
            w: 1460,
            h: 1920
        }
    ];
}
const fourSlots = getStandardSlots(4);
const oneSlot = getStandardSlots(1);
const twoSlots = getStandardSlots(2);
const sixSlots = getStandardSlots(6);
const eightSlots = getStandardSlots(8);
const INITIAL_FRAMES = [
    // 4 Poses
    {
        id: 'frm_pixel_arcade',
        name: 'Pixel Arcade',
        count: 4,
        image: resolveImgSrc(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$frames$2f$pixel$2d$frame$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$frames$2f$pixel$2d$frame$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]),
        desc: 'Retro 8-bit arcade aesthetic with energetic vibrant neon accents.',
        figmaWidth: 4000,
        slots: fourSlots,
        category: 'Retro',
        tags: [
            'Retro',
            'Arcade',
            '8Bit',
            'Y2K',
            'Gamer'
        ],
        author: 'Karima Ulya',
        creator_id: 'usr_creator_1',
        status: 'approved',
        is_active: true,
        created_at: '2026-03-01T10:00:00Z'
    },
    // 1 Poses
    {
        id: 'frm_cute_pastel',
        name: 'Cute Pastel',
        count: 1,
        image: resolveImgSrc(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$frames$2f$cute$2d$frame$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$frames$2f$cute$2d$frame$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]),
        desc: 'Sweet strawberry pastel tones with charming aesthetic stickers.',
        figmaWidth: 4000,
        slots: fourSlots,
        category: 'Cute',
        tags: [
            'Cute',
            'Pastel',
            'Aesthetic',
            'Pink',
            'Kawaii'
        ],
        author: 'Karima Ulya',
        creator_id: 'usr_creator_1',
        status: 'approved',
        is_active: true,
        created_at: '2026-03-02T12:00:00Z'
    },
    // 6 Poses
    {
        id: 'frm_circus_carnival',
        name: 'Circus Carnival',
        count: 6,
        image: resolveImgSrc(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$frames$2f$circus$2d$frame$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$frames$2f$circus$2d$frame$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]),
        desc: 'Joyful festival theme decorated with vintage circus ornaments.',
        figmaWidth: 4000,
        slots: fourSlots,
        category: 'Vintage',
        tags: [
            'Vintage',
            'Carnival',
            'Festive',
            'Retro',
            'Classic'
        ],
        author: 'Karima Ulya',
        creator_id: 'usr_creator_1',
        status: 'approved',
        is_active: true,
        created_at: '2026-03-03T15:00:00Z'
    },
    // 8 Poses
    {
        id: 'frm_monochrome_noir',
        name: 'Monochrome Noir',
        count: 8,
        image: resolveImgSrc(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$frames$2f$monochrome$2d$frame$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$frames$2f$monochrome$2d$frame$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]),
        desc: 'Clean black-and-white minimalist design with modern editorial flair.',
        figmaWidth: 4000,
        slots: fourSlots,
        category: 'Minimalist',
        tags: [
            'Minimalist',
            'Monochrome',
            'Noir',
            'Clean',
            'Modern'
        ],
        author: 'Nadhira Studio',
        creator_id: 'usr_creator_2',
        status: 'approved',
        is_active: true,
        created_at: '2026-03-04T09:00:00Z'
    },
    // 2 Poses
    {
        id: 'frm_tape_scrapbook',
        name: 'Tape Scrapbook',
        count: 2,
        image: resolveImgSrc(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$frames$2f$tape$2d$frame$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$frames$2f$tape$2d$frame$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]),
        desc: 'Vintage scrapbook journal style with aesthetic washi tape cutouts.',
        figmaWidth: 4000,
        slots: fourSlots,
        category: 'Vintage',
        tags: [
            'Vintage',
            'Scrapbook',
            'Aesthetic',
            'WashiTape',
            'Journal'
        ],
        author: 'Karima Ulya',
        creator_id: 'usr_creator_1',
        status: 'approved',
        is_active: true,
        created_at: '2026-03-05T14:30:00Z'
    },
    // 1 Pose
    {
        id: 'frm_solo_spotlight',
        name: 'Sweet Solo',
        count: 1,
        image: createSvgFrameDataUrl('Pop@Pic!', 'SWEET SOLO • EDITION 2026', 'pink', oneSlot),
        desc: 'Single portrait frame with gentle warm blush accents.',
        figmaWidth: 4000,
        slots: oneSlot,
        category: 'Cute',
        tags: [
            'Cute',
            'Solo',
            'Sweet',
            'Portrait',
            'Minimalist'
        ],
        author: 'Karima Ulya',
        creator_id: 'usr_creator_1',
        status: 'approved',
        is_active: true,
        created_at: '2026-03-06T11:00:00Z'
    },
    {
        id: 'frm_formal_mono',
        name: 'Formal Elegance',
        count: 1,
        image: createSvgFrameDataUrl('Pop@Pic!', 'EXECUTIVE PORTRAIT • 2026', 'formal', oneSlot),
        desc: 'Minimalist executive frame tailored for professional portraits and celebrations.',
        figmaWidth: 4000,
        slots: oneSlot,
        category: 'Formal',
        tags: [
            'Formal',
            'Executive',
            'Minimalist',
            'Clean',
            'Portrait'
        ],
        author: 'Nadhira Studio',
        creator_id: 'usr_creator_2',
        status: 'approved',
        is_active: true,
        created_at: '2026-03-07T16:00:00Z'
    },
    // 2 Poses
    {
        id: 'frm_duo_sweetheart',
        name: 'Duo Sweetheart',
        count: 2,
        image: createSvgFrameDataUrl('Pop@Pic!', 'BESTIES FOREVER • 2 CUT STRIP', 'purple', twoSlots),
        desc: 'Two-cut strip layout perfect for couples and best friends.',
        figmaWidth: 4000,
        slots: twoSlots,
        category: 'Cute',
        tags: [
            'Cute',
            'Besties',
            'Couple',
            'Purple',
            'Sweetheart'
        ],
        author: 'Karima Ulya',
        creator_id: 'usr_creator_1',
        status: 'approved',
        is_active: true,
        created_at: '2026-03-08T10:00:00Z'
    },
    {
        id: 'frm_vintage_diary',
        name: 'Vintage Diary',
        count: 2,
        image: createSvgFrameDataUrl('Pop@Pic!', 'MEMORY ARCHIVE • GOLDEN HOUR', 'cream', twoSlots),
        desc: 'Warm golden-hour tones inspired by classic memory albums.',
        figmaWidth: 4000,
        slots: twoSlots,
        category: 'Vintage',
        tags: [
            'Vintage',
            'Diary',
            'GoldenHour',
            'Retro',
            'Archive'
        ],
        author: 'Nadhira Studio',
        creator_id: 'usr_creator_2',
        status: 'approved',
        is_active: true,
        created_at: '2026-03-09T13:00:00Z'
    },
    // 6 Poses
    {
        id: 'frm_party_filmstrip',
        name: 'Party Filmstrip',
        count: 6,
        image: createSvgFrameDataUrl('Pop@Pic!', 'SIX-CUT SPREAD • PHOTO ARCHIVE', 'pink', sixSlots),
        desc: 'Dynamic 6-slot montage designed for lively group memories.',
        figmaWidth: 4000,
        slots: sixSlots,
        category: 'Cute',
        tags: [
            'Cute',
            'Party',
            'Filmstrip',
            'Group',
            'Memories'
        ],
        author: 'Karima Ulya',
        creator_id: 'usr_creator_1',
        status: 'approved',
        is_active: true,
        created_at: '2026-03-10T11:00:00Z'
    },
    {
        id: 'frm_minimal_six',
        name: 'Minimal Clean Grid',
        count: 6,
        image: createSvgFrameDataUrl('Pop@Pic!', 'CLEAN GRID • ARCHIVE 06', 'formal', sixSlots),
        desc: 'Modern 6-slot grid featuring architectural precision.',
        figmaWidth: 4000,
        slots: sixSlots,
        category: 'Minimalist',
        tags: [
            'Minimalist',
            'CleanGrid',
            'Modern',
            'Aesthetic',
            'Architecture'
        ],
        author: 'Nadhira Studio',
        creator_id: 'usr_creator_2',
        status: 'approved',
        is_active: true,
        created_at: '2026-03-11T14:00:00Z'
    },
    // Pending Review Example (for Admin approval demo)
    {
        id: 'frm_pending_y2k',
        name: 'Retro Y2K Cyber Butterfly',
        count: 4,
        image: createSvgFrameDataUrl('Pop@Pic!', 'Y2K CYBER • LIVE PREVIEW', 'purple', fourSlots),
        desc: 'Vibrant 2000s cyber butterfly aesthetic with holographic tones.',
        figmaWidth: 4000,
        slots: fourSlots,
        category: 'Retro',
        tags: [
            'Retro',
            'Y2K',
            'Cyber',
            'Holographic',
            'Butterfly'
        ],
        author: 'Karima Ulya',
        creator_id: 'usr_creator_1',
        status: 'pending_review',
        is_active: false,
        created_at: '2026-10-11T09:15:00Z'
    }
];
const PHOTO_FILTERS = [
    {
        id: 'normal',
        name: 'Normal',
        label: 'Natural',
        cssFilter: 'none',
        previewColor: '#e0e7ff',
        description: 'Original sharp colors without filter enhancements.'
    },
    {
        id: 'retro-90s',
        name: 'Retro 90s',
        label: '90s Vibe',
        cssFilter: 'sepia(0.28) contrast(1.15) brightness(1.05) saturate(1.25)',
        previewColor: '#fed7aa',
        description: 'Warm nostalgic 90s vintage camcorder look.'
    },
    {
        id: 'pastel-glow',
        name: 'Pastel Glow',
        label: 'Pastel',
        cssFilter: 'brightness(1.12) contrast(0.96) saturate(1.15) hue-rotate(-8deg)',
        previewColor: '#fbcfe8',
        description: 'Dreamy soft contrast with delicate pastel aura.'
    },
    {
        id: 'bw-noir',
        name: 'B&W Noir',
        label: 'Noir',
        cssFilter: 'grayscale(1) contrast(1.35) brightness(0.95)',
        previewColor: '#94a3b8',
        description: 'Photogenic high-contrast black & white tones.'
    },
    {
        id: 'cyber-neon',
        name: 'Cyber Neon',
        label: 'Neon',
        cssFilter: 'contrast(1.22) saturate(1.65) hue-rotate(35deg) brightness(1.06)',
        previewColor: '#c084fc',
        description: 'Electric ultraviolet and cyber neon tones.'
    },
    {
        id: 'soft-warm',
        name: 'Soft Warm',
        label: 'Warm',
        cssFilter: 'sepia(0.35) saturate(1.3) brightness(1.04) contrast(1.05)',
        previewColor: '#fef08a',
        description: 'Enchanting golden-hour sunset radiance.'
    },
    {
        id: 'vintage-film',
        name: 'Vintage Film',
        label: '35mm Film',
        cssFilter: 'sepia(0.4) contrast(0.92) brightness(1.08) hue-rotate(-18deg)',
        previewColor: '#e2e8f0',
        description: 'Classic analog 35mm film grain and tone emulation.'
    },
    {
        id: 'vibrant-pop',
        name: 'Vibrant Pop',
        label: 'Vivid',
        cssFilter: 'saturate(1.55) contrast(1.18) brightness(1.03)',
        previewColor: '#fb7185',
        description: 'Sharp, punchy saturation and vivid colors for maximum pop.'
    },
    {
        id: 'teal-orange',
        name: 'Cinematic Teal',
        label: 'Cinematic',
        cssFilter: 'contrast(1.25) saturate(1.35) hue-rotate(-15deg) brightness(1.02)',
        previewColor: '#2dd4bf',
        description: 'Modern blockbuster cinematic contrast with deep tones.'
    }
];
// Persistent Frames Store
const STORAGE_KEY_FRAMES = 'popatpic_frames_db';
const STORAGE_KEY_AUDIT = 'popatpic_audit_logs';
const STORAGE_KEY_PHOTOS = 'popatpic_guest_photos_db';
function getAllFrames() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(STORAGE_KEY_FRAMES);
        if (raw) {
            const parsed = JSON.parse(raw);
            // Map initial tags fallback if missing from cached items
            const initialMap = new Map();
            INITIAL_FRAMES.forEach((initF)=>{
                if (initF.tags) initialMap.set(initF.id, initF.tags);
            });
            return parsed.map((f)=>{
                if (!f.tags || f.tags.length === 0) {
                    const fallback = initialMap.get(f.id) || [
                        f.category,
                        'Aesthetic'
                    ];
                    return {
                        ...f,
                        tags: fallback
                    };
                }
                return f;
            });
        }
    } catch (e) {
        console.error('Failed reading frames store', e);
    }
    return INITIAL_FRAMES;
}
function saveAllFrames(frames) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(STORAGE_KEY_FRAMES, JSON.stringify(frames));
}
function getApprovedActiveFrames() {
    return getAllFrames().filter((f)=>f.status === 'approved' && f.is_active);
}
function getFramesByCreator(creatorId) {
    return getAllFrames().filter((f)=>f.creator_id === creatorId);
}
function submitFrameForReview(data, creatorId, creatorName) {
    const all = getAllFrames();
    const slots = data.slots && data.slots.length > 0 ? data.slots : getStandardSlots(data.count);
    const tags = data.tags && data.tags.length > 0 ? data.tags : [
        data.category,
        'Aesthetic'
    ];
    const newFrame = {
        id: `frm_${Date.now()}`,
        name: data.name,
        desc: data.desc,
        count: data.count,
        image: data.image,
        figmaWidth: 4000,
        slots,
        category: data.category,
        tags,
        author: creatorName,
        creator_id: creatorId,
        status: 'pending_review',
        is_active: false,
        created_at: new Date().toISOString()
    };
    const updated = [
        newFrame,
        ...all
    ];
    saveAllFrames(updated);
    return newFrame;
}
function updateCreatorFrame(frameId, creatorId, updates) {
    const all = getAllFrames();
    const index = all.findIndex((f)=>f.id === frameId && f.creator_id === creatorId);
    if (index === -1) return false;
    const target = all[index];
    // Jika ada status spesifik yang dikirim (misal 'approved'), gunakan status tersebut.
    // Jika tidak, default-kan frame draft/rejected menjadi 'pending_review'.
    const newStatus = updates.status || (target.status === 'draft' || target.status === 'rejected' ? 'pending_review' : target.status);
    all[index] = {
        ...target,
        ...updates,
        status: newStatus,
        is_active: newStatus === 'approved' ? true : target.is_active,
        rejection_reason: undefined,
        updated_at: new Date().toISOString()
    };
    saveAllFrames(all);
    return true;
}
function archiveCreatorFrame(frameId, creatorId) {
    const all = getAllFrames();
    const index = all.findIndex((f)=>f.id === frameId && f.creator_id === creatorId);
    if (index === -1) return false;
    all[index] = {
        ...all[index],
        status: 'archived',
        is_active: false,
        updated_at: new Date().toISOString()
    };
    saveAllFrames(all);
    return true;
}
function adminModerateFrame(frameId, decision, adminId, adminName, reason) {
    const all = getAllFrames();
    const index = all.findIndex((f)=>f.id === frameId);
    if (index === -1) return false;
    const frame = all[index];
    let actionName = 'APPROVE_FRAME';
    let details = '';
    if (decision === 'approve') {
        frame.status = 'approved';
        frame.is_active = true;
        frame.rejection_reason = undefined;
        actionName = 'APPROVE_FRAME';
        details = `Approved frame "${frame.name}" for public listing.`;
    } else if (decision === 'reject') {
        frame.status = 'rejected';
        frame.is_active = false;
        frame.rejection_reason = reason || 'Does not comply with layout guidelines or design standards.';
        actionName = 'REJECT_FRAME';
        details = `Rejected frame "${frame.name}". Reason: ${frame.rejection_reason}`;
    } else if (decision === 'archive') {
        frame.status = 'archived';
        frame.is_active = false;
        actionName = 'ARCHIVE_FRAME';
        details = `Archived frame "${frame.name}".`;
    } else if (decision === 'toggle_active') {
        frame.is_active = !frame.is_active;
        actionName = 'TOGGLE_FRAME_STATUS';
        details = `Updated public visibility for frame "${frame.name}" to ${frame.is_active ? 'Active' : 'Inactive'}.`;
    }
    frame.updated_at = new Date().toISOString();
    saveAllFrames(all);
    // Write to Audit Log (BR-012, F-A12)
    addAuditLog({
        id: `log_${Date.now()}`,
        adminId,
        adminName,
        action: actionName,
        targetType: 'frame',
        targetId: frame.id,
        details,
        timestamp: new Date().toISOString()
    });
    return true;
}
function getAuditLogs() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(STORAGE_KEY_AUDIT);
        if (raw) return JSON.parse(raw);
    } catch (e) {
        console.error('Failed reading audit logs', e);
    }
    return [
        {
            id: 'log_seed_1',
            adminId: 'usr_admin_1',
            adminName: 'Pop@Pic! Admin',
            action: 'APPROVE_FRAME',
            targetType: 'frame',
            targetId: 'frm_pixel_arcade',
            details: 'Approved frame "Pixel Arcade" created by Karima Ulya.',
            timestamp: '2026-03-01T10:05:00Z'
        },
        {
            id: 'log_seed_2',
            adminId: 'usr_admin_1',
            adminName: 'Pop@Pic! Admin',
            action: 'ACTIVATE_CREATOR',
            targetType: 'creator',
            targetId: 'usr_creator_1',
            details: 'Activated Creator status for Karima Ulya.',
            timestamp: '2026-02-15T11:00:00Z'
        }
    ];
}
function addAuditLog(log) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const existing = getAuditLogs();
    const updated = [
        log,
        ...existing
    ];
    localStorage.setItem(STORAGE_KEY_AUDIT, JSON.stringify(updated));
}
function getGuestPhotos() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(STORAGE_KEY_PHOTOS);
        if (raw) return JSON.parse(raw);
    } catch (e) {
        console.error('Failed reading photos records', e);
    }
    return [];
}
function recordGuestPhoto(record) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const existing = getGuestPhotos();
    const updated = [
        record,
        ...existing.slice(0, 49)
    ];
    localStorage.setItem(STORAGE_KEY_PHOTOS, JSON.stringify(updated));
}
function adminDeleteFrame(frameId) {
    const all = getAllFrames();
    const updated = all.filter((f)=>f.id !== frameId);
    saveAllFrames(updated);
    return true;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/routes/RoleGuard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoleGuard",
    ()=>RoleGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-in.js [app-client] (ecmascript) <export default as LogIn>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const RoleGuard = ({ allowedRoles, requireActiveCreator = true, children, fallbackPath })=>{
    _s();
    const { currentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"])();
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"])();
    if (!currentUser) {
        if (fallbackPath) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navigate"], {
                to: fallbackPath,
                state: {
                    from: location.pathname
                },
                replace: true
            }, void 0, false, {
                fileName: "[project]/src/routes/RoleGuard.tsx",
                lineNumber: 28,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navigate"], {
            to: "/login",
            state: {
                from: location.pathname
            },
            replace: true
        }, void 0, false, {
            fileName: "[project]/src/routes/RoleGuard.tsx",
            lineNumber: 30,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    const hasRole = allowedRoles.includes(currentUser.role);
    const isSuspended = currentUser.role === 'Creator' && requireActiveCreator && currentUser.creatorStatus === 'suspended';
    if (!hasRole || isSuspended) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#FAF6F0] flex flex-col items-center justify-center p-6 text-center font-sans text-[#2C211B]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-16 w-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4 shadow-xs",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "h-8 w-8"
                    }, void 0, false, {
                        fileName: "[project]/src/routes/RoleGuard.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/routes/RoleGuard.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-serif text-[#2C211B] mb-2",
                    children: isSuspended ? 'Creator Account Suspended' : 'Access Restricted'
                }, void 0, false, {
                    fileName: "[project]/src/routes/RoleGuard.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-stone-500 max-w-sm mb-6 leading-relaxed",
                    children: isSuspended ? 'Your Creator account has been suspended by an Administrator due to a policy violation. Please contact support.' : `You need an authorized ${allowedRoles.join(' or ')} account to access this page. Currently signed in as @${currentUser.username} (${currentUser.role}).`
                }, void 0, false, {
                    fileName: "[project]/src/routes/RoleGuard.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>navigate('/'),
                            className: "inline-flex items-center gap-1.5 rounded-lg border border-[#EDE3D5] bg-[#FFFDF9] px-4 py-2.5 text-xs font-semibold text-stone-700 hover:bg-orange-50 cursor-pointer transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/routes/RoleGuard.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Return to Home"
                                }, void 0, false, {
                                    fileName: "[project]/src/routes/RoleGuard.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/routes/RoleGuard.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>navigate('/login'),
                            className: "inline-flex items-center gap-1.5 rounded-lg bg-stone-900 px-5 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-stone-800 cursor-pointer transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__["LogIn"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/routes/RoleGuard.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Switch Account"
                                }, void 0, false, {
                                    fileName: "[project]/src/routes/RoleGuard.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/routes/RoleGuard.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/routes/RoleGuard.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/routes/RoleGuard.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/routes/RoleGuard.tsx",
        lineNumber: 73,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(RoleGuard, "fT2lGKtGILm6Vrdms14Ym6zZeJA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"]
    ];
});
_c = RoleGuard;
var _c;
__turbopack_context__.k.register(_c, "RoleGuard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/src/assets/frames/circus-frame.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/circus-frame.3ajyjj08m5gsy.png");}),
"[project]/src/assets/frames/cute-frame.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/cute-frame.0bbjxj421klkz.png");}),
"[project]/src/assets/frames/monochrome-frame.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/monochrome-frame.26a-41aon4_r9.png");}),
"[project]/src/assets/frames/pixel-frame.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/pixel-frame.3m7znpzi65x4b.png");}),
"[project]/src/assets/frames/tape-frame.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/tape-frame.0mulb2niy8wb7.png");}),
]);

//# sourceMappingURL=src_08niypu6xbdyv._.js.map