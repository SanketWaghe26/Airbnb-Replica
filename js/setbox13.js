(window.webpackJsonp = window.webpackJsonp || []).push([["cf68"], { "/ykl": function (e, t, n) { "use strict"; n.d(t, "a", (function () { return o })); var r = n("ilXw"), i = n.n(r); function o() { return i.a.get("china-guest-loop") } }, "6aHl": function (e, t, n) { "use strict"; n.d(t, "a", (function () { return c })), n.d(t, "b", (function () { return u })); var r = n("9pTB"), i = n.n(r), o = n("YHGo"), a = n("lqUL"), s = n("DP9I"); function c(e) { var t; return Object(s.c)() ? (t = Object(o.d)(), e && t.push(e)) : t = Object(s.a)() ? Object(o.a)() : Object(o.b)(), i.a.set("react-router-v4-history", t), a.a.handleNewHistory(t), t } function u(e) { return i.a.setIfMissingThenGet("react-router-v4-history", (function () { return c(e) })) } }, "7vv6": function (e, t, n) { "use strict"; function r(e, t) { var n = e.longTasks, r = t.start, i = t.end; return n.filter((function (e) { return e.startTime > r && (!i || e.startTime < i) })).sort((function (e, t) { return e.startTime - t.startTime })).map((function (e, t) { return { entry: e, index: t } })) } function i(e, t) { return r(e, t).reduce((function (e, t) { return e + t.entry.duration - 50 }), 0) } function o(e) { var t = e.ttfcp; return i(e, { start: void 0 === t ? 0 : t }) } function a(e, t) { var n = e.ttfcp; if (void 0 !== t) return i(e, { start: void 0 === n ? 0 : n, end: t }) } function s(e, t) { var n = e.ttfcp, r = void 0 === n ? 0 : n; if (void 0 !== t) return i(e, { start: Math.max(t, r) }) } function c(e) { var t = e.ttfcp, n = void 0 === t ? 0 : t, i = r(e, { start: n }); if (0 !== i.length) return r(e, { start: n }).reduce((function (e, t) { return t.entry.duration > e.entry.duration ? t : e }), i[0]) } function u(e) { var t = c(e); if (t) return t.entry.duration - 50 } function l(e) { var t; return null === (t = c(e)) || void 0 === t ? void 0 : t.index } n.d(t, "e", (function () { return o })), n.d(t, "d", (function () { return a })), n.d(t, "c", (function () { return s })), n.d(t, "b", (function () { return u })), n.d(t, "a", (function () { return l })) }, DP9I: function (e, t, n) { "use strict"; n.d(t, "c", (function () { return i })), n.d(t, "a", (function () { return o })), n.d(t, "b", (function () { return a })); var r = n("uEBT"); function i() { return !r.canUseDOM } function o() { return !i() && Object(r.supportsHistory)() } function a() { return !i() && !o() } }, F52i: function (e, t, n) { "use strict"; n.d(t, "a", (function () { return r })), n.d(t, "b", (function () { return i })), n.d(t, "c", (function () { return o })); var r = "FMP-target", i = "hydrate-meaningful-element", o = "hydrate-performance-hoc" }, ImBj: function (e, t, n) { "use strict"; (function (e) { n.d(t, "a", (function () { return f })); var r, i = n("8dvS"), o = n.n(i), a = n("ilXw"), s = n.n(a), c = n("Q/Zp"), u = n("/ykl"), l = n("lVss"); function d() { return (t = window.navigator, void 0 === t ? Promise.resolve(!1) : "serviceWorker" in t && t.serviceWorker.getRegistration ? t.serviceWorker.getRegistration("/").then((function (e) { return !(!e || !e.active) })).catch((function () { return !1 })) : Promise.resolve(!1)).then((function (t) { if (!t) return !1; var n = e.window && Object(l.b)(); if (!n || !n.getEntriesByType) return !1; var r = n.getEntriesByType("navigation"); if (!r || 0 === r.length) return !1; var i = r[0].serverTiming; return !(!i || 0 === i.length) && i.filter((function (e) { return "serviceWorker" === e.name })).length > 0 })).catch((function () { return !1 })); var t } function f(e) { return d().then((function (t) { return e ? Promise.resolve(2) : t ? Promise.resolve(4) : 1 === r ? Promise.resolve(5) : Promise.resolve(1) })) } (function () { if (!Object(u.a)()) { for (var e = o()("cache_state"), t = document.location.pathname, n = t.lastIndexOf("/"); -1 !== n;) { var i = t.slice(0, n); o()("cache_state", -1, { expires: -1, domain: Object(c.a)(), path: "".concat(i, "/") }), n = i.lastIndexOf("/") } if ("0" === e) r = 2; else if ("1" === e) r = 1; else { var a = Date.now(), l = (s.a.get("layout-init") || {}).tracking_context, d = void 0 === l ? null : l; if (d && d.action && d.action.includes("app_shell")) return; var f = s.a.get("pageGeneratedAt") || a; r = a - f > 6e5 ? 1 : 3 } } })() }).call(this, n("yLpj")) }, ItxH: function (e, t, n) { "use strict"; function r() { switch (document.visibilityState) { case "visible": return 1; case "hidden": return 2; case "prerender": return 3; default: return 4 } } n.d(t, "a", (function () { return r })) }, "Q/Zp": function (e, t, n) { "use strict"; function r() { for (var e = window.location.hostname, t = e.split("."), n = t.length, r = ["airbnb", "airbnbchina", "luxuryretreats", "airbnb-dev"], i = 0; i < r.length; i += 1) { var o = t.indexOf(r[i]); if (o >= 0) return ".".concat(t.slice(o, n).join(".")) } return e } n.d(t, "a", (function () { return r })) }, iljR: function (e, t, n) { "use strict"; n.d(t, "a", (function () { return i })); var r = { transfer_size: 0, encodedbody_size: 0, decodedbody_size: 0, count: 0, cache_hit_ratio: 0 }; function i(e) { var t, n, i, o, a, s = e.resources; if (!(0 === s.length || s.length > 0 && void 0 === s[0].decodedBodySize)) { var c, u, l = ["link", "img", "css", "script", "other"], d = [{ type: "css", initiatorList: ["link"], regex: /.+(muscache|localhost).+\.css(\?.*)?$/ }, { type: "img", initiatorList: ["img", "css"], regex: /.+(muscache|localhost).+(jpg|png|gif|webp)(\?.*)?$/ }, { type: "js", category: "airbnb", initiatorList: ["link", "script"], regex: /.+(muscache|localhost).+\.m?(js|bundle)(\?.*)?$/ }, { type: "js", category: "third_party", initiatorList: ["link", "script"], regex: /^((?!(muscache|localhost)).)*\.m?js(\?.*)?$/ }, { type: "font", initiatorList: ["link", "css", "other"], regex: /^.+(muscache|localhost).+\.woff2(\?.*)?$/ }], f = { css: Object.assign({}, r), js: { airbnb: Object.assign({}, r), third_party: Object.assign({}, r) }, img: Object.assign({}, r), font: Object.assign({}, r) }; if (s.filter((function (e) { var t = e.initiatorType; return l.includes(t) })).forEach((function (e) { var t = e.name, n = e.initiatorType, r = e.decodedBodySize, i = e.transferSize, o = e.encodedBodySize; d.find((function (e) { var a = e.type, s = e.initiatorList, c = e.regex, u = e.category; if (s.includes(n) && t.match(c)) { var l = u ? f[a][u] : f[a], d = l.count * l.cache_hit_ratio + (0 === i ? 1 : 0); return l.count += 1, l.cache_hit_ratio = d ? d / l.count : 0, l.transfer_size += i, l.encodedbody_size += o, l.decodedbody_size += r, !0 } return !1 })) })), f.css = (null === (t = f.css) || void 0 === t ? void 0 : t.count) ? f.css : void 0, null === (n = f.js) || void 0 === n || null === (i = n.airbnb) || void 0 === i ? void 0 : i.count) 0 === (null === (c = f.js) || void 0 === c || null === (u = c.third_party) || void 0 === u ? void 0 : u.count) && (f.js.third_party.cache_hit_ratio = 1); else f.js = void 0; if (f.img = (null === (o = f.img) || void 0 === o ? void 0 : o.count) ? f.img : void 0, f.font = (null === (a = f.font) || void 0 === a ? void 0 : a.count) ? f.font : void 0, Object.values(f).find((function (e) { return !!e }))) return f } } }, lVss: function (e, t, n) { "use strict"; n.d(t, "b", (function () { return i })), n.d(t, "a", (function () { return a })), n.d(t, "c", (function () { return s })); var r = n("IzZ0"); function i() { var e = { now: function () { return Date.now() }, mark: function () { }, measure: function () { }, getEntriesByName: function () { return [] }, getEntriesByType: function () { return [] }, clearMarks: function () { }, clearMeasures: function () { }, timeOrigin: 0, timing: { connectEnd: 0, connectStart: 0, domComplete: 0, domContentLoadedEventEnd: 0, domContentLoadedEventStart: 0, domInteractive: 0, domLoading: 0, domainLookupEnd: 0, domainLookupStart: 0, fetchStart: 0, loadEventEnd: 0, loadEventStart: 0, navigationStart: 0, redirectEnd: 0, redirectStart: 0, requestStart: 0, responseEnd: 0, responseStart: 0, secureConnectionStart: 0, unloadEventEnd: 0, unloadEventStart: 0, toJSON: function () { } }, isMocked: !0 }, t = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || void 0; if (void 0 !== t) { var n = t.now || t.mozNow || t.msNow || t.webkitNow; return n && (t.now || (t.now = n)), Object.keys(e).forEach((function (n) { n in t || "function" != typeof e[n] || (t[n] = e[n]) })), t } return e } var o = { 0: 2, 1: 4, 2: 1 }, a = i(); function s() { var e, t = i(); if (t.getEntriesByType) { var n = t.getEntriesByType("navigation")[0]; if (n) return r.a[n.type] } return "number" == typeof (null == t || null === (e = t.navigation) || void 0 === e ? void 0 : e.type) && o[t.navigation.type] || 5 } }, lqUL: function (e, t, n) { "use strict"; var r = n("Y195"), i = n("g8Fj"), o = n("ANar"), a = n("acAX"), s = n("lVss"), c = n("jt0Q"), u = n("hlFt"), l = n("wO/7"); t.a = new function () { var e = this; this.performanceRecorders = [], this.pauseInfo = { pauseStart: 0, pauseDuration: 0, pausePending: !1 }, this.currentPathname = "", this.currentSearch = "", this.updateCurrentRecorderWithHOCProps = function (t) { var n = e.performanceRecorders[e.performanceRecorders.length - 1]; n && (n.universalPageName = t.universalPageName, n.impressionUuid = t.impressionUuid, n.eventData = t.eventData, n.eventDataSchema = t.eventDataSchema, n.isDirectRequest || n.setTTFCP(t.timestampOfFCP)) }, this.handleNewHistory = function (t) { t.listen(e.onHistoryChange) }, this.setIgnorePathnameUpdate = function (t) { e.ignorePathnameUpdate = t }, this.clearIgnorePathnameUpdate = function () { e.ignorePathnameUpdate = void 0 }, this.setIncludeHistoryUpdate = function (t) { e.includeHistoryUpdate = t }, this.clearIncludeHistoryUpdate = function () { e.includeHistoryUpdate = void 0 }, this.startNextPageTimer = function () { e.nextPageCreatedAt = Object(s.b)().now() }, this.pauseNextPageTimer = function () { e.pauseInfo.pausePending = !0, e.pauseInfo.pauseStart = Object(s.b)().now() }, this.resumeNextPageTimer = function () { e.pauseInfo.pausePending = !1, e.pauseInfo.pauseDuration += Object(s.b)().now() - e.pauseInfo.pauseStart, e.pauseInfo.pauseStart = 0 }, this.createNewRecorder = function (t) { var n = t.isDirectRequest, r = e.performanceRecorders[e.performanceRecorders.length - 1]; r && (Object(c.a)() ? Object(u.a)(r.retire, { priority: "background" }) : r.retire()); var i = e.getNextPageCreatedAt(); e.performanceRecorders.push(new l.a({ isDirectRequest: n, pageCreatedAt: i })) }, this.getNextPageCreatedAt = function () { var t; return e.nextPageCreatedAt && e.pauseInfo.pauseDuration ? t = e.nextPageCreatedAt + e.pauseInfo.pauseDuration : e.pauseInfo.pausePending ? (Object(o.a)("page_transition_coordinator.page_timer.resume_error", 1, "pathname:".concat(window.location.pathname)), t = e.nextPageCreatedAt) : e.nextPageCreatedAt && (t = e.nextPageCreatedAt), e.nextPageCreatedAt = void 0, t }, this.onHistoryChange = function (t, n) { var r = t.pathname, i = t.search; e.isPageTransition({ action: n, prevPathname: e.currentPathname, prevSearch: e.currentSearch, nextPathname: r, nextSearch: i }) && (e.flushAllEvents(), e.createNewRecorder({ isDirectRequest: !1 })), e.currentPathname = r, e.currentSearch = i }, this.isPageTransition = function (t) { if ("function" == typeof e.includeHistoryUpdate) return e.includeHistoryUpdate(t); var n = t.action, r = t.prevPathname, i = t.nextPathname; return !(!r || !i) && (r !== i && (("function" != typeof e.ignorePathnameUpdate || !e.ignorePathnameUpdate(r, i)) && ["POP", "PUSH", "REPLACE"].includes(n))) }, this.flushAllEvents = function () { Object(a.e)() || (e.performanceRecorders.forEach((function (e) { e.retired || e.retire(), e.isRecordingLoggable() && i.a.queueJitneyEvent({ schema: r.a, event_data: { assets: e.unthrottleableMetrics.assets, page_request_method: e.pageRequestMethod, universal_page_name: e.universalPageName, impression_uuid: e.impressionUuid, ttfcp: e.throttleableMetrics.ttfcp, ttfmp: e.throttleableMetrics.ttfmp, fid: e.throttleableMetrics.fid, tbt: e.throttleableMetrics.totalBlockingTime, event_data: e.eventData, event_data_schema: e.eventDataSchema, domain_and_path: e.domainAndPath, network_information: e.networkInformation, web_performance_timing: e.throttleableMetrics.webPerformanceTiming, tbt_pre_hydrate: e.throttleableMetrics.tbtPreHydrate, tbt_post_hydrate: e.throttleableMetrics.tbtPostHydrate, time_to_hydrate: e.throttleableMetrics.timeToHydrate, recorder_duration: e.throttleableMetrics.recorderDuration, time_to_fid: e.throttleableMetrics.timeToFid, number_of_blocking_tasks: e.throttleableMetrics.numberOfBlockingTasks, number_of_long_input_delays: e.unthrottleableMetrics.numberOfLongInputDelays, total_duration_of_long_input_delays: e.unthrottleableMetrics.totalDurationOfLongInputDelays, long_input_delays: e.unthrottleableMetrics.longInputDelays, long_input_delay_counts: e.unthrottleableMetrics.longInputDelayCounts, timed_interactions: e.unthrottleableMetrics.timedInteractions, longest_blocking_time: e.throttleableMetrics.longestBlockingTime, longest_blocking_task_index: e.throttleableMetrics.longestBlockingTaskIndex, cumulative_layout_shift: e.unthrottleableMetrics.cumulativeLayoutShift, lcp: e.throttleableMetrics.lcp } }) })), e.performanceRecorders = [], i.a.getLogger().flushEventQueue()) }, this.setPageCloseHandlers = function () { window.addEventListener("beforeunload", e.flushAllEvents, !0), window.addEventListener("visibilitychange", (function () { "hidden" === document.visibilityState && e.flushAllEvents() })), Object(a.o)() && window.addEventListener("pagehide", e.flushAllEvents) }, this.currentPathname = window.location.pathname, this.currentSearch = window.location.search, this.createNewRecorder({ isDirectRequest: !0 }), this.setPageCloseHandlers() } }, r5zi: function (e, t, n) { "use strict"; n.d(t, "b", (function () { return o })), n.d(t, "a", (function () { return a })), n.d(t, "c", (function () { return s })); var r = n("ilXw"), i = n.n(r); function o() { return { www_cdn_provider: i.a.get("wwwCdnProvider") || "Unknown" } } function a() { if (window.navigator && window.navigator.connection) { var e = window.navigator.connection; return { effective_type: e.effectiveType, rtt: e.rtt, downlink: e.downlink } } } function s() { if (window.performance && window.performance.timing) { var e = window.performance.timing; return { navigation_start_timestamp_in_ms: e.navigationStart, time_to_redirect_start_in_ms: e.redirectStart, time_to_redirect_end_in_ms: e.redirectEnd, time_to_fetch_start_in_ms: e.fetchStart, time_to_domain_lookup_start_in_ms: e.domainLookupStart, time_to_domain_lookup_end_in_ms: e.domainLookupEnd, time_to_connect_start_in_ms: e.connectStart, time_to_connect_end_in_ms: e.connectEnd, time_to_secure_connection_start_in_ms: e.secureConnectionStart, time_to_request_start_in_ms: e.requestStart, time_to_response_start_in_ms: e.responseStart, time_to_response_end_in_ms: e.responseEnd, time_to_dom_loading_in_ms: e.domLoading, time_to_dom_interactive_in_ms: e.domInteractive, time_to_dom_content_loaded_event_start_in_ms: e.domContentLoadedEventStart, time_to_dom_content_loaded_event_end_in_ms: e.domContentLoadedEventEnd, time_to_dom_complete_in_ms: e.domComplete, time_to_load_event_start_in_ms: e.loadEventStart, time_to_load_event_end_in_ms: e.loadEventEnd } } } }, "wO/7": function (e, t, n) { "use strict"; n.d(t, "a", (function () { return f })); var r = n("lVss"), i = n("6Tiy"), o = n("ItxH"), a = n("ImBj"), s = n("r5zi"), c = n("7vv6"), u = n("iljR"), l = n("F52i"), d = new Set(["click", "input", "keypress"]), f = function e(t) { var n = this, f = t.isDirectRequest, p = t.pageCreatedAt; this.networkInformation = Object(s.a)(), this.initialVisibilityState = Object(o.a)(), this.performance = Object(r.b)(), this.pageRequestMethod = 1, this.domainAndPath = "".concat(window.location.host).concat(window.location.pathname), this.throttleableMetrics = { longTasks: [] }, this.unthrottleableMetrics = { assets: {}, longInputDelays: [], longInputDelayCounts: [], numberOfLongInputDelays: 0, timedInteractions: [], totalDurationOfLongInputDelays: 0, resources: [] }, this.retired = !1, this.showLogs = "string" == typeof Object(i.a)().pps, this.retire = function () { n.retired || (n.retired = !0, n.cleanUpLongTasks(), n.cleanupLongInputDelayObserver(), n.cleanupTimedInteractionObserver(), n.cleanUpResources(), n.cleanUpClsObserver(), n.cleanUpLcpObserver(), n.throttleableMetrics.recorderDuration = n.performance.now() - n.createdAt, n.throttleableMetrics.timeToHydrate = n.calculateTimeToHydrate(), n.hasNecessaryPolyfills() && window.perfMetrics.stopSearchingForFirstMeaningfulPaint()) }, this.gatherUnthrottleableMetrics = function () { n.listenForResources(), n.listenForCLS(), n.listenForLongInputDelays(), n.listenForTimedInteractions() }, this.gatherThrottleableMetrics = function () { n.listenForFCP(), n.listenForFMP(), n.listenForFID(), n.listenForLongTasks(), n.listenForLCP(), n.throttleableMetrics.webPerformanceTiming = Object.assign({}, Object(s.b)(), n.isDirectRequest && Object(s.c)()) }, this.isRecordingLoggable = function () { return void 0 !== n.throttleableMetrics.ttfcp }, this.listenForFCP = function () { n.isClientSideRequest || window.perfMetrics.onFirstContentfulPaint(n.setTTFCP) }, this.setTTFCP = function (e) { n.retired || n.throttleableMetrics.ttfcp || (n.throttleableMetrics.ttfcp = e - n.createdAt, n.isClientSideRequest && (n.performance.mark("TTFCP_END"), n.performance.measure("TTFCP", "CSR_PAGE_START", "TTFCP_END")), n.showLogs && n.consoleLogMetrics()) }, this.listenForFMP = function () { n.retired || (n.isClientSideRequest && window.perfMetrics.startSearchingForFirstMeaningfulPaint(), window.perfMetrics.onFirstMeaningfulPaint(n.setTTFMP)) }, this.setTTFMP = function (e) { n.retired || (n.throttleableMetrics.ttfmp = e - n.createdAt, n.isClientSideRequest && (n.performance.mark("TTFMP_END"), n.performance.measure("TTFMP", "CSR_PAGE_START", "TTFMP_END")), n.showLogs && n.consoleLogMetrics()) }, this.listenForFID = function () { window.perfMetrics.clearFirstInputDelay(), window.perfMetrics.onFirstInputDelay(n.setFID) }, this.setFID = function (e, t) { if (!n.retired) { n.throttleableMetrics.fid = e; var r = t.timeStamp - n.createdAt; r >= 0 && (n.throttleableMetrics.timeToFid = r), n.showLogs && n.consoleLogMetrics() } }, this.listenForTimedInteractions = function () { if (n.supportsPerformanceObserverWithType("element")) { n.cleanupTimedInteractionObserver(), n.timedInteractionObserver = new PerformanceObserver((function (t) { e.lastInputDelayEvent && (t.getEntries().forEach((function (e) { n.recordTimedInteraction(e) })), e.lastInputDelayEvent = void 0) })); try { n.timedInteractionObserver.observe({ type: "element", buffered: n.isDirectRequest }) } catch (e) { } } }, this.recordTimedInteraction = function (t) { var r = e.lastInputDelayEvent; if (r) { var i = t.element, o = t.identifier, a = t.name, s = t.renderTime, c = { element_type: "image-paint" === a ? "image" : "text", identifier_type: o, previous_target_ancestor_section_id: r.target_ancestor_section_id, start_time: r.start_time, target_ancestor_section_id: n.findAncestorSectionId(i), total_time: Math.round(s - r.start_time) }; n.unthrottleableMetrics.timedInteractions.push(c) } }, this.cleanupTimedInteractionObserver = function () { if (n.timedInteractionObserver) { "function" == typeof n.timedInteractionObserver.takeRecords && n.timedInteractionObserver.takeRecords(); var e = n.unthrottleableMetrics.timedInteractions; n.unthrottleableMetrics.timedInteractions = e.slice(0, 20), n.timedInteractionObserver.disconnect() } }, this.listenForLongInputDelays = function () { if (n.supportsPerformanceObserverWithType("event")) { n.inputDelayObserver = new PerformanceObserver((function (t) { var r; t.getEntries().forEach((function (e) { n.recordLongInputDelay(e), d.has(e.name) && (r = e) })), r && (e.lastInputDelayEvent = n.createLongInputRecord(r)) })); try { n.inputDelayObserver.observe({ type: "event", buffered: n.isDirectRequest }) } catch (e) { } } }, this.createLongInputRecord = function (e) { var t = e.duration, r = e.name, i = e.processingEnd, o = e.processingStart, a = e.startTime, s = e.target, c = o - a; return { input_delay: Math.round(c), input_duration: t, event_type: r, start_time: Math.round(a), target_ancestor_section_id: n.findAncestorSectionId(s), total_time: Math.round(i - a) } }, this.recordLongInputDelay = function (e) { var t = e.name, r = e.processingStart, i = e.startTime; if (d.has(t) && !(r - i < 100)) { var o = n.createLongInputRecord(e); n.unthrottleableMetrics.longInputDelays.push(o) } }, this.cleanupLongInputDelayObserver = function () { if (n.inputDelayObserver) { "function" == typeof n.inputDelayObserver.takeRecords && n.inputDelayObserver.takeRecords(); var e = 0, t = new Map; n.unthrottleableMetrics.longInputDelays.forEach((function (n) { var r = n.event_type, i = n.total_time; e += i; var o = t.get(r); o || (o = { event_count: 0, total_duration: 0, event_name: r }, t.set(r, o)), o.event_count += 1, o.total_duration += i })), n.unthrottleableMetrics.longInputDelayCounts = Array.from(t.values()), n.unthrottleableMetrics.numberOfLongInputDelays = n.unthrottleableMetrics.longInputDelays.length, n.unthrottleableMetrics.totalDurationOfLongInputDelays = e, n.unthrottleableMetrics.longInputDelays = n.unthrottleableMetrics.longInputDelays.sort((function (e, t) { return t.total_time - e.total_time })).slice(0, 20), n.inputDelayObserver.disconnect() } }, this.listenForLongTasks = function () { if (n.supportsPerformanceObserverWithType("longtask")) try { n.longTaskObserver = new PerformanceObserver((function (e) { var t; (t = n.throttleableMetrics.longTasks).push.apply(t, babelHelpers.toConsumableArray(e.getEntries())) })), n.longTaskObserver.observe({ type: "longtask", buffered: n.isDirectRequest }) } catch (e) { } }, this.cleanUpLongTasks = function () { if (n.longTaskObserver) { var e; if ("function" == typeof n.longTaskObserver.takeRecords) (e = n.throttleableMetrics.longTasks).push.apply(e, babelHelpers.toConsumableArray(n.longTaskObserver.takeRecords())); n.throttleableMetrics.totalBlockingTime = Object(c.e)(n.throttleableMetrics), n.throttleableMetrics.longestBlockingTime = Object(c.b)(n.throttleableMetrics), n.throttleableMetrics.longestBlockingTaskIndex = Object(c.a)(n.throttleableMetrics), n.throttleableMetrics.tbtPreHydrate = Object(c.d)(n.throttleableMetrics, n.calculateTimeToHydrate()), n.throttleableMetrics.tbtPostHydrate = Object(c.c)(n.throttleableMetrics, n.calculateTimeToHydrate()), n.throttleableMetrics.numberOfBlockingTasks = n.throttleableMetrics.longTasks.length, n.longTaskObserver.disconnect() } }, this.calculateTimeToHydrate = function () { var e = [].concat(babelHelpers.toConsumableArray(n.performance.getEntriesByName(l.c)), babelHelpers.toConsumableArray(n.performance.getEntriesByName(l.b))).filter((function (e) { return e.startTime > n.createdAt })); if (0 !== e.length) return e.reduce((function (e, t) { return e.startTime < t.startTime ? e : t }), e[0]).startTime - n.createdAt }, this.listenForCLS = function () { if (n.supportsPerformanceObserverWithType("layout-shift")) try { n.clsObserver = new PerformanceObserver(n.clsObserverCallback), n.unthrottleableMetrics.cumulativeLayoutShift = 0, n.clsObserver.observe({ type: "layout-shift", buffered: n.isDirectRequest }) } catch (e) { } }, this.clsObserverCallback = function (e) { e.getEntries().forEach((function (e) { e.hadRecentInput || (n.unthrottleableMetrics.cumulativeLayoutShift = n.unthrottleableMetrics.cumulativeLayoutShift || 0, n.unthrottleableMetrics.cumulativeLayoutShift += e.value, n.showLogs && n.consoleLogMetrics()) })) }, this.cleanUpClsObserver = function () { n.clsObserver && ("function" == typeof n.clsObserver.takeRecords && n.clsObserver.takeRecords(), n.clsObserver.disconnect()) }, this.listenForResources = function () { if (n.supportsPerformanceObserverWithType("resource")) try { n.resourcesObserver = new PerformanceObserver((function (e) { var t; (t = n.unthrottleableMetrics.resources).push.apply(t, babelHelpers.toConsumableArray(e.getEntries())) })), n.resourcesObserver.observe({ type: "resource", buffered: n.isDirectRequest }) } catch (e) { } }, this.cleanUpResources = function () { if (n.resourcesObserver) { var e; if ("function" == typeof n.resourcesObserver.takeRecords) (e = n.unthrottleableMetrics.resources).push.apply(e, babelHelpers.toConsumableArray(n.resourcesObserver.takeRecords())); n.unthrottleableMetrics.assets = Object(u.a)({ resources: n.unthrottleableMetrics.resources }), n.resourcesObserver.disconnect() } }, this.listenForLCP = function () { if (!n.isClientSideRequest && n.supportsPerformanceObserverWithType("largest-contentful-paint")) try { n.lcpObserver = new PerformanceObserver((function (e) { e.getEntries().forEach(n.updateLCP) })), n.lcpObserver.observe({ type: "largest-contentful-paint", buffered: !0 }) } catch (e) { } }, this.updateLCP = function (e) { n.throttleableMetrics.lcp = e.startTime }, this.cleanUpLcpObserver = function () { n.lcpObserver && ("function" == typeof n.lcpObserver.takeRecords && n.lcpObserver.takeRecords().forEach(n.updateLCP), n.lcpObserver.disconnect()) }, this.supportsPerformanceObserverWithType = function (e) { return "undefined" != typeof PerformanceObserver && (!!PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes(e)) }, this.findAncestorSectionId = function (e) { for (var t = null, n = e; null === t && n;)t = n.getAttribute("data-section-id") || n.getAttribute("data-testid"), n = n.parentElement; return t || void 0 }, this.hasNecessaryPolyfills = function () { return !!window.perfMetrics }, this.consoleLogMetrics = function () { var e = n.throttleableMetrics, t = e.ttfcp, r = e.ttfmp, i = e.fid, o = n.unthrottleableMetrics.cumulativeLayoutShift; console.log("Page Performance Score metrics (air.bb/web-pps)\n\nPathname = %c".concat(window.location.pathname, "%c\n  Time To First Contentful Paint      = ").concat(n.prettyMetric(t), "\n  Time To First Meaningful Paint      = ").concat(n.prettyMetric(r), "\n  First Input Delay                   = ").concat(n.prettyMetric(i), "\n  Cumulative Layout Shift             = ").concat(n.prettyMetric(o, !0), "\n  Long Input Delays                   = ").concat(n.prettyMetric(n.unthrottleableMetrics.numberOfLongInputDelays), "\n  Total Long Input Delay Duration     = ").concat(n.prettyMetric(n.unthrottleableMetrics.totalDurationOfLongInputDelays), "\n  Total Blocking Time                 = (see air.bb/web-pps-tbt)"), "font-weight: bold;", "") }, this.prettyMetric = function (e, t) { return (t ? "number" == typeof e ? "".concat(e.toFixed(2)) : "n/a" : e ? "".concat(Math.round(e).toLocaleString(), " ms") : "...").padStart(9, " ") }, this.isDirectRequest = f, this.isClientSideRequest = !f, f ? this.createdAt = 0 : (this.performance.mark("CSR_PAGE_START"), this.createdAt = p || this.performance.now()), Object(a.a)(this.isClientSideRequest).then((function (e) { n.pageRequestMethod = e })), this.gatherUnthrottleableMetrics(), 2 !== this.initialVisibilityState && this.hasNecessaryPolyfills() && this.gatherThrottleableMetrics() } } }]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/cf68-1d5cdcc4.js.map