(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"id":"rootPlayer","hash": "bf7b2cd4b3b9dc848e7364aef83cacb3178daa81b2c5fb301cf0e23964a56ada", "definitions": [{"id":"MainViewer","subtitlesBackgroundOpacity":0.2,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipPaddingRight":6,"subtitlesBackgroundColor":"#000000","subtitlesTop":0,"toolTipBorderColor":"#767676","playbackBarBottom":5,"toolTipFontSize":"1.11vmin","toolTipPaddingBottom":4,"progressBackgroundColorRatios":[0],"playbackBarBorderSize":0,"subtitlesTextShadowOpacity":1,"progressHeight":2,"data":{"name":"Main Viewer"},"progressBorderSize":0,"class":"ViewerArea","vrPointerColor":"#FFFFFF","progressBarBorderRadius":2,"progressRight":"33%","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColorDirection":"horizontal","progressBarBorderSize":0,"progressOpacity":0.7,"playbackBarHeadWidth":6,"firstTransitionDuration":0,"subtitlesGap":0,"subtitlesTextShadowVerticalLength":1,"subtitlesTextShadowColor":"#000000","toolTipShadowColor":"#333138","playbackBarHeight":10,"playbackBarBackgroundColorDirection":"vertical","subtitlesBottom":50,"playbackBarProgressBorderSize":0,"toolTipTextShadowColor":"#000000","height":"100%","playbackBarBackgroundOpacity":1,"progressBarBorderColor":"#000000","width":"100%","playbackBarRight":0,"subtitlesFontColor":"#FFFFFF","subtitlesFontFamily":"Arial","playbackBarProgressBorderRadius":0,"progressBorderRadius":2,"progressBarBackgroundColorRatios":[0],"minHeight":50,"toolTipPaddingLeft":6,"playbackBarProgressBackgroundColor":["#3399FF"],"progressLeft":"33%","toolTipFontColor":"#606060","minWidth":100,"surfaceReticleColor":"#FFFFFF","surfaceReticleSelectionColor":"#FFFFFF","subtitlesFontSize":"3vmin","playbackBarHeadShadowOpacity":0.7,"progressBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionColor":"#FF6600","toolTipPaddingTop":4,"playbackBarHeadShadowBlurRadius":3,"playbackBarProgressBackgroundColorRatios":[0],"progressBarBackgroundColor":["#3399FF"],"playbackBarLeft":0,"playbackBarHeadHeight":15,"playbackBarBorderRadius":0,"vrPointerSelectionTime":2000,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadBorderSize":0,"playbackBarProgressBorderColor":"#000000","toolTipFontFamily":"Arial","propagateClick":false,"progressBackgroundColor":["#000000"],"progressBottom":10,"playbackBarHeadShadow":true},{"id":"map_3B25562D_2A90_7C5C_41B8_589E8A58F02F","label":trans('map_3B25562D_2A90_7C5C_41B8_589E8A58F02F.label'),"fieldOfViewOverlayInsideColor":"#99D6FF","width":1768,"scaleMode":"fit_inside","fieldOfViewOverlayRadiusScale":0.15,"data":{"label":"mb(1)"},"minimumZoomFactor":0.5,"image":{"levels":["this.imlevel_3C7DF89E_2AB0_7265_41AF_5891AB03BF56","this.imlevel_3C7DA89F_2AB0_7263_418A_DC95ED6F515A","this.imlevel_3C7DB8A0_2AB0_725D_41C3_A8B83936A167","this.imlevel_3C7D88A1_2AB0_725F_417D_D8C8B7147457"],"class":"ImageResource"},"overlays":["this.overlay_3B4727C5_2A9F_DBC4_41C0_2FD86A008ECC","this.overlay_38100E8C_2A90_4C0D_41B2_24D57E6920F9","this.overlay_3B7DB115_2A97_B5E8_41B1_E7C8F2C822FA"],"height":2768,"thumbnailUrl":"media/map_3B25562D_2A90_7C5C_41B8_589E8A58F02F_t.png","maximumZoomFactor":1.2,"fieldOfViewOverlayOutsideColor":"#000000","initialZoomFactor":1,"fieldOfViewOverlayInsideOpacity":0.4,"class":"Map"},{"enterPointingToHorizon":true,"id":"panorama_264C6E76_2A90_4D3B_41C2_D8D57B63798A_camera","initialSequence":"this.sequence_2138BF01_2A90_CCD4_41B6_9CAE455B1942","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"class":"PanoramaCamera"},{"id":"MapViewerMapPlayer","movementMode":"constrained","class":"MapPlayer","viewerArea":"this.MapViewer"},{"id":"panorama_210125D3_2A90_DF7B_41B0_EB700F8F5C63","hfov":360,"label":trans('panorama_210125D3_2A90_DF7B_41B0_EB700F8F5C63.label'),"frames":[{"thumbnailUrl":"media/panorama_210125D3_2A90_DF7B_41B0_EB700F8F5C63_t.jpg","cube":{"levels":[{"height":2048,"colCount":12,"url":"media/panorama_210125D3_2A90_DF7B_41B0_EB700F8F5C63_0/{face}/0/{row}_{column}.jpg","rowCount":2,"width":12288,"class":"TiledImageResourceLevel","tags":"ondemand"}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"hfovMin":"150%","mapLocations":[{"x":484.26,"y":1763.29,"angle":-145.09,"map":"this.map_3B25562D_2A90_7C5C_41B8_589E8A58F02F","class":"PanoramaMapLocation"}],"data":{"label":"360_3_0617_TR"},"vfov":180,"thumbnailUrl":"media/panorama_210125D3_2A90_DF7B_41B0_EB700F8F5C63_t.jpg","hfovMax":130,"class":"Panorama"},{"id":"panorama_21029CF9_2A90_CD36_418A_D9B0B4B1A4C5","hfov":360,"label":trans('panorama_21029CF9_2A90_CD36_418A_D9B0B4B1A4C5.label'),"frames":[{"thumbnailUrl":"media/panorama_21029CF9_2A90_CD36_418A_D9B0B4B1A4C5_t.jpg","cube":{"levels":[{"height":2048,"colCount":12,"url":"media/panorama_21029CF9_2A90_CD36_418A_D9B0B4B1A4C5_0/{face}/0/{row}_{column}.jpg","rowCount":2,"width":12288,"class":"TiledImageResourceLevel","tags":"ondemand"}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"hfovMin":"150%","mapLocations":[{"x":1362.73,"y":406.91,"angle":213.16,"map":"this.map_3B25562D_2A90_7C5C_41B8_589E8A58F02F","class":"PanoramaMapLocation"}],"data":{"label":"360_2_0617_TR(1)"},"vfov":180,"thumbnailUrl":"media/panorama_21029CF9_2A90_CD36_418A_D9B0B4B1A4C5_t.jpg","hfovMax":130,"class":"Panorama"},{"id":"playList_3F7E7DC0_2AB0_4DDC_41C3_7407107EFB08","items":[{"media":"this.map_3B25562D_2A90_7C5C_41B8_589E8A58F02F","player":"this.MapViewerMapPlayer","class":"MapPlayListItem","begin":"this.MapViewerMapPlayer.set('movementMode', 'constrained')"}],"class":"PlayList"},{"id":"MapViewer","subtitlesBackgroundOpacity":0.2,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"right":"2.25%","toolTipPaddingRight":6,"subtitlesBackgroundColor":"#000000","toolTipBorderColor":"#767676","playbackBarBottom":5,"toolTipFontSize":"1.11vmin","toolTipPaddingBottom":4,"progressBackgroundColorRatios":[0],"playbackBarBorderSize":0,"subtitlesTextShadowOpacity":1,"progressHeight":2,"subtitlesTop":0,"progressBorderSize":0,"vrPointerColor":"#FFFFFF","progressBarBorderRadius":2,"progressRight":"33%","class":"ViewerArea","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColorDirection":"horizontal","progressBarBorderSize":0,"progressOpacity":0.7,"playbackBarHeadWidth":6,"firstTransitionDuration":0,"subtitlesGap":0,"subtitlesTextShadowVerticalLength":1,"subtitlesTextShadowColor":"#000000","toolTipShadowColor":"#333138","playbackBarHeight":10,"playbackBarBackgroundColorDirection":"vertical","maxHeight":2768,"playbackBarProgressBorderSize":0,"toolTipTextShadowColor":"#000000","maxWidth":1768,"height":"30%","subtitlesBottom":10,"playbackBarBackgroundOpacity":1,"progressBarBorderColor":"#000000","playbackBarRight":0,"subtitlesFontColor":"#FFFFFF","data":{"name":"Floorplan Viewer"},"subtitlesFontFamily":"Arial","playbackBarProgressBorderRadius":0,"progressBorderRadius":2,"progressBarBackgroundColorRatios":[0],"minHeight":1,"toolTipPaddingLeft":6,"playbackBarProgressBackgroundColor":["#3399FF"],"progressLeft":"33%","width":"15%","toolTipFontColor":"#606060","minWidth":1,"surfaceReticleColor":"#FFFFFF","surfaceReticleSelectionColor":"#FFFFFF","subtitlesFontSize":"3vmin","playbackBarHeadShadowOpacity":0.7,"progressBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionColor":"#FF6600","top":"0.78%","toolTipPaddingTop":4,"playbackBarHeadShadowBlurRadius":3,"playbackBarProgressBackgroundColorRatios":[0],"progressBarBackgroundColor":["#3399FF"],"playbackBarLeft":0,"playbackBarHeadHeight":15,"playbackBarBorderRadius":0,"vrPointerSelectionTime":2000,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadBorderSize":0,"playbackBarProgressBorderColor":"#000000","toolTipFontFamily":"Arial","propagateClick":false,"progressBackgroundColor":["#000000"],"progressBottom":10,"playbackBarHeadShadow":true},{"id":"mainPlayList","items":["this.PanoramaPlayListItem_3F7EADFE_2AB0_4DA5_41B1_5F60EB875900","this.PanoramaPlayListItem_3F7D2DFF_2AB0_4DA4_41B7_3A0900422283","this.PanoramaPlayListItem_3F7DFE01_2AB0_4E5C_419A_6A6C57174B4B"],"class":"PlayList"},{"enterPointingToHorizon":true,"id":"panorama_210125D3_2A90_DF7B_41B0_EB700F8F5C63_camera","initialSequence":"this.sequence_213D5F05_2A90_CCDC_41B6_D8C1383C794B","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"class":"PanoramaCamera"},{"id":"MainViewerPanoramaPlayer","arrowKeysAction":"translate","viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"aaEnabled":true,"touchControlMode":"drag_rotation","class":"PanoramaPlayer"},{"enterPointingToHorizon":true,"id":"panorama_21029CF9_2A90_CD36_418A_D9B0B4B1A4C5_camera","initialSequence":"this.sequence_213D0F04_2A90_CCDC_41B9_52ECA90CFA10","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"class":"PanoramaCamera"},{"id":"panorama_264C6E76_2A90_4D3B_41C2_D8D57B63798A","hfov":360,"label":trans('panorama_264C6E76_2A90_4D3B_41C2_D8D57B63798A.label'),"frames":[{"thumbnailUrl":"media/panorama_264C6E76_2A90_4D3B_41C2_D8D57B63798A_t.jpg","cube":{"levels":[{"height":2048,"colCount":12,"url":"media/panorama_264C6E76_2A90_4D3B_41C2_D8D57B63798A_0/{face}/0/{row}_{column}.jpg","rowCount":2,"width":12288,"class":"TiledImageResourceLevel","tags":"ondemand"}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"hfovMin":"150%","mapLocations":[{"x":774.32,"y":691.45,"angle":-135.37,"map":"this.map_3B25562D_2A90_7C5C_41B8_589E8A58F02F","class":"PanoramaMapLocation"}],"data":{"label":"360_1_0617_TR(1)"},"vfov":180,"thumbnailUrl":"media/panorama_264C6E76_2A90_4D3B_41C2_D8D57B63798A_t.jpg","hfovMax":130,"class":"Panorama"},{"id":"imlevel_3C7DF89E_2AB0_7265_41AF_5891AB03BF56","height":4096,"url":trans('imlevel_3C7DF89E_2AB0_7265_41AF_5891AB03BF56.url'),"width":2616,"class":"ImageResourceLevel"},{"id":"imlevel_3C7DA89F_2AB0_7263_418A_DC95ED6F515A","height":2048,"url":trans('imlevel_3C7DA89F_2AB0_7263_418A_DC95ED6F515A.url'),"width":1308,"class":"ImageResourceLevel"},{"id":"imlevel_3C7DB8A0_2AB0_725D_41C3_A8B83936A167","height":1024,"url":trans('imlevel_3C7DB8A0_2AB0_725D_41C3_A8B83936A167.url'),"width":654,"class":"ImageResourceLevel"},{"id":"imlevel_3C7D88A1_2AB0_725F_417D_D8C8B7147457","height":512,"url":trans('imlevel_3C7D88A1_2AB0_725F_417D_D8C8B7147457.url'),"width":327,"class":"ImageResourceLevel"},{"id":"overlay_3B4727C5_2A9F_DBC4_41C0_2FD86A008ECC","image":{"x":774.32,"y":691.45,"offsetX":75,"width":150,"scaleMode":"fit_inside","class":"HotspotMapOverlayImage","height":150,"data":{"label":"Image"},"image":"this.res_38312A00_2AAF_D791_41B4_92DC4C7FBF60","offsetY":75},"useHandCursor":true,"areas":["this.HotspotMapOverlayArea_3A41486B_2A9F_D4CC_41BC_D056767943F5"],"data":{"label":"Image"},"class":"AreaHotspotMapOverlay"},{"id":"overlay_38100E8C_2A90_4C0D_41B2_24D57E6920F9","image":{"x":1362.73,"y":406.91,"offsetX":75,"width":150,"scaleMode":"fit_inside","class":"HotspotMapOverlayImage","height":150,"data":{"label":"Image"},"image":"this.res_38312A00_2AAF_D791_41B4_92DC4C7FBF60","offsetY":75},"useHandCursor":true,"areas":["this.HotspotMapOverlayArea_3810BE8F_2A90_4C0B_41BC_3AB320836D0F"],"data":{"label":"Image"},"class":"AreaHotspotMapOverlay"},{"id":"overlay_3B7DB115_2A97_B5E8_41B1_E7C8F2C822FA","image":{"x":484.26,"y":1763.29,"offsetX":75,"width":150,"scaleMode":"fit_inside","class":"HotspotMapOverlayImage","height":150,"data":{"label":"Image"},"image":"this.res_38312A00_2AAF_D791_41B4_92DC4C7FBF60","offsetY":75},"useHandCursor":true,"areas":["this.HotspotMapOverlayArea_3B7DE116_2A97_B5E8_41A7_A8F90CF3931C"],"data":{"label":"Image"},"class":"AreaHotspotMapOverlay"},{"id":"sequence_2138BF01_2A90_CCD4_41B6_9CAE455B1942","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence"},{"id":"PanoramaPlayListItem_3F7EADFE_2AB0_4DA5_41B1_5F60EB875900","player":"this.MainViewerPanoramaPlayer","begin":"this.setMapLocation(this.PanoramaPlayListItem_3F7EADFE_2AB0_4DA5_41B1_5F60EB875900, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)","camera":"this.panorama_264C6E76_2A90_4D3B_41C2_D8D57B63798A_camera","media":"this.panorama_264C6E76_2A90_4D3B_41C2_D8D57B63798A","class":"PanoramaPlayListItem"},{"id":"PanoramaPlayListItem_3F7D2DFF_2AB0_4DA4_41B7_3A0900422283","player":"this.MainViewerPanoramaPlayer","begin":"this.setMapLocation(this.PanoramaPlayListItem_3F7D2DFF_2AB0_4DA4_41B7_3A0900422283, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)","camera":"this.panorama_21029CF9_2A90_CD36_418A_D9B0B4B1A4C5_camera","media":"this.panorama_21029CF9_2A90_CD36_418A_D9B0B4B1A4C5","class":"PanoramaPlayListItem"},{"id":"PanoramaPlayListItem_3F7DFE01_2AB0_4E5C_419A_6A6C57174B4B","player":"this.MainViewerPanoramaPlayer","begin":"this.setMapLocation(this.PanoramaPlayListItem_3F7DFE01_2AB0_4E5C_419A_6A6C57174B4B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 0)","end":"this.trigger('tourEnded')","camera":"this.panorama_210125D3_2A90_DF7B_41B0_EB700F8F5C63_camera","media":"this.panorama_210125D3_2A90_DF7B_41B0_EB700F8F5C63","class":"PanoramaPlayListItem"},{"id":"sequence_213D5F05_2A90_CCDC_41B6_D8C1383C794B","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence"},{"id":"sequence_213D0F04_2A90_CCDC_41B9_52ECA90CFA10","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence"},{"id":"res_38312A00_2AAF_D791_41B4_92DC4C7FBF60","levels":[{"height":81,"url":"media/res_38312A00_2AAF_D791_41B4_92DC4C7FBF60_0.png","width":82,"class":"ImageResourceLevel"}],"class":"ImageResource"},{"id":"HotspotMapOverlayArea_3A41486B_2A9F_D4CC_41BC_D056767943F5","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_3F7EADFE_2AB0_4DA5_41B1_5F60EB875900, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)","class":"HotspotMapOverlayArea"},{"id":"HotspotMapOverlayArea_3810BE8F_2A90_4C0B_41BC_3AB320836D0F","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_3F7D2DFF_2AB0_4DA4_41B7_3A0900422283, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)","class":"HotspotMapOverlayArea"},{"id":"HotspotMapOverlayArea_3B7DE116_2A97_B5E8_41A7_A8F90CF3931C","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_3F7DFE01_2AB0_4E5C_419A_6A6C57174B4B, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 2)","class":"HotspotMapOverlayArea"}],"backgroundColor":["#FFFFFF"],"data":{"history":{},"textToSpeechConfig":{"rate":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"speechOnTooltip":false,"volume":1,"speechOnInfoWindow":false,"pitch":1},"defaultLocale":"en","locales":{"en":"locale/en.txt"},"name":"Player812"},"children":["this.MainViewer","this.MapViewer"],"scripts":{"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"cloneBindings":TDV.Tour.Script.cloneBindings,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"isPanorama":TDV.Tour.Script.isPanorama,"historyGoForward":TDV.Tour.Script.historyGoForward,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"historyGoBack":TDV.Tour.Script.historyGoBack,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"startMeasurement":TDV.Tour.Script.startMeasurement,"getMainViewer":TDV.Tour.Script.getMainViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"executeJS":TDV.Tour.Script.executeJS,"showWindow":TDV.Tour.Script.showWindow,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizShowScore":TDV.Tour.Script.quizShowScore,"getMediaByName":TDV.Tour.Script.getMediaByName,"getKey":TDV.Tour.Script.getKey,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"init":TDV.Tour.Script.init,"translate":TDV.Tour.Script.translate,"createTween":TDV.Tour.Script.createTween,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"quizStart":TDV.Tour.Script.quizStart,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"mixObject":TDV.Tour.Script.mixObject,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setLocale":TDV.Tour.Script.setLocale,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizFinish":TDV.Tour.Script.quizFinish,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"initQuiz":TDV.Tour.Script.initQuiz,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getComponentByName":TDV.Tour.Script.getComponentByName,"clone":TDV.Tour.Script.clone,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"downloadFile":TDV.Tour.Script.downloadFile,"existsKey":TDV.Tour.Script.existsKey,"getOverlays":TDV.Tour.Script.getOverlays,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"textToSpeech":TDV.Tour.Script.textToSpeech,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"playAudioList":TDV.Tour.Script.playAudioList,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"showPopupImage":TDV.Tour.Script.showPopupImage,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setValue":TDV.Tour.Script.setValue,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"openLink":TDV.Tour.Script.openLink,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"unregisterKey":TDV.Tour.Script.unregisterKey,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"registerKey":TDV.Tour.Script.registerKey,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"shareSocial":TDV.Tour.Script.shareSocial,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"resumePlayers":TDV.Tour.Script.resumePlayers,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPixels":TDV.Tour.Script.getPixels},"scrollBarColor":"#000000","class":"Player","width":"100%","scrollBarMargin":2,"backgroundColorRatios":[0],"height":"100%","defaultMenu":["fullscreen","mute","rotation"],"gap":10,"propagateClick":false,"watermark":false,"layout":"absolute","start":"this.init(); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.playList_3F7E7DC0_2AB0_4DDC_41C3_7407107EFB08.set('selectedIndex', 0)","minHeight":0,"minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.2.10.js.map
})();
//Generated with v2023.2.10, Tue Jun 18 2024