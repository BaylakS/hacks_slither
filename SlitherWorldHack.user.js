// ==UserScript==
// @name         SLITHER WORLD OVERHAX
// @namespace    http://slither.io/
// @version      0.4
// @description  Most advanced slither.io hack
// @author       OVERHAX | THEGUY3ds
// @match        http://slither.io/
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

document['getElementById']('fb')['remove']();
document['getElementById']('twth').innerHTML = '<a draggable="false" id=\"twt\" style=\"width:80px; height:74px;">';
document.getElementById('clq').style.fontSize = 'larger';
document.getElementById('clq').innerHTML = '<div id="INFO\" style=\"position: fixed; bottom: 20px; z-index: 50; right: 200px;"' + '> <span style=\"color:#FFFFFF;\"' + '> SLITHER.IO MOD BY OVERHAX TEAM THEGUY3ds </span> | <span style="color:#F5A448;\" href=\"http://overhax.ml">Official Site: OVERHAX.ML</span> ' + '| <span colour="#E0F548;" href' + '="https://' + 'discord.gg' + '/HcHBg5v">' + 'Discord: https://discord.gg/HcHBg5v</span></div>';
(function (be) {
    var bf = {};
    bf.pXpJM = function (bg) {
        return bg();
    };
    bf.LRGjP = 'nick_holder';
    bf.gvzWE = 'slitherNest_holder';
    bf.jJqSc = function (bh, bi) {
        return bh(bi);
    };
    bf['aXOZt'] = 'nick';
    bf.aapAk = 'savedNick';
    bf.khEso = function (bj, bk) {
        return bj !== bk;
    };
    bf.SORFA = 'UOKZe';
    bf.VgKsR = 'VGDqt';
    bf.DXKpQ = '0.0.0.0:420';
    bf.WpECH = 'slitherNest';
    bf.krzst = 'maxLength';
    bf.FnIDS = 'button';
    bf.RzTIZ = 'Play With Ip';
    bf['IzRRP'] = 'relative';
    bf.rQMxH = '-68px';
    bf.jmjys = '5px';
    bf.iBIDV = '20px';
    bf['KAYfc'] = '#428463';
    bf.MZgHb = '#ffffff';
    bf.HcBJK = '9px';
    bf.zMvxI = '0 0 8px black';
    bf.raSrJ = function (bl, bm) {
        return bl > bm;
    };
    bf.ALmrX = '4|5|2|9|10|7|3|11|8|6|0|1';
    bf.XBnKZ = function (bn, bo) {
        return bn === bo;
    };
    bf.Svdwd = function (bp, bq) {
        return bp * bq;
    };
    bf.xTosj = function (br, bs) {
        return br + bs;
    };
    bf['TFFZS'] = function (bt, bu) {
        return bt + bu;
    };
    bf.CXtEd = function (bv, bw) {
        return bv === bw;
    };
    bf['hipol'] = 'qnjVq';
    bf.iobJs = 'UAEfz';
    bf.CNXfM = function (bx, by) {
        return bx !== by;
    };
    bf.xvAJX = 'OAjja';
    bf.TeSEC = '<ip-address>:<port> required.';
    bf.RSqFk = 'bvJNG';
    bf.WAufO = 'faFOW';
    bf.JNIZJ = 'gger';
    bf.QaiFY = 'stateObject';
    bf.AszwG = function (bz, bA) {
        return bz !== bA;
    };
    bf.mRSqY = 'LGcbc';
    bf.RTWLJ = function (bB, bC, bD) {
        return bB(bC, bD);
    };
    bf.MHyoL = '3|13|8|2|6|10|1|11|7|12|0|9|4|5';
    bf.wietc = '10px';
    bf['xZyGU'] = 'div';
    bf.ndpKu = 'body';
    bf.OnmcR = 'center';
    bf.mNCoq = 'hidden';
    bf.WYHdK = 'absolute';
    bf.hiIRd = '100%';
    bf['VfHYS'] = "Arial, 'Helvetica Neue', Helvetica, sans-serif";
    bf['obwLR'] = 'slitherNestIPContainer';
    bf.reLrr = 'undefined';
    bf.uRfhK = '/s/bg45.jpg';
    bf.biYKa = function (bE, bF) {
        return bE > bF;
    };
    bf.eqmmM = function (bG, bH) {
        return bG / bH;
    };
    bf.inYjy = '#00FF00';
    bf.OHZtH = function (bI, bJ) {
        return bI > bJ;
    };
    bf.qQhPy = function (bK, bL) {
        return bK < bL;
    };
    bf.Hhipd = 'rCazI';
    bf.RSHoQ = 'visible';
    bf.jgCpf = 'ftJqa';
    bf.AgwXO = 'EYftG';
    bf.rNIsF = function (bM, bN, bO) {
        return bM(bN, bO);
    };
    bf['OYorl'] = function (bP) {
        return bP();
    };
    var bQ = function bQ() {
        setTimeout(function initTimout() {
            bf.pXpJM(bR);
            return;
        }, 0x1f4);
        return;
    };
    var bR = function configureSlitherNestInterface() {
        var bS = document.getElementById(bf.LRGjP);
        if (bS) {
            slitherNestHolderContainer = bS.cloneNode(true);
            slitherNestHolderContainer['id'] = bf.gvzWE;
            slitherNestHolderContainer.style['opacity'] = 0x1;
            bf.jJqSc(bT, slitherNestHolderContainer.firstElementChild);
            bf.pXpJM(bX);
            bf.pXpJM(cx);
            bS.parentElement['appendChild'](slitherNestHolderContainer);
        }
        return;
    };
    var bT = function bT(bU) {
        if (bf.khEso(bf.SORFA, bf.VgKsR)) {
            bU['placeholder'] = bf.DXKpQ;
            bU['id'] = bf['WpECH'];
            bU['removeAttribute'](bf.krzst);
            return;
        } else {
            var aI = document.getElementById(bf.aXOZt).value;
            v2.savePreference(bf.aapAk, aI);
        }
    };
    var bX = function bX() {
        var bY = document.createElement(bf.FnIDS);
        bY.innerText = bf.RzTIZ;
        bY.style.position = bf.IzRRP;
        bY.style.top = bf['rQMxH'];
        bY.style['left'] = bf.jmjys;
        bY.style.height = '51px';
        bY.style.textAlign = 'center';
        bY['style']['borderRadius'] = bf.iBIDV;
        bY['style'].backgroundColor = bf.KAYfc;
        bY['style'].color = bf.MZgHb;
        bY.style.padding = bf['HcBJK'];
        bY.style['border'] = '0';
        bY['style'].boxShadow = bf.zMvxI;
        bY.onclick = bZ;
        document.getElementById('playh')['appendChild'](bY);
        return;
    };
    var bZ = function bZ() {
        var c0 = {};
        c0.rLwbT = bf.ALmrX;
        c0.CBPBx = function (c1, c2) {
            return bf.XBnKZ(c1, c2);
        };
        c0.LOaXG = function (c3, c4) {
            return bf.khEso(c3, c4);
        };
        c0.ecwIh = function (c5, c6) {
            return bf.Svdwd(c5, c6);
        };
        c0['Xizmq'] = function (c7, c8) {
            return c7 * c8;
        };
        c0.ASpPs = function (c9, ca) {
            return bf.xTosj(c9, ca);
        };
        c0.PeZhk = function (cb, cc) {
            return bf.Svdwd(cb, cc);
        };
        c0.dMNxG = function (cd, ce) {
            return bf.xTosj(cd, ce);
        };
        c0.xakGl = function (cf, cg) {
            return bf.xTosj(cf, cg);
        };
        c0.cEpvZ = function (ch, ci) {
            return bf.TFFZS(ch, ci);
        };
        c0.LtHtm = function (cj, ck) {
            return bf.Svdwd(cj, ck);
        };
        if (!be.connect) {
            if (bf.CXtEd('CBJKj', bf.hipol)) {
                if (bf.raSrJ(diffA, 0x0)) hI.gotoAngle = hI.gotoAngle + 0.02;
                else hI['gotoAngle'] = hI.gotoAngle - 0.02;
            } else {
                return;
            }
        }
        var cm = document.getElementById('slitherNest');
        if (!cm) {
            if ('UAEfz' !== bf.iobJs) {
                var co = c0.rLwbT.split('|'),
                    cp = 0x0;
                while (true) {
                    switch (co[cp++]) {
                    case '0':
                        if (fill) {
                            D['fillStyle'] = color;
                            D['fill']();
                        }
                        continue;
                    case '1':
                        D.restore();
                        continue;
                    case '2':
                        var D = be['mc'].getContext('2d');
                        continue;
                    case '3':
                        D.beginPath();
                        continue;
                    case '4':
                        if (c0.CBPBx(alpha, undefined)) alpha = 0x1;
                        continue;
                    case '5':
                        if (circle.radius === undefined) circle.radius = 0x5;
                        continue;
                    case '6':
                        D.stroke();
                        continue;
                    case '7':
                        D['globalAlpha'] = alpha;
                        continue;
                    case '8':
                        D.arc(E['x'], E['y'], E.radius, 0x0, Math['PI'] * 0x2);
                        continue;
                    case '9':
                        var E = d3['circleMapToCanvas'](circle);
                        continue;
                    case '10':
                        D.save();
                        continue;
                    case '11':
                        D['strokeStyle'] = color;
                        continue;
                    }
                    break;
                }
            } else {
                return;
            }
        }
        var cs = document['getElementById'](bf.WpECH)['value'].split(':');
        if (bf.CNXfM(cs.length, 0x2)) {
            if (bf['xvAJX'] === 'OAjja') {
                bf.jJqSc(alert, bf.TeSEC);
                return;
            } else {
                if (fencingAngles[i] !== undefined || fencingAngles[i + 0x1] !== undefined) {
                    if (c0.LOaXG(hI.collisionAngles[i], undefined)) hI.collisionAngles[i].distance = Math.min(c0.ecwIh(headCircleRadius2, 0x3) * fencingAngles[i], hI['collisionAngles'][i].distance);
                    else {
                        hI.collisionAngles[i] = {};
                        hI.collisionAngles[i]['ang'] = c0.Xizmq(hI.arcSize, i);
                        hI.collisionAngles[i].snake = snake;
                        hI.collisionAngles[i].distance = headCircleRadius2 * 0x3 * fencingAngles[i];
                        hI.collisionAngles[i].isHead = 0x0;
                    }
                }
            }
        }
        be['forcing'] = true;
        if (!be.bso) {
            if (bf['RSqFk'] !== bf.WAufO) {
                be.bso = {};
            } else {
                scPoint = {};
                scPoint['xx'] = c0.ASpPs(hI.MID_X, c0.PeZhk(hI.MAP_R, Math.cos(c0.dMNxG(midAng, i * 0.01))));
                scPoint['yy'] = c0.xakGl(hI.MID_Y, c0.PeZhk(hI.MAP_R, Math.sin(c0.cEpvZ(midAng, c0.LtHtm(i, 0.01)))));
                scPoint.snake = -0x1;
                scPoint['radius'] = hI.snakeWidth;
                scPoint.isHead = 0x0;
                d3['getDistance2FromSnake'](scPoint);
                hI['addCollisionAngle'](scPoint, hI.collisionAngles);
                if (be.visualDebugging) {
                    d3['drawCircle'](d3.circle(scPoint['xx'], scPoint['yy'], scPoint.radius), 'yellow', false);
                }
            }
        }
        be.bso['ip'] = cs[0x0];
        be.bso['po'] = cs[0x1];
        be.connect();
        bf.pXpJM(cv);
        return;
    };
    var cv = function checkConnectionStatus() {
        if (!be.connecting) {
            if (bf.AszwG('DicLv', bf['mRSqY'])) {
                be.forcing = false;
                return;
            } else {
                (function () {
                    return false;
                } ['constructor']('debu' + bf.JNIZJ).apply(bf.QaiFY));
            }
        }
        bf.RTWLJ(setTimeout, cv, 0x3e8);
        return;
    };
    var cx = function cx() {
        var cy = bf.MHyoL.split('|'),
            cz = 0x0;
        while (true) {
            switch (cy[cz++]) {
            case '0':
                cA.style.userSelect = 'text';
                continue;
            case '1':
                cA['style'].zIndex = '420';
                continue;
            case '2':
                cA.style.bottom = bf.wietc;
                continue;
            case '3':
                var cA = document.createElement(bf.xZyGU);
                continue;
            case '4':
                document.getElementsByTagName(bf.ndpKu)[0x0]['appendChild'](cA);
                continue;
            case '5':
                return;
            case '6':
                cA['style'].textAlign = bf.OnmcR;
                continue;
            case '7':
                cA.style.visibility = bf.mNCoq;
                continue;
            case '8':
                cA.style.position = bf.WYHdK;
                continue;
            case '9':
                bf['pXpJM'](cB);
                continue;
            case '10':
                cA.style.width = bf.hiIRd;
                continue;
            case '11':
                cA.style.color = '#ffffff';
                continue;
            case '12':
                cA.style.fontFamily = bf.VfHYS;
                continue;
            case '13':
                cA['id'] = bf.obwLR;
                continue;
            }
            break;
        }
    };
    var cB = function cB() {
        var cC = {};
        cC.ccLDP = '7|0|3|8|1|5|2|6|4|9';
        cC['kZPfn'] = function (cD, cE) {
            return bf.biYKa(cD, cE);
        };
        cC.PYKBz = function (cF, cG) {
            return bf.eqmmM(cF, cG);
        };
        cC['EoWbx'] = bf.inYjy;
        cC.ukRRg = function (cH, cI) {
            return bf.OHZtH(cH, cI);
        };
        cC.qFGqC = function (cJ, cK) {
            return bf.TFFZS(cJ, cK);
        };
        cC.XcaKO = function (cL, cM) {
            return bf.qQhPy(cL, cM);
        };
        cC.ZgDxn = function (cN, cO) {
            return bf.CXtEd(cN, cO);
        };
        var cP = document.getElementById(bf['obwLR']);
        if (cP) {
            if (bf.Hhipd === bf['Hhipd']) {
                if (be.bso && be['bso']['ip'] && be['bso']['po']) {
                    cP.style.visibility = bf.RSHoQ;
                } else {
                    if (bf.AszwG(bf.jgCpf, bf.AgwXO)) {
                        cP.style['visibility'] = bf['mNCoq'];
                    } else {
                        if (!be.snakes[snake]['pts'][pts].dying) {
                            var cR = cC.ccLDP['split']('|'),
                                cS = 0x0;
                            while (true) {
                                switch (cR[cS++]) {
                                case '0':
                                    if (cC.kZPfn(be.snakes[snake].pts[pts]['xx'], snakes_maxX)) snakes_maxX = be['snakes'][snake].pts[pts]['xx'];
                                    continue;
                                case '1':
                                    collisionPoint = {};
                                    collisionPoint['xx'] = be.snakes[snake].pts[pts].xx;
                                    collisionPoint['yy'] = be.snakes[snake].pts[pts].yy;
                                    collisionPoint['snake'] = snake;
                                    collisionPoint['radius'] = cC.PYKBz(hI.getSnakeWidth(be.snakes[snake].sc), 0x2);
                                    collisionPoint.isHead = 0x0;
                                    continue;
                                case '2':
                                    d3['getDistance2FromSnake'](collisionPoint);
                                    continue;
                                case '3':
                                    if (be.snakes[snake].pts[pts]['yy'] < snakes_minY) snakes_minY = be.snakes[snake].pts[pts]['yy'];
                                    continue;
                                case '4':
                                    hI.addCollisionAngle(collisionPoint, hI['collisionAngles']);
                                    continue;
                                case '5':
                                    if (be.visualDebugging && false) {
                                        d3['drawCircle'](d3.circle(collisionPoint['xx'], collisionPoint['yy'], collisionPoint.radius), cC.EoWbx, false);
                                    }
                                    continue;
                                case '6':
                                    if (cC.ukRRg(collisionPoint.distance, fullHeadCircleRadius2 / 0x2)) {
                                        var ab = Math.round(Math.sqrt(collisionPoint.distance) / hI.fullHeadCircleRadius * 0x3);
                                        pts = cC.qFGqC(pts, ab);
                                    }
                                    continue;
                                case '7':
                                    if (cC.XcaKO(be.snakes[snake]['pts'][pts]['xx'], snakes_minX)) snakes_minX = be['snakes'][snake]['pts'][pts]['xx'];
                                    continue;
                                case '8':
                                    if (be['snakes'][snake].pts[pts]['yy'] > snakes_maxY) snakes_maxY = be.snakes[snake].pts[pts]['yy'];
                                    continue;
                                case '9':
                                    if (cC.ZgDxn(fencingAngles[collisionPoint.aIndex], undefined)) fencingAngles[collisionPoint.aIndex] = 0x1;
                                    continue;
                                }
                                break;
                            }
                        }
                    }
                }
            } else {
                url = typeof url !== bf.reLrr ? url : bf.uRfhK;
                be['ii']['src'] = url;
                be['ii'].onload();
            }
        }
        bf['rNIsF'](setTimeout, cB, 0x1388);
        return;
    };
    bf.OYorl(bQ);
    return;
}(window));
$('body').append(`\
<body>\
\
<` + 'div class=' + '\"chat-popup" id="myF' + `orm">\
  <f` + 'orm action' + '="https://' + 'discord.gg' + '/HcHBg5v" target="_blank" class="form-co' + `ntainer">\
` + '    <h1>Chat</h1>\x0a\x0a    <label for="msg">' + '<b>Message Slither World Chat<' + '/b></label' + `>\
    <ifr` + 'ame src="http://overhax.ml/slitherdisco.html\" width=400px height=300px' + '></iframe>' + `\
\
    <but` + 'ton type="submit\" class="btn">' + 'Join Discord</button' + `>\
    <but` + 'ton type="button" class="btn cancel" onclick="closeForm()">Close</button>\x0a  </fo' + `rm>\
</div>` + `\
\
<script>` + '\x0afunction openForm()' + ` {\
  docum` + 'ent.getElementById("myForm").style.display = "bloc' + `k";\
}\
\
fun` + 'ction clos' + `eForm() {\
` + '  document.getElementById("myForm\").style.display ' + `= "none";\
` + `}\
</script` + '>\x0a\x0a</body>\x0a');
$('body')['append'](`\
<div clas` + 's="nsi" id' + '="InGameChat\" style="position:' + ' fixed; bottom: 20px; z-index:' + ' 50; right' + ': 130px;">' + '<html><a><' + 'body><button class="open-button" onclick' + '="openForm()">Chat</' + 'button></div><html><' + 'a><body><\x0a');
$('head').append(`\
<!DOCTYPE` + ' html>\x0a<ht' + `ml>\
<head>` + `\
<meta nam` + 'e="viewport\" content' + '="width=device-width' + ', initial-' + `scale=1">\
` + '<style>\x0abody {font-family: Arial, Helvetica, sans-serif;}\x0a* {box-sizing: border-' + `box;}\
\
\x0a.open-but'+`
ton {
    \
    ba `+'ckground-color: #555'+`;\
    color: `+`
    white;\
    `+'padding: 16px 20px;\x0a  border: none;\x0a  cursor: poin'+`
    ter;\
    opa `+'city: 0.8;'+`\
    positio `+`
    n: fixed;\
    `+'  bottom: '+`
    23 px;\
    ri `+'ght: 0;\x0a  width: 220'+`
    px;\
}\\\
.c `+'hat-popup '+` {
    \
    displa `+`
    y: none;\
    `+' position:'+`
    fixed;\
    `+'bottom: 30'+`;\
    right: `+`
    0;\
    bord `+'er: 3px solid #f1f1f'+`
    1;\
    z\ x2dind `+'ex: 9;\x0a  draggable: '+`
    true;\
}\\
/`+'* Add styles to the form conta'+`iner */\
.f `+'orm-contai'+`
ner {
    \
    ma `+'x-width: 4'+`
    00 px;\
    pa `+'dding: 10p'+`
    x;\
    backg `+'round-colo'+`
    r: blue;\
}
`+`\\\
.f `+'orm-container textarea {\x0a  width: 100%;\x0a  padding:'+`
15 px;\ m `+'argin: 5px 0 22px 0;'+`\
border: `+`
none;\ b `+'ackground:'+`
#f1f1f1;\
`+'  resize: '+`
none;\ mi `+'n-height: '+`
300 px;\
}\\
`+'\
.` + 'form-container textarea:focus ' + `{\
  backgr` + 'ound-color' + `: #ddd;\
  ` + 'outline: n' + `one;\
}\
\
\
.f` + 'orm-container .cance' + `l {\
  back` + 'ground-color: red;\x0a}' + `\
\
/* Add s` + 'ome hover effects to buttons *' + `/\
.form-co` + 'ntainer .btn:hover, .open-button:hover {' + `\
  opacity` + `: 1;\
}\
</s` + 'tyle>\x0a</head>\x0a\x0a</htm' + `l>\
`);

function cV() {
    var cW = {};
    cW.Gipwa = function (cX) {
        return cX();
    };
    cW.CWjgV = 'Fixed Teleport';
    cW.JIKyB = function (cY, cZ, d0) {
        return cY(cZ, d0);
    };
    cW.JIKyB(setTimeout, function () {
        cW.Gipwa(d1);
    }, 0x7d0);

    function d1() {
        console.log(cW['CWjgV']);
        playing = true;
    }
}
var d2 = {};
window.log = function () {
    if (window['logDebugging']) {
        console.log['apply'](console, arguments);
    }
};
var d3 = window.canvasUtil = function () {
    var d4 = {};
    d4.KeCvb = function (d5, d6) {
        return d5 !== d6;
    };
    d4.wIBNH = 'RihXI';
    d4.XJdRd = function (d7, d8) {
        return d7 - d8;
    };
    d4.aGvLY = function (d9, db) {
        return d9 - db;
    };
    d4.sIMtr = function (dc, dd) {
        return dc / dd;
    };
    d4.flkyo = 'gray';
    d4.fEHBk = function (de, df) {
        return de === df;
    };
    d4['tVCsQ'] = 'ArolL';
    d4.vXKvD = function (dg, dh) {
        return dg + dh;
    };
    d4.nBvYR = function (di, dj) {
        return di * dj;
    };
    d4.INnZY = function (dk, dl) {
        return dk(dl);
    };
    d4.GylHF = function (dm, dn) {
        return dm * dn;
    };
    d4.XgnWb = function (dp, dq) {
        return dp !== dq;
    };
    d4.HfQud = 'Found saved settings, overwriting default bot options';
    d4.tBDNz = 'uEsxi';
    d4.aAqtL = function (dr, ds) {
        return dr - ds;
    };
    d4.pXtgm = function (dt, du) {
        return dt * du;
    };
    d4['LsWxh'] = function (dv, dw) {
        return dv - dw;
    };
    d4.xkLti = function (dx) {
        return dx();
    };
    d4.FtWdK = 'dNGLv';
    d4.CXwkR = function (dy, dz) {
        return dy * dz;
    };
    d4.XRHoi = 'pnGfy';
    d4.EQeGT = function (dA, dB) {
        return dA - dB;
    };
    d4.XscPw = function (dC, dD) {
        return dC > dD;
    };
    d4.YkRvP = '3|4|0|2|1';
    d4.DSJQe = function (dE, dF) {
        return dE !== dF;
    };
    d4.glOXs = 'gYiiO';
    d4.sZhmy = function (dG, dH) {
        return dG - dH;
    };
    d4.mELcS = function (dI, dJ) {
        return dI / dJ;
    };
    d4.vFOLP = function (dK, dL) {
        return dK * dL;
    };
    d4['zNQLN'] = function (dM, dN) {
        return dM - dN;
    };
    d4.WupDc = function (dO, dP) {
        return dO * dP;
    };
    d4.qrwFs = function (dQ, dR) {
        return dQ * dR;
    };
    d4.FxzgU = function (dS, dT) {
        return dS < dT;
    };
    d4['pXBbZ'] = function (dU, dV) {
        return dU * dV;
    };
    d4.lGTSG = function (dW, dX) {
        return dW * dX;
    };
    d4['BJSnM'] = function (dY, dZ) {
        return dY * dZ;
    };
    d4.EUnZn = function (e0, e1) {
        return e0 !== e1;
    };
    d4.CdSMv = 'LwFRp';
    d4.BZDrc = function (e2, e3) {
        return e2 / e3;
    };
    d4.JtUYT = 'zRIvU';
    d4.PHUFt = 'undefined';
    d4['pGPEJ'] = '/s/bg45.jpg';
    d4.jpTNY = 'green';
    d4.mHEgC = function (e4, e5) {
        return e4 / e5;
    };
    d4.bPRok = 'eumsd';
    d4.WLGdu = 'pWpxx';
    d4.CHaxJ = '9|7|8|5|2|6|1|3|0|4';
    d4['vKTzu'] = function (e6, e7) {
        return e6 === e7;
    };
    d4.ZZTge = 'yellow';
    d4.RRmyB = function (e8, e9) {
        return e8 !== e9;
    };
    d4.lQXCf = 'HQolQ';
    d4.OtzFP = function (ea, eb) {
        return ea === eb;
    };
    d4['sCCYJ'] = function (ec, ed) {
        return ec === ed;
    };
    d4.zYXTI = function (ee, ef) {
        return ee * ef;
    };
    d4.JGKxs = function (eg, eh) {
        return eg !== eh;
    };
    d4.TNfYi = 'ZtJbP';
    d4.vWOVW = 'wMrLn';
    d4.jSrNv = 'VrGys';
    d4.PcLcj = function (ei, ej) {
        return ei / ej;
    };
    d4.WtuvJ = function (ek, el) {
        return ek / el;
    };
    d4.BnQyr = function (em, en) {
        return em / en;
    };
    d4['SdIUO'] = function (eo, ep) {
        return eo / ep;
    };
    d4.lNxyh = function (eq, er) {
        return eq / er;
    };
    d4.ZYWGW = function (es, et) {
        return es === et;
    };
    d4.oBmyJ = '5|0|11|3|2|9|4|8|10|1|7|6';
    d4['mmDCV'] = function (eu, ev) {
        return eu - ev;
    };
    d4.Fzpio = function (ew, ex) {
        return ew * ex;
    };
    d4.QkslX = function (ey, ez) {
        return ey - ez;
    };
    d4.rHmIj = function (eA, eB) {
        return eA * eB;
    };
    d4.PCJya = function (eC, eD) {
        return eC - eD;
    };
    d4.kTuSc = function (eE, eF) {
        return eE + eF;
    };
    d4.ktrNV = function (eG, eH) {
        return eG - eH;
    };
    d4['LqWxq'] = function (eI, eJ) {
        return eI - eJ;
    };
    d4.Cxgsq = 'Speed hack Enabled! ';
    d4.NuKaP = 'Speed';
    d4['ZDiyh'] = 'gKJTD';
    d4.UEvZu = function (eK, eL) {
        return eK <= eL;
    };
    d4.zbmTw = function (eM, eN) {
        return eM >= eN;
    };
    d4['VEJXn'] = function (eO, eP) {
        return eO >= eP;
    };
    d4.LibrJ = function (eQ, eR) {
        return eQ + eR;
    };
    d4.delpA = function (eS, eT) {
        return eS === eT;
    };
    d4.aFwJV = 'BsmaO';
    d4.ArDov = 'red';
    d4.OXAGC = function (eU, eV) {
        return eU === eV;
    };
    d4.IhQSG = function (eW, eX) {
        return eW > eX;
    };
    d4.ZMBIV = function (eY, eZ) {
        return eY + eZ;
    };
    d4['uvkJe'] = function (f0, f1) {
        return f0 < f1;
    };
    d4.foqkF = function (f2, f3) {
        return f2 < f3;
    };
    d4.qlLrH = 'PdraD';
    d4.JxUZH = function (f4, f5) {
        return f4 * f5;
    };
    d4.MmuyY = function (f6, f7) {
        return f6 === f7;
    };
    d4.HrOUY = 'UAUSE';
    d4.LyLGr = function (f8, f9) {
        return f8 !== f9;
    };
    d4.lCDpK = 'ukHAZ';
    d4['SkAKJ'] = function (fa, fb) {
        return fa / fb;
    };
    d4['Mtqxl'] = function (fc, fd) {
        return fc * fd;
    };
    d4['NFCDL'] = function (fe, ff) {
        return fe * ff;
    };
    d4['irhmA'] = function (fg, fh) {
        return fg / fh;
    };
    return {
        'canvasRatio': {
            'x': d4.irhmA(window['mc'].width, window['ww']),
            'y': d4.irhmA(window['mc'].height, window['hh'])
        },
        'mouseAngle': function (fi) {
            if (d4['KeCvb'](d4.wIBNH, d4.wIBNH)) {
                var s = d3['mapToCanvas'](circle);
                return d3.circle(s['x'], s['y'], circle.radius * window['gsc']);
            } else {
                var fl = d4.XJdRd(fi.clientX, ww / 0x2);
                var fm = d4.aGvLY(fi.clientY, d4.sIMtr(hh, 0x2));
                return d3['fastAtan2'](fm, fl);
            }
        },
        'setMouseCoordinates': function (fn) {
            window['xm'] = fn['x'];
            window['ym'] = fn['y'];
        },
        'mouseToScreen': function (fo) {
            if (d4.fEHBk(d4['tVCsQ'], 'ArolL')) {
                var fp = d4.vXKvD(fo['x'], d4.sIMtr(window['ww'], 0x2));
                var fq = fo['y'] + window['hh'] / 0x2;
                return {
                    'x': fp,
                    'y': fq
                };
            } else {
                d3.drawCircle(fullHeadCircle, d4.flkyo, false);
            }
        },
        'screenToCanvas': function (fs) {
            var ft = d4.aGvLY(d4['nBvYR'](window['csc'], d4.nBvYR(fs['x'], d3['canvasRatio']['x'])), d4.INnZY(parseInt, window['mc'].style['left']));
            var fu = d4.aGvLY(d4.nBvYR(window.csc, d4.GylHF(fs['y'], d3['canvasRatio']['y'])), d4['INnZY'](parseInt, window['mc'].style.top));
            return {
                'x': ft,
                'y': fu
            };
        },
        'mapToMouse': function (fv) {
            var fw = {};
            fw.Xiamt = function (fx, fy) {
                return d4.XgnWb(fx, fy);
            };
            fw.fmBJz = d4.HfQud;
            if (d4.XgnWb(d4.tBDNz, 'sFJJv')) {
                var fz = d4['GylHF'](d4['aAqtL'](fv['x'], window.snake['xx']), window['gsc']);
                var fA = d4.pXtgm(d4.LsWxh(fv['y'], window.snake['yy']), window['gsc']);
                return {
                    'x': fz,
                    'y': fA
                };
            } else {
                savedOptions = JSON.parse(savedOptions);
                if (fw.Xiamt(Object.keys(savedOptions).length, 0x0) && savedOptions['constructor'] === Object) {
                    Object['keys'](savedOptions).forEach(function (ba) {
                        window.bot['opt'][ba] = savedOptions[ba];
                    });
                }
                window.log(fw.fmBJz);
            }
        },
        'mapToCanvas': function (fD) {
            var fE = d3.mapToMouse(fD);
            fE = d3.mouseToScreen(fE);
            fE = d3.screenToCanvas(fE);
            return fE;
        },
        'circleMapToCanvas': function (fF) {
            if (d4.fEHBk(d4['FtWdK'], d4.FtWdK)) {
                var fG = d3['mapToCanvas'](fF);
                return d3['circle'](fG['x'], fG['y'], d4.pXtgm(fF.radius, window.gsc));
            } else {
                if (hI.manualFood && hI['isCollision'] === 0x0) d4.xkLti(original_onmousemove);
                if (hI['mouseFollow']) {
                    hI.mGoToAngle = d3['mouseAngle'](b);
                }
            }
        },
        'point': function (fI, fJ) {
            if (d4.XgnWb(d4.XRHoi, 'MoqaX')) {
                var fK = {};
                fK['x'] = Math.round(fI);
                fK['y'] = Math.round(fJ);
                return fK;
            } else {
                hI['foodTimeout'] = window.setTimeout(hI.foodTimer, d4.CXwkR(d4.sIMtr(0x3e8, hI['opt'].targetFps), hI.foodFrames));
            }
        },
        'rect': function (fM, fN, fO, fP) {
            var fQ = {};
            fQ['x'] = Math.round(fM);
            fQ['y'] = Math.round(fN);
            fQ['width'] = Math.round(fO);
            fQ['height'] = Math.round(fP);
            return fQ;
        },
        'circle': function (fR, fS, fT) {
            var fU = {};
            fU['x'] = Math.round(fR);
            fU['y'] = Math.round(fS);
            fU.radius = Math.round(fT);
            return fU;
        },
        'fastAtan2': function (fV, fW) {
            var fX = {};
            fX['FqHdB'] = function (fW, fV) {
                return d4.EQeGT(fW, fV);
            };
            fX['kKbTf'] = function (fW, fV) {
                return d4.EQeGT(fW, fV);
            };
            fX.dAdgQ = function (fW, fV) {
                return fW === fV;
            };
            fX.wbQgQ = function (fW, fV) {
                return d4.CXwkR(fW, fV);
            };
            fX['XVqFJ'] = function (fW, fV) {
                return d4.XscPw(fW, fV);
            };
            fX.ASyFe = d4.YkRvP;
            var g8 = 0x0;
            var g9 = 0x0;
            var ga = Math.abs(fV) + 1e-10;
            if (fW < 0x0) {
                if (d4.DSJQe(d4.glOXs, d4.glOXs)) {
                    var a2 = d3.fastAtan2(fX.FqHdB(sp['yy'], window['snake']['yy']), fX.kKbTf(sp['xx'], window['snake']['xx']));
                    var a3 = hI.getAngleIndex(a2);
                    sp.aIndex = a3;
                    var a4 = Math.pow(Math['sqrt'](sp.distance) - sp.radius, 0x2);
                    if (fX.dAdgQ(collisionAngles[a3], undefined)) {
                        collisionAngles[a3] = {};
                        collisionAngles[a3].ang = fX.wbQgQ(hI.arcSize, a3);
                        collisionAngles[a3].snake = sp.snake;
                        collisionAngles[a3].distance = a4;
                        collisionAngles[a3]['xx'] = sp.xx;
                        collisionAngles[a3]['yy'] = sp.yy;
                        collisionAngles[a3].isHead = sp.isHead;
                    } else if (fX.XVqFJ(collisionAngles[a3].distance, sp.distance)) {
                        var gf = fX.ASyFe.split('|'),
                            gg = 0x0;
                        while (true) {
                            switch (gf[gg++]) {
                            case '0':
                                collisionAngles[a3].isHead = sp.isHead;
                                continue;
                            case '1':
                                collisionAngles[a3]['yy'] = sp['yy'];
                                continue;
                            case '2':
                                collisionAngles[a3]['xx'] = sp['xx'];
                                continue;
                            case '3':
                                collisionAngles[a3].snake = sp.snake;
                                continue;
                            case '4':
                                collisionAngles[a3].distance = a4;
                                continue;
                            }
                            break;
                        }
                    }
                } else {
                    g8 = d4.sIMtr(d4['vXKvD'](fW, ga), d4.sZhmy(ga, fW));
                    g9 = d4['mELcS'](d4.vFOLP(0x3, Math['PI']), 0x4);
                }
            } else {
                g8 = d4.mELcS(d4.zNQLN(fW, ga), d4.vXKvD(fW, ga));
                g9 = d4.mELcS(Math['PI'], 0x4);
            }
            g9 += d4['vFOLP'](d4.zNQLN(d4.WupDc(d4['qrwFs'](0.1963, g8), g8), 0.9817), g8);
            if (d4.FxzgU(fV, 0x0)) {
                return -g9;
            }
            return g9;
        },
        'setZoom': function (gh) {
            if (d4['EUnZn'](d4['CdSMv'], 'LwFRp')) {
                if (hI.collisionAngles[i] !== undefined) hI['collisionAngles'][i].distance = Math.min(d4.pXBbZ(d4.pXBbZ(headCircleRadius2, 0x3), fencingAngles[i]), hI.collisionAngles[i].distance);
                else {
                    hI['\\x63\\x6f\\x6c\\x6c\\x69\\x73\\x69\\x6f\\x6e\\x41\\x6e\\x67\\x6c\\x65\\x73'][i] = {};
                    hI['\\x63\\x6f\\x6c\\x6c\\x69\\x73\\x69\\x6f\\x6e\\x41\\x6e\\x67\\x6c\\x65\\x73'][i].ang = d4.lGTSG(hI.arcSize, i);
                    hI['\\x63\\x6f\\x6c\\x6c\\x69\\x73\\x69\\x6f\\x6e\\x41\\x6e\\x67\\x6c\\x65\\x73'][i].snake = snake;
                    hI['\\x63\\x6f\\x6c\\x6c\\x69\\x73\\x69\\x6f\\x6e\\x41\\x6e\\x67\\x6c\\x65\\x73'][i].distance = d4.lGTSG(d4.BJSnM(headCircleRadius2, 0x3), fencingAngles[i]);
                    hI['\\x63\\x6f\\x6c\\x6c\\x69\\x73\\x69\\x6f\\x6e\\x41\\x6e\\x67\\x6c\\x65\\x73'][i].isHead = 0x0;
                }
            } else {
                if (window.gsc) {
                    window.gsc *= Math.pow(0.9, d4['BZDrc'](gh.wheelDelta, -0x78) || gh.detail / 0x2 || 0x0);
                    window['desired_gsc'] = window.gsc;
                }
            }
        },
        'resetZoom': function () {
            window.gsc = 0.9;
            window['desired_gsc'] = 0.9;
        },
        'maintainZoom': function () {
            if (window['desired_gsc'] !== undefined) {
                if (d4.fEHBk('zRIvU', d4.JtUYT)) {
                    window.gsc = window['desired_gsc'];
                } else {
                    context['fillStyle'] = color;
                    context.fill();
                }
            }
        },
        'setBackground': function (gk) {
            gk = typeof gk !== d4.PHUFt ? gk : d4.pGPEJ;
            window['ii'].src = gk;
            window['ii'].onload();
        },
        'drawRect': function (gl, gm, gn, gp) {
            var gq = {};
            gq.pdaqN = function (gr, gs) {
                return gr / gs;
            };
            gq.InxtE = function (gt, gu) {
                return gt + gu;
            };
            gq.WAuQk = function (gv, gw) {
                return gv / gw;
            };
            gq.VOZUE = function (gx, gy) {
                return d4.BJSnM(gx, gy);
            };
            gq.HeAyb = d4.jpTNY;
            gq.qEFKd = function (gz, gA) {
                return gz - gA;
            };
            gq['jnDYG'] = function (gB, gC) {
                return d4.mHEgC(gB, gC);
            };
            gq.pNZED = function (gD, gE) {
                return gD / gE;
            };
            if (d4.fEHBk(d4.bPRok, d4.WLGdu)) {
                if (window.visualDebugging) {
                    d3.drawAngle(sang - gq['pdaqN'](Math['PI'], 0x2), gq.InxtE(sang, gq.WAuQk(Math['PI'], 0x2)), gq.VOZUE(hI.fullHeadCircleRadius, 1.5), gq['HeAyb'], false);
                    d3.drawAngle(gq['qEFKd'](sang, gq.jnDYG(Math['PI'], 0x2)), gq.InxtE(sang, gq.pNZED(Math['PI'], 0x2)), gq.VOZUE(hI['headCircleRadius'], 1.5), gq.HeAyb, false);
                }
            } else {
                var gG = d4['CHaxJ'].split('|'),
                    gH = 0x0;
                while (true) {
                    switch (gG[gH++]) {
                    case '0':
                        if (gn) {
                            gI.fillStyle = gm;
                            gI.fill();
                        }
                        continue;
                    case '1':
                        gI.rect(gJ['x'], gJ['y'], gl.width * window.gsc, gl.height * window.gsc);
                        continue;
                    case '2':
                        gI['globalAlpha'] = gp;
                        continue;
                    case '3':
                        gI.stroke();
                        continue;
                    case '4':
                        gI.restore();
                        continue;
                    case '5':
                        gI.save();
                        continue;
                    case '6':
                        gI['strokeStyle'] = gm;
                        continue;
                    case '7':
                        var gI = window['mc'].getContext('2d');
                        continue;
                    case '8':
                        var gJ = d3['mapToCanvas']({
                            'x': gl['x'],
                            'y': gl['y']
                        });
                        continue;
                    case '9':
                        if (d4.vKTzu(gp, undefined)) gp = 0x1;
                        continue;
                    }
                    break;
                }
            }
        },
        'drawCircle': function (gK, gL, gM, gN) {
            if (d4.RRmyB('HQolQ', d4.lQXCf)) {
                window[preference] = false;
            } else {
                if (d4['OtzFP'](gN, undefined)) gN = 0x1;
                if (d4.sCCYJ(gK['radius'], undefined)) gK.radius = 0x5;
                var gP = window['mc']['getContext']('2d');
                var gQ = d3.circleMapToCanvas(gK);
                gP.save();
                gP['globalAlpha'] = gN;
                gP.beginPath();
                gP['strokeStyle'] = gL;
                gP.arc(gQ['x'], gQ['y'], gQ.radius, 0x0, d4.zYXTI(Math['PI'], 0x2));
                gP['stroke']();
                if (gM) {
                    if (d4.JGKxs(d4.TNfYi, d4['vWOVW'])) {
                        gP.fillStyle = gL;
                        gP.fill();
                    } else {
                        d3.drawCircle(d3.circle(scPoint['xx'], scPoint['yy'], scPoint.radius), d4.ZZTge, false);
                    }
                }
                gP['restore']();
            }
        },
        'drawAngle': function (gS, gT, gU, gV, gW, gX) {
            if (d4.JGKxs(d4.jSrNv, 'VrGys')) {
                fencingAngleslength++;
            } else {
                var gZ = ('8|9|3|12|11|0|1|4|5|' + '7|6|10|2').split('|'),
                    h0 = 0x0;
                while (true) {
                    switch (gZ[h0++]) {
                    case '0':
                        h1['strokeStyle'] = gV;
                        continue;
                    case '1':
                        h1['moveTo'](window['mc']['width'] / 0x2, d4.PcLcj(window['mc'].height, 0x2));
                        continue;
                    case '2':
                        h1.restore();
                        continue;
                    case '3':
                        h1.save();
                        continue;
                    case '4':
                        h1.arc(d4.WtuvJ(window['mc']['width'], 0x2), d4['BnQyr'](window['mc'].height, 0x2), d4.zYXTI(gU, window.gsc), gS, gT);
                        continue;
                    case '5':
                        h1.lineTo(d4.SdIUO(window['mc'].width, 0x2), d4.lNxyh(window['mc'].height, 0x2));
                        continue;
                    case '6':
                        h1['stroke']();
                        continue;
                    case '7':
                        h1['closePath']();
                        continue;
                    case '8':
                        if (d4['ZYWGW'](gX, undefined)) gX = 0.6;
                        continue;
                    case '9':
                        var h1 = window['mc'].getContext('2d');
                        continue;
                    case '10':
                        if (gW) {
                            h1.fillStyle = gV;
                            h1['fill']();
                        }
                        continue;
                    case '11':
                        h1.beginPath();
                        continue;
                    case '12':
                        h1['globalAlpha'] = gX;
                        continue;
                    }
                    break;
                }
            }
        },
        'drawLine': function (h2, h3, h4, h5) {
            var h6 = d4['oBmyJ']['split']('|'),
                h7 = 0x0;
            while (true) {
                switch (h6[h7++]) {
                case '0':
                    var h8 = window['mc'].getContext('2d');
                    continue;
                case '1':
                    h8.lineTo(h9['x'], h9['y']);
                    continue;
                case '2':
                    h8['save']();
                    continue;
                case '3':
                    var h9 = d3['mapToCanvas'](h3);
                    continue;
                case '4':
                    h8.lineWidth = h5 * window.gsc;
                    continue;
                case '5':
                    if (d4.ZYWGW(h5, undefined)) h5 = 0x5;
                    continue;
                case '6':
                    h8.restore();
                    continue;
                case '7':
                    h8.stroke();
                    continue;
                case '8':
                    h8['strokeStyle'] = h4;
                    continue;
                case '9':
                    h8['beginPath']();
                    continue;
                case '10':
                    h8.moveTo(ha['x'], ha['y']);
                    continue;
                case '11':
                    var ha = d3['mapToCanvas'](h2);
                    continue;
                }
                break;
            }
        },
        'isLeft': function (hb, hc, hd) {
            return d4.XscPw(d4['mmDCV'](d4.Fzpio(d4.mmDCV(hc['x'], hb['x']), d4['QkslX'](hd['y'], hb['y'])), d4.rHmIj(hc['y'] - hb['y'], d4.PCJya(hd['x'], hb['x']))), 0x0);
        },
        'getDistance2': function (he, hf, hg, hi) {
            var hj = d4['kTuSc'](Math.pow(d4.ktrNV(he, hg), 0x2), Math['pow'](d4.LqWxq(hf, hi), 0x2));
            return hj;
        },
        'getDistance2FromSnake': function (hk) {
            hk.distance = d3['getDistance2'](window.snake['xx'], window.snake['yy'], hk['xx'], hk['yy']);
            return hk;
        },
        'pointInRect': function (hl, hm) {
            var hn = {};
            hn.vPrko = function (ho, hp) {
                return ho !== hp;
            };
            hn.IxpWF = d4.PHUFt;
            if (d4.JGKxs(d4['ZDiyh'], 'umpwW')) {
                if (hm['x'] <= hl['x'] && d4.UEvZu(hm['y'], hl['y']) && d4.zbmTw(d4['kTuSc'](hm['x'], hm.width), hl['x']) && d4.VEJXn(d4.LibrJ(hm['y'], hm.height), hl['y'])) {
                    if (d4.delpA('BsmaO', d4.aFwJV)) {
                        return true;
                    } else {
                        window.Speed = !window.Speed;
                        window.log(d4.kTuSc(d4.Cxgsq, window['Speed']));
                        v2.savePreference(d4.NuKaP, window.Speed);
                        if (window.playing && window['Speed']) {
                            snake.sct, snake.sct = -0x64;
                        } else {
                            snake['sct'], snake.sct = 0x14;
                        }
                    }
                }
                return false;
            } else {
                if (hn.vPrko(typeof window['showlogo_iv'], hn.IxpWF)) {
                    window.ncka = window['lgss'] = window.lga = 0x1;
                    clearInterval(window['showlogo_iv']);
                    showLogo(true);
                }
            }
        },
        'circleIntersect': function (hs, ht, hu) {
            var hv = {};
            hv.TAPex = function (hw, hx) {
                return hw === hx;
            };
            hv.ODnQJ = function (hy) {
                return d4.xkLti(hy);
            };
            if (d4.OXAGC(hu, undefined)) hu = false;
            var hz = hs.radius + ht.radius;
            var hA = d4['LqWxq'](hs['x'], ht['x']);
            var hB = hs['y'] - ht['y'];
            var hC = 0x0;
            if (d4['IhQSG'](d4.LibrJ(hA, hz), 0x0) && d4.ZMBIV(hB, hz) > 0x0 && d4.uvkJe(d4.LqWxq(hA, hz), 0x0) && d4.foqkF(d4['LqWxq'](hB, hz), 0x0)) {
                if (d4.qlLrH !== d4.qlLrH) {
                    d3.drawCircle(d3['circle'](scPoint['xx'], scPoint['yy'], scPoint.radius * 0x3), d4.ArDov, true);
                } else {
                    if (!hu) hC = d3['getDistance2'](hs['x'], hs['y'], ht['x'], ht['y']);
                    if (hu || hC < d4.JxUZH(hz, hz)) {
                        if (d4.MmuyY('rShCw', d4.HrOUY)) {
                            window['localStorage'].setItem(item, value);
                            v2['onPrefChange']();
                        } else {
                            if (window.visualDebugging) {
                                if (d4.LyLGr('ukHAZ', d4.lCDpK)) {
                                    window.redraw = function () {};
                                    window['onmousemove'] = function (b1) {
                                        if (hI.manualFood && hv.TAPex(hI['isCollision'], 0x0)) hv.ODnQJ(original_onmousemove);
                                        if (hI['mouseFollow']) {
                                            hI.mGoToAngle = d3.mouseAngle(b1);
                                        }
                                    };
                                    hI['isBotRunning'] = true;
                                    hI['go']();
                                } else {
                                    var hH = d3.circle(d4.SkAKJ(d4.JxUZH(hs['x'], ht.radius) + d4.Mtqxl(ht['x'], hs.radius), hz), d4.SkAKJ(d4.NFCDL(hs['y'], ht.radius) + ht['y'] * hs.radius, hz), 0x5);
                                }
                            }
                            return true;
                        }
                    }
                }
            }
            return false;
        }
    };
}();
var hI = window.bot = function () {
    var hJ = {};
    hJ.lEfvU = 'ObOMX';
    hJ.yTCKm = function (hK, hL) {
        return hK * hL;
    };
    hJ.GhDOc = '4|0|2|3|5|1';
    hJ.qazmr = function (hM, hN) {
        return hM !== hN;
    };
    hJ.bFkyf = function (hO, hP) {
        return hO !== hP;
    };
    hJ.kMQvW = function (hQ, hR) {
        return hQ <= hR;
    };
    hJ.MSzfL = 'xSOli';
    hJ.QrBkF = 'UUAvA';
    hJ.BQEAs = function (hS, hT) {
        return hS - hT;
    };
    hJ.hlNbR = function (hU, hV) {
        return hU > hV;
    };
    hJ['hxpme'] = function (hW, hX) {
        return hW / hX;
    };
    hJ.oVMsE = function (hY, hZ) {
        return hY * hZ;
    };
    hJ['xMzWl'] = function (i0, i1) {
        return i0 - i1;
    };
    hJ.gKmvJ = function (i2, i3) {
        return i2 / i3;
    };
    hJ.TGLAV = function (i4, i5) {
        return i4 < i5;
    };
    hJ.KaBqk = function (i6, i7) {
        return i6 / i7;
    };
    hJ.LUMUz = function (i8, i9) {
        return i8 * i9;
    };
    hJ.QkAbD = function (ia, ib) {
        return ia - ib;
    };
    hJ.VpHOf = function (ic, ie) {
        return ic / ie;
    };
    hJ.EHHgE = function (ig, ih) {
        return ig === ih;
    };
    hJ.iZUpD = function (ij, ik) {
        return ij === ik;
    };
    hJ['nLUSD'] = 'Please enter a background url or let it empty to set default:';
    hJ.gErvi = function (il, im) {
        return il(im);
    };
    hJ['lEhNs'] = 'Please enter a background url or let it empty for black background:';
    hJ['FriNC'] = function (io, iq) {
        return io !== iq;
    };
    hJ.JLHgV = function (ir, is) {
        return ir == is;
    };
    hJ.wYrJs = 'black';
    hJ.aeZmS = '#000';
    hJ['LAhhC'] = function (it, iu) {
        return it !== iu;
    };
    hJ['TEqgf'] = 'red';
    hJ.BrCTl = 'vPUyr';
    hJ.IoonX = function (iv, iw) {
        return iv !== iw;
    };
    hJ.GgFlr = function (ix, iy) {
        return ix < iy;
    };
    hJ['GQNPN'] = function (iz, iA) {
        return iz / iA;
    };
    hJ['bAYqY'] = function (iB, iC) {
        return iB === iC;
    };
    hJ.SDdsD = 'SiAGL';
    hJ.osJXK = function (iD, iE) {
        return iD < iE;
    };
    hJ.Knhod = function (iF, iG) {
        return iF + iG;
    };
    hJ.xeIgQ = 'xzXGB';
    hJ.SXRCf = function (iH, iI) {
        return iH / iI;
    };
    hJ.hefLW = function (iJ, iK) {
        return iJ / iK;
    };
    hJ.oNIlZ = function (iL, iM) {
        return iL > iM;
    };
    hJ.foqcI = function (iN, iO) {
        return iN * iO;
    };
    hJ.qMahx = '4|1|2|3|0';
    hJ.QQoQP = function (iP, iQ) {
        return iP + iQ;
    };
    hJ.dRlmy = function (iR, iS) {
        return iR - iS;
    };
    hJ.ZqETz = function (iT, iU) {
        return iT * iU;
    };
    hJ.nbWpx = function (iV, iW) {
        return iV * iW;
    };
    hJ.gVAxx = function (iX, iY) {
        return iX + iY;
    };
    hJ.sSgWh = function (iZ, j0) {
        return iZ * j0;
    };
    hJ['dssxw'] = function (j1, j2) {
        return j1 - j2;
    };
    hJ.qhknJ = function (j3, j4) {
        return j3 * j4;
    };
    hJ.pFKRS = function (j5, j6) {
        return j5 * j6;
    };
    hJ.EKFfh = function (j7, j8) {
        return j7 / j8;
    };
    hJ.scBaS = function (j9, ja) {
        return j9 < ja;
    };
    hJ.TYMkx = function (jb, jc) {
        return jb * jc;
    };
    hJ['wgndl'] = function (jd, je) {
        return jd !== je;
    };
    hJ['rXtzz'] = 'IGoXh';
    hJ.VpafA = function (jf, jg) {
        return jf < jg;
    };
    hJ.BSIBe = 'GHdoo';
    hJ.NaCtR = 'UsiNe';
    hJ.JXNPU = function (jh, ji) {
        return jh !== ji;
    };
    hJ['dWpGF'] = function (jj, jk) {
        return jj * jk;
    };
    hJ.NIaRd = function (jl, jm) {
        return jl + jm;
    };
    hJ.hRVcO = 'LKRmy';
    hJ.xiZzW = 'orange';
    hJ.EvVic = 'gfkfe';
    hJ.tjUSu = 'lvkmm';
    hJ.FouoO = function (jn, jo) {
        return jn * jo;
    };
    hJ['TtExq'] = function (jp, jq) {
        return jp - jq;
    };
    hJ.vzvRF = function (jr, js) {
        return jr * js;
    };
    hJ.yqcvv = function (jt, ju) {
        return jt - ju;
    };
    hJ.FIAwB = function (jv, jw) {
        return jv + jw;
    };
    hJ.Vijvj = function (jx, jy) {
        return jx + jy;
    };
    hJ.BtAMx = function (jz, jA) {
        return jz * jA;
    };
    hJ.VkpqP = '0|4|2|3|1';
    hJ.TkVMC = function (jB, jC) {
        return jB / jC;
    };
    hJ['qXgoq'] = function (jD, jE) {
        return jD * jE;
    };
    hJ.kjlLq = function (jF, jG) {
        return jF > jG;
    };
    hJ['hoZWj'] = 'qzevH';
    hJ.RSXkN = 'UMEOQ';
    hJ.tOesG = function (jH, jI) {
        return jH !== jI;
    };
    hJ.oJZTA = function (jJ, jK) {
        return jJ - jK;
    };
    hJ.oAyCW = function (jL, jM) {
        return jL > jM;
    };
    hJ.RQUSy = function (jN, jO) {
        return jN / jO;
    };
    hJ.TKSnk = 'Ceyzh';
    hJ['xKhdb'] = function (jP, jQ) {
        return jP + jQ;
    };
    hJ.Kmaij = function (jR, jS) {
        return jR + jS;
    };
    hJ.AicaO = function (jT, jU) {
        return jT / jU;
    };
    hJ['AmuDt'] = function (jV, jW) {
        return jV / jW;
    };
    hJ['bgiCO'] = function (jX, jY) {
        return jX / jY;
    };
    hJ.xKaft = function (jZ, k0) {
        return jZ + k0;
    };
    hJ['gTiun'] = function (k1, k2) {
        return k1 * k2;
    };
    hJ.vOskP = function (k3, k4) {
        return k3 + k4;
    };
    hJ.JMErp = function (k5, k6) {
        return k5 - k6;
    };
    hJ.kHCGx = function (k7, k8) {
        return k7 - k8;
    };
    hJ.PTLsA = 'rHSfE';
    hJ['OwvFt'] = 'UGico';
    hJ.TdFuG = function (k9, ka) {
        return k9 + ka;
    };
    hJ.zLOdk = function (kb, kc) {
        return kb / kc;
    };
    hJ.TKlbu = 'yellow';
    hJ.mZIjh = function (kd, ke) {
        return kd / ke;
    };
    hJ.VQmjA = function (kf, kg) {
        return kf * kg;
    };
    hJ.vrijI = function (kh, ki) {
        return kh * ki;
    };
    hJ.aAqfe = function (kj, kk) {
        return kj > kk;
    };
    hJ['oFEcf'] = function (kl, km) {
        return kl / km;
    };
    hJ.RdEwX = function (kn, ko) {
        return kn < ko;
    };
    hJ.hhWHM = function (kp, kq) {
        return kp === kq;
    };
    hJ['lDsPw'] = 'CAJMG';
    hJ.ceciU = 'NQlrl';
    hJ.mhAyF = function (kr, ks) {
        return kr !== ks;
    };
    hJ['ERtEX'] = function (kt, ku) {
        return kt + ku;
    };
    hJ.rGHkR = function (kv, kw) {
        return kv / kw;
    };
    hJ.OdMDL = 'visible';
    hJ.sqBdo = 'hidden';
    hJ.iWoPR = function (kx, ky) {
        return kx + ky;
    };
    hJ['fQtNh'] = function (kz, kA) {
        return kz * kA;
    };
    hJ.UhONe = function (kB, kC) {
        return kB - kC;
    };
    hJ.MNaND = function (kD, kE) {
        return kD + kE;
    };
    hJ.DAhld = 'target sz: ';
    hJ.PCaIZ = function (kF, kG) {
        return kF !== kG;
    };
    hJ['yjliy'] = 'NMnhb';
    hJ.fgSAS = function (kH, kI) {
        return kH < kI;
    };
    hJ.ffvab = function (kJ, kK) {
        return kJ < kK;
    };
    hJ['NEmVN'] = function (kL, kM) {
        return kL > kM;
    };
    hJ.acdZP = function (kN, kO) {
        return kN < kO;
    };
    hJ['Rsdjp'] = function (kP, kQ) {
        return kP !== kQ;
    };
    hJ['qnwVf'] = function (kR, kS) {
        return kR + kS;
    };
    hJ['YOXjp'] = function (kT, kU) {
        return kT / kU;
    };
    hJ['mYzpH'] = function (kV, kW) {
        return kV < kW;
    };
    hJ.CpFBK = function (kX, kY) {
        return kX !== kY;
    };
    hJ.lHiGV = function (kZ, l0) {
        return kZ < l0;
    };
    hJ.IaZnq = function (l1, l2) {
        return l1 * l2;
    };
    hJ.Fipfz = function (l3, l4) {
        return l3 * l4;
    };
    hJ.blKhs = 'tywmm';
    hJ.BxsbM = function (l5, l6) {
        return l5 / l6;
    };
    hJ.mHpcy = function (l7, l8) {
        return l7 !== l8;
    };
    hJ.dSTXO = 'cdIeg';
    hJ['jxBBB'] = function (l9, la) {
        return l9 + la;
    };
    hJ['YrFtH'] = function (lb, lc) {
        return lb * lc;
    };
    hJ.iZWon = function (ld, le) {
        return ld * le;
    };
    hJ['wXRwv'] = function (lf, lg) {
        return lf * lg;
    };
    hJ.pWqul = function (lh, li) {
        return lh * li;
    };
    hJ.iPXwZ = function (lj, lk) {
        return lj * lk;
    };
    hJ.UZoim = function (ll, lm) {
        return ll + lm;
    };
    hJ.SCDGd = 'YXfeZ';
    hJ.oNlAu = '#00FF00';
    hJ['xhYUl'] = function (ln, lo) {
        return ln / lo;
    };
    hJ.WAeSl = function (lp, lq) {
        return lp * lq;
    };
    hJ['sRHbP'] = function (lr, ls) {
        return lr + ls;
    };
    hJ.YMEhE = function (lt, lu) {
        return lt * lu;
    };
    hJ.pIHyA = function (lv, lw) {
        return lv + lw;
    };
    hJ.OmdOP = 'kWxeo';
    hJ.dVuBs = 'KaKtA';
    hJ.LDJhL = function (lx, ly) {
        return lx > ly;
    };
    hJ['QAXlJ'] = function (lz, lA) {
        return lz / lA;
    };
    hJ.rGNTQ = function (lB, lC) {
        return lB > lC;
    };
    hJ['AvLsK'] = 'fxcnk';
    hJ.LROdS = function (lD, lE) {
        return lD !== lE;
    };
    hJ['XUHfo'] = function (lF, lG) {
        return lF / lG;
    };
    hJ.hfUOp = 'NyOYS';
    hJ.hkWTr = function (lH, lI) {
        return lH !== lI;
    };
    hJ['jqxgr'] = function (lJ, lK) {
        return lJ !== lK;
    };
    hJ.JNlSL = function (lL, lM) {
        return lL === lM;
    };
    hJ['IRjeC'] = 'BkJTd';
    hJ.HZlZH = function (lN, lO) {
        return lN * lO;
    };
    hJ['pWzAt'] = function (lP, lQ) {
        return lP - lQ;
    };
    hJ['jEsop'] = function (lR, lS) {
        return lR - lS;
    };
    hJ.mtTcE = function (lT, lU) {
        return lT < lU;
    };
    hJ.CnVAU = function (lV, lW) {
        return lV === lW;
    };
    hJ.sEwiX = 'TyRuG';
    hJ.ZPztU = 'ypIQn';
    hJ['gLTjp'] = function (lX, lY) {
        return lX + lY;
    };
    hJ.ONhfX = function (lZ, m0) {
        return lZ * m0;
    };
    hJ.EWVKh = function (m1, m2) {
        return m1 * m2;
    };
    hJ.rhGHX = function (m3, m4) {
        return m3 === m4;
    };
    hJ.HaTbP = 'YBPGQ';
    hJ.qSdFh = function (m5, m6) {
        return m5 !== m6;
    };
    hJ.Dgrvj = function (m7, m8) {
        return m7 / m8;
    };
    hJ.vqfFz = 'IiUKI';
    hJ.AavTv = function (m9, ma) {
        return m9 <= ma;
    };
    hJ.gnNqo = function (mb, md) {
        return mb !== md;
    };
    hJ.MuEht = function (me, mf) {
        return me / mf;
    };
    hJ.IAVEj = function (mg, mh) {
        return mg * mh;
    };
    hJ.vrpCO = function (mi, mj) {
        return mi > mj;
    };
    hJ['iursS'] = 'LDqUD';
    hJ['XbvqU'] = 'IszIL';
    hJ.NPrXj = function (mk, ml) {
        return mk * ml;
    };
    hJ['jNhZr'] = function (mm, mn) {
        return mm * mn;
    };
    hJ.ssEif = 'yYziz';
    hJ['ajjDO'] = function (mo, mp) {
        return mo + mp;
    };
    hJ.cidwG = function (mq, mr) {
        return mq + mr;
    };
    hJ.BVWDR = 'white';
    hJ['yqqJx'] = function (ms, mt) {
        return ms / mt;
    };
    hJ['oDUYB'] = function (mu, mv) {
        return mu / mv;
    };
    hJ.UjoJJ = function (mw, mx) {
        return mw * mx;
    };
    hJ.AagjP = function (my, mz) {
        return my * mz;
    };
    hJ.FsASf = function (mA, mB) {
        return mA === mB;
    };
    hJ['WrXjY'] = function (mC, mD) {
        return mC + mD;
    };
    hJ.LoAsx = function (mE, mF) {
        return mE - mF;
    };
    hJ.FZrXJ = function (mG, mH) {
        return mG * mH;
    };
    hJ.sdsrf = function (mI, mJ) {
        return mI - mJ;
    };
    hJ.btKVr = function (mK, mL) {
        return mK === mL;
    };
    hJ.gxnaK = 'ddGCT';
    hJ['ApJhf'] = function (mM, mN) {
        return mM / mN;
    };
    hJ['klKCY'] = 'XRzWG';
    hJ.oUdET = function (mO, mP) {
        return mO > mP;
    };
    hJ.tnAYt = function (mQ, mR) {
        return mQ + mR;
    };
    hJ.pqVSu = 'uHPQK';
    hJ.cARae = 'uNJOk';
    hJ.Xexcy = function (mS, mT) {
        return mS * mT;
    };
    hJ.DXPzE = 'dzOeZ';
    hJ.WpGVr = function (mU, mV) {
        return mU * mV;
    };
    hJ.PBBfY = function (mW, mX) {
        return mW > mX;
    };
    hJ.sLXxf = function (mY, mZ) {
        return mY - mZ;
    };
    hJ.EVZOB = function (n0, n1) {
        return n0 * n1;
    };
    hJ.ijcHe = function (n2, n3) {
        return n2 + n3;
    };
    hJ.RGlVh = function (n4, n5) {
        return n4 * n5;
    };
    hJ.nLWne = function (n6, n7) {
        return n6 === n7;
    };
    hJ.uXFKx = function (n8, n9) {
        return n8 === n9;
    };
    hJ.EhJPS = 'fQOJy';
    hJ['JvesM'] = 'blue';
    hJ.KWnOT = function (na, nb) {
        return na > nb;
    };
    hJ.hGxmq = function (nc, nd) {
        return nc + nd;
    };
    hJ.WatPZ = function (ne, nf) {
        return ne - nf;
    };
    hJ['fzYrT'] = function (ng, nh) {
        return ng + nh;
    };
    hJ.dLzUw = function (ni, nj) {
        return ni > nj;
    };
    hJ.ytkQS = 'UNLrd';
    hJ.blUWX = 'gray';
    hJ.jMlEz = function (nk, nl) {
        return nk > nl;
    };
    hJ.xgzkm = function (nm, nn) {
        return nm > nn;
    };
    hJ['ngcrX'] = function (no, np) {
        return no !== np;
    };
    hJ['JGzWN'] = 'EPnio';
    hJ.VGOUq = function (nq, nr) {
        return nq / nr;
    };
    hJ.pVLlV = function (ns, nt) {
        return ns / nt;
    };
    hJ.QbGQG = function (nu, nv) {
        return nu / nv;
    };
    hJ.ySFSD = function (nw, nx) {
        return nw * nx;
    };
    hJ.bTwIr = '4|3|2|0|1|6|5';
    hJ.HPohd = function (ny, nz) {
        return ny - nz;
    };
    hJ.moVuN = function (nA, nB) {
        return nA + nB;
    };
    hJ.tRASr = function (nC, nD) {
        return nC === nD;
    };
    hJ.WQSYD = function (nE, nF) {
        return nE > nF;
    };
    hJ.zamoU = function (nG, nH) {
        return nG < nH;
    };
    hJ['iZSYU'] = function (nI, nJ) {
        return nI + nJ;
    };
    hJ['kARHU'] = function (nK, nL) {
        return nK * nL;
    };
    hJ['EHyNN'] = function (nM, nN) {
        return nM + nN;
    };
    hJ.VvkaC = function (nO, nP) {
        return nO * nP;
    };
    hJ.sqxoV = function (nQ, nR) {
        return nQ + nR;
    };
    hJ['WBMZM'] = function (nS, nT) {
        return nS * nT;
    };
    hJ['cTQin'] = '3|1|2|0|4';
    hJ.ATkTn = function (nU, nV) {
        return nU + nV;
    };
    hJ.cNRZD = function (nW, nX) {
        return nW + nX;
    };
    hJ.xHsRf = function (nY, nZ) {
        return nY + nZ;
    };
    hJ.AdWbe = 'DXXDL';
    hJ.NrEwW = 'Iwzrr';
    hJ['oYDuJ'] = function (o0, o1) {
        return o0 > o1;
    };
    hJ.Zluoe = 'muKBm';
    hJ.JzuiH = 'glwzX';
    hJ.ZZxVE = function (o2, o3) {
        return o2 - o3;
    };
    hJ.VtqYD = function (o4, o5) {
        return o4 * o5;
    };
    hJ.XmmwS = function (o6, o7) {
        return o6 * o7;
    };
    hJ.yDWBz = function (o8, o9) {
        return o8 - o9;
    };
    hJ['qGczZ'] = function (oa, ob) {
        return oa / ob;
    };
    hJ.dUkou = 'JzSri';
    hJ.IQVVg = function (oc, od) {
        return oc * od;
    };
    hJ.OcNPA = function (oe, of ) {
        return oe + of ;
    };
    hJ.pyCLS = function (og, oh) {
        return og * oh;
    };
    hJ.LBhKC = function (oi, oj) {
        return oi + oj;
    };
    hJ['YaFLx'] = function (ok, ol) {
        return ok < ol;
    };
    hJ.nqhHV = function (om, on) {
        return om / on;
    };
    hJ.wBYnL = function (oo, op) {
        return oo - op;
    };
    hJ.ZMAPq = function (oq, or) {
        return oq === or;
    };
    hJ.YGbrv = function (os, ot) {
        return os * ot;
    };
    hJ['pXDkc'] = function (ou, ov) {
        return ou !== ov;
    };
    hJ.UQphP = function (ow, ox) {
        return ow !== ox;
    };
    hJ.tdEYk = 'VCiBi';
    hJ['tQmdv'] = function (oy, oz) {
        return oy * oz;
    };
    hJ.JGAUC = function (oA, oB) {
        return oA + oB;
    };
    hJ.vdXxt = function (oC, oD) {
        return oC / oD;
    };
    hJ.ftZkz = function (oE, oF) {
        return oE === oF;
    };
    hJ.NXtYK = function (oG, oH) {
        return oG * oH;
    };
    hJ.npwRk = function (oI, oJ) {
        return oI + oJ;
    };
    hJ.XHqTt = function (oK, oL) {
        return oK * oL;
    };
    hJ.bxFdK = function (oM, oN) {
        return oM > oN;
    };
    hJ['pLgzl'] = '1|11|12|4|5|6|7|2|0|3|9|10|8';
    hJ.rLMhl = function (oO, oP) {
        return oO / oP;
    };
    hJ.hUNfA = function (oQ, oR) {
        return oQ / oR;
    };
    hJ.DAtQs = function (oS, oT) {
        return oS + oT;
    };
    hJ.wDbes = function (oU, oV) {
        return oU - oV;
    };
    hJ.SQrNS = function (oW, oX) {
        return oW / oX;
    };
    hJ['qNRgt'] = function (oY, oZ) {
        return oY * oZ;
    };
    hJ.dEAlb = function (p0, p1) {
        return p0 + p1;
    };
    hJ.TMezh = function (p2, p3) {
        return p2 * p3;
    };
    hJ.EfscY = function (p4, p5) {
        return p4 + p5;
    };
    hJ.pbGpg = function (p6, p7) {
        return p6 - p7;
    };
    hJ.OVBcu = function (p8, p9) {
        return p8 * p9;
    };
    hJ.tDSJb = '<ip-address>:<port> required.';
    hJ.BeTEU = function (pa, pb) {
        return pa !== pb;
    };
    hJ.nbkps = function (pc, pd) {
        return pc * pd;
    };
    hJ.PxkXs = 'KziRo';
    hJ.cnsKM = function (pe, pf) {
        return pe === pf;
    };
    hJ['wrjnR'] = function (pg, ph) {
        return pg / ph;
    };
    hJ.gYFJf = 'EzIuY';
    hJ.AuVJb = 'mjxGd';
    hJ.GlSRw = function (pi, pj) {
        return pi > pj;
    };
    hJ['UAEsu'] = 'NkhjT';
    hJ.HyyJi = 'wkHbt';
    hJ['Xdtdc'] = function (pk, pl) {
        return pk > pl;
    };
    hJ.VNmVz = function (pm, pn) {
        return pm * pn;
    };
    hJ['XRNKd'] = function (pp, pq) {
        return pp === pq;
    };
    hJ.mYaLS = function (pr, ps) {
        return pr - ps;
    };
    hJ.lKGmy = function (pt, pu) {
        return pt + pu;
    };
    hJ.fGjck = function (pv, pw) {
        return pv / pw;
    };
    hJ.UAFXn = function (px, py) {
        return px * py;
    };
    hJ.zGPWY = function (pz, pA) {
        return pz - pA;
    };
    hJ['alNAf'] = function (pB, pC) {
        return pB + pC;
    };
    hJ['eEVrk'] = function (pD, pE) {
        return pD * pE;
    };
    hJ.uVtIG = 'green';
    hJ.gbhnY = '3|1|4|0|2';
    hJ['gcFOv'] = function (pF, pG) {
        return pF * pG;
    };
    hJ.DkrpJ = function (pH, pI) {
        return pH * pI;
    };
    hJ.ktNxJ = function (pJ, pK) {
        return pJ + pK;
    };
    hJ['QXMjk'] = function (pL, pM) {
        return pL + pM;
    };
    hJ.hjWdr = function (pN, pO) {
        return pN * pO;
    };
    hJ.HkXxC = function (pP, pQ) {
        return pP * pQ;
    };
    hJ.ygWfC = function (pR, pS) {
        return pR + pS;
    };
    hJ.ROfbx = function (pT, pU) {
        return pT * pU;
    };
    hJ['dRgfp'] = function (pV, pW) {
        return pV + pW;
    };
    hJ.DEwqO = function (pX, pY) {
        return pX * pY;
    };
    hJ['cCmjm'] = function (pZ, q0) {
        return pZ + q0;
    };
    hJ.LEFda = function (q1, q2) {
        return q1 * q2;
    };
    hJ.IULzQ = function (q3, q4) {
        return q3 * q4;
    };
    hJ.bOmte = 'radiusMult set to: ';
    hJ.mrzww = function (q5, q6) {
        return q5 !== q6;
    };
    hJ.XPqQr = function (q7, q8) {
        return q7 === q8;
    };
    hJ.TqLNR = function (q9, qa) {
        return q9 !== qa;
    };
    hJ.WfMLY = 'FNPLN';
    hJ.gGfNY = function (qb, qc) {
        return qb / qc;
    };
    return {
        'manualFood': false,
        'isCollision': 0x0,
        'holdCollision': 0x14,
        'fencingSnake': 0x0,
        'targetAcceleration': 0x0,
        'arcSize': hJ.fGjck(Math['PI'], 0x14),
        'mGoToAngle': Math['PI'],
        'mouseFollow': false,
        'predatorMode': true,
        'isBotRacer': false,
        'doRedraw': true,
        'resetZoomOnLowFPS': true,
        'lookForSnakeDelayCnt': 0x0,
        'lookForSnakeDelay': 0x32,
        'isHunting': false,
        'targetSnake': 0x0,
        'minPredatorRadius': 0xf,
        'isBotRunning': false,
        'isBotEnabled': true,
        'lookForFood': false,
        'lowFPS': false,
        'collisionAngles': [],
        'scores': [],
        'foodTimeout': undefined,
        'sectorBoxSide': 0x0,
        'defaultAccel': 0x0,
        'sectorBox': {},
        'currentFood': {},
        'foodAccelDist2': 0x30d40,
        'foodAccelSize': 0x96,
        'foodFrames': 0x8,
        'accelAngle': hJ.gGfNY(Math['PI'], 2.5),
        'opt': {
            'radiusMult': 0xa,
            'targetFps': 0x1e,
            'foodRoundSize': 0x5,
            'foodRoundAngle': hJ['gGfNY'](Math['PI'], 0x8),
            'foodSmallSize': 0xa,
            'rearHeadAngle': hJ['IULzQ'](0x3, Math['PI']) / 0x4,
            'rearHeadDir': hJ.gGfNY(Math['PI'], 0x2),
            'radiusApproachSize': 0x5,
            'radiusAvoidSize': 0x19
        },
        'MID_X': 0x0,
        'MID_Y': 0x0,
        'MAP_R': 0x0,
        'pingtime': '',
        'checktime': 0x0,
        'pingDelay': 0x0,
        'getSnakeWidth': function (qd) {
            if ('MhGFi' !== hJ['lEfvU']) {
                if (qd === undefined) qd = window.snake['sc'];
                return Math.round(hJ.yTCKm(qd, 0x1d));
            } else {
                d3.drawCircle(d3.circle(scPoint['xx'], scPoint['yy'], scPoint['radius']), 'red', false);
            }
        },
        'quickRespawn': function () {
            var qf = hJ.GhDOc.split('|'),
                qg = 0x0;
            while (true) {
                switch (qf[qg++]) {
                case '0':
                    window.login_fr = 0x0;
                    continue;
                case '1':
                    window.forcing = false;
                    continue;
                case '2':
                    hI['isBotRunning'] = false;
                    continue;
                case '3':
                    window.forcing = true;
                    continue;
                case '4':
                    window['dead_mtm'] = 0x0;
                    continue;
                case '5':
                    window.connect();
                    continue;
                }
                break;
            }
        },
        'indexBetween': function (qh, qi) {
            var qj = {};
            qj.mTnHb = function (qk, ql) {
                return hJ.qazmr(qk, ql);
            };
            qj.wHyMY = function (qm, qn) {
                return hJ.bFkyf(qm, qn);
            };
            qj.JMYbY = function (qo, qp) {
                return hJ.kMQvW(qo, qp);
            };
            if (hJ.MSzfL !== hJ.QrBkF) {
                var qq = hJ.BQEAs(qi, qh);
                if (hJ.hlNbR(qq, hJ.hxpme(hJ.hxpme(hJ.oVMsE(0x2, Math['PI']), hI.arcSize), 0x2))) qq = hJ.xMzWl(qq, hJ.gKmvJ(hJ.oVMsE(0x2, Math['PI']), hI.arcSize));
                else if (hJ.TGLAV(qq, hJ['KaBqk'](-hJ.LUMUz(0x2, Math['PI']) / hI.arcSize, 0x2))) qq = hJ.QkAbD(hJ.VpHOf(0x2 * Math['PI'], hI.arcSize), qq);
                return qq;
            } else {
                if (qj.mTnHb(collisionAnglesPred[i], undefined)) {
                    if (qj['wHyMY'](hI['collisionAngles'][i], undefined)) {
                        if (qj.JMYbY(collisionAnglesPred[i].distance, hI.collisionAngles[i].distance)) hI['collisionAngles'][i] = collisionAnglesPred[i];
                    } else hI.collisionAngles[i] = collisionAnglesPred[i];
                }
            }
        },
        'calcAcceleration': function (qs) {
            var qt = {};
            qt['fGIkR'] = function (qu, qv) {
                return hJ.hlNbR(qu, qv);
            };
            qt.lGdfl = function (qw, qx) {
                return hJ.VpHOf(qw, qx);
            };
            qt.XyynD = function (qy, qz) {
                return hJ.TGLAV(qy, qz);
            };
            qt.EsolE = function (qA, qB) {
                return hJ.LAhhC(qA, qB);
            };
            qt['VZTjp'] = function (qC, qD) {
                return hJ.LUMUz(qC, qD);
            };
            qt.EQYWR = hJ.TEqgf;
            if (hJ.iZUpD(hJ.BrCTl, hJ.BrCTl)) {
                var qE = 0x1;
                var qF = window.snake.ehang;
                var qG = hI.getAngleIndex(qF);
                var qH = hI.getAngleIndex(qs);
                if (hJ.IoonX(hI.collisionAngles[qG], undefined) && hJ.TGLAV(hI.collisionAngles[qG].distance, Math.pow(hI['fullHeadCircleRadius'], 0x2))) {
                    return hI['defaultAccel'];
                }
                if (hI['fencingSnake'] > 0x0) return 0x1;
                var qI = hI['indexBetween'](qG, qH);
                if (hJ.GgFlr(Math.abs(qI), hJ.GQNPN(hI.accelAngle, hI.arcSize))) {
                    if (hJ.GgFlr(qI, 0x0)) qI = -0x1;
                    else qI = 0x1;
                    var qJ = qG;
                    while (hJ.IoonX(qJ, qH) && hJ.IoonX(qG, qH) || qG === qH && qJ === qG) {
                        if (hJ.bAYqY(hJ.SDdsD, hJ['SDdsD'])) {
                            if (hJ.IoonX(hI.collisionAngles[qJ], undefined) && hJ['osJXK'](hI.collisionAngles[qJ].distance, Math.pow(hI.fullHeadCircleRadius, 0x2))) {
                                qE = hI['defaultAccel'];
                            }
                            qJ = hJ.Knhod(qJ, qI);
                            if (hJ.IoonX(qG, qH)) {
                                if (hJ['IoonX'](hJ.xeIgQ, 'TBSxq')) {
                                    if (hJ.osJXK(qJ, 0x0)) qJ = hJ.SXRCf(0x2 * Math['PI'], hI['arcSize']) - 0x1;
                                    if (qJ > hJ.hefLW(hJ.LUMUz(0x2, Math['PI']), hI.arcSize)) qJ = 0x0;
                                } else {
                                    if (hJ.kMQvW(collisionAnglesPred[i].distance, hI.collisionAngles[i].distance)) hI['collisionAngles'][i] = collisionAnglesPred[i];
                                }
                            }
                        } else {
                            var a5 = Math['abs'](hI['angleBetween'](window.snakes[snake].ang, toSankeAng));
                            if (qt.fGIkR(a5, qt.lGdfl(Math['PI'], 0x2)) && qt.XyynD(a5, qt.lGdfl(Math['PI'], 1.1))) {
                                hI['targetSnake'] = snake;
                                hI['calcHuntTargetPoint']();
                                if (qt.EsolE(hI['targetSnake'], 0x0)) {
                                    if (window['visualDebugging'] && true) {
                                        d3.drawCircle(d3.circle(scPoint['xx'], scPoint['yy'], qt.VZTjp(scPoint.radius, 0x3)), qt['EQYWR'], true);
                                    }
                                    return true;
                                }
                            }
                        }
                    }
                } else qE = hI['defaultAccel'];
                return qE;
            } else {
                var aR = null;
                var aS = window['ii'].src.split('/').pop();
                if (hJ.EHHgE(aS, 'black') || hJ['iZUpD'](aS, '')) aR = prompt(hJ.nLUSD);
                else aR = hJ.gErvi(prompt, hJ['lEhNs']);
                if (aR !== null && hJ.FriNC(aR, '')) {
                    d3.setBackground(aR);
                } else if (hJ.JLHgV(aS, hJ.wYrJs) || aS === '') {
                    d3['setBackground']();
                } else {
                    document.body.style.backgroundColor = hJ['aeZmS'];
                    d3['setBackground'](hJ.wYrJs);
                }
            }
        },
        'angleBetween': function (qQ, qR) {
            var qS = Math.abs(qR - qQ);
            if (hJ.oNIlZ(qS, Math['PI'])) qS = hJ.foqcI(0x2, Math['PI']) - qS;
            return qS;
        },
        'changeHeading': function (qT) {
            var qU = hJ.qMahx.split('|'),
                qV = 0x0;
            while (true) {
                switch (qU[qV++]) {
                case '0':
                    d3['setMouseCoordinates'](d3.mapToMouse(window.goalCoordinates));
                    continue;
                case '1':
                    var qW = Math.cos(-qT);
                    continue;
                case '2':
                    var qX = Math.sin(-qT);
                    continue;
                case '3':
                    window.goalCoordinates = {};
                    window.goalCoordinates['x'] = Math.round(hJ.QQoQP(hJ.dRlmy(hJ.ZqETz(qW, qY.x - window.snake.xx), hJ.nbWpx(qX, hJ.dRlmy(qY.y, window.snake.yy))), window.snake.xx));
                    window.goalCoordinates['y'] = Math.round(hJ.QQoQP(hJ.gVAxx(hJ.sSgWh(qX, hJ.dRlmy(qY.x, window.snake.xx)), qW * hJ.dssxw(qY.y, window.snake.yy)), window.snake.yy));
                    continue;
                case '4':
                    var qY = {};
                    qY['x'] = hJ.gVAxx(window.snake.xx, hJ.qhknJ(0x1f4, hI.cos));
                    qY['y'] = hJ.gVAxx(window.snake.yy, hJ.pFKRS(0x1f4, hI.sin));
                    continue;
                }
                break;
            }
        },
        'avoidCollision': function () {
            var qZ = Math.pow(hJ.EKFfh(hI.fullHeadCircleRadius, 0x3), 0x2);
            if (hI.targetAcceleration !== 0x1 && hI.speedMult > 2.1 && (hJ.bAYqY(hI.frontCollision, 0x0) || hJ.oNIlZ(hI.frontCollision, hJ.pFKRS(qZ, 0x2)))) {
                return;
            }
            var r0 = hJ.pFKRS(qZ, 0x2);
            var r1 = -0x1;
            for (var r2 = 0x0; hJ.scBaS(r2, hJ.TYMkx(0x2, Math['PI']) / hI.arcSize); r2++) {
                if (hJ.wgndl(hJ.rXtzz, hJ.rXtzz)) {
                    hI['opt'].radiusMult = hI.opt.radiusApproachSize;
                } else {
                    if (hJ.wgndl(hI.collisionAngles[r2], undefined) && hJ['VpafA'](hI.collisionAngles[r2].distance, qZ)) {
                        if (hJ.BSIBe === hJ.NaCtR) {
                            var u = {};
                            u['x'] = Math.round(x);
                            u['y'] = Math.round(y);
                            u.width = Math.round(w);
                            u.height = Math.round(h);
                            return u;
                        } else {
                            if (hJ.VpafA(hI.collisionAngles[r2].distance, r0)) {
                                r0 = hI.collisionAngles[r2].distance;
                                r1 = r2;
                            }
                        }
                    }
                }
            }
            if (hJ.JXNPU(r1, -0x1)) {}
            window.goalCoordinates = {};
            window.goalCoordinates['x'] = Math.round(window.snake.xx + hJ.dWpGF(hI.fullHeadCircleRadius, Math.cos(hI.gotoAngle)));
            window.goalCoordinates['y'] = Math.round(window.snake.yy + hI.fullHeadCircleRadius * Math.sin(hI.gotoAngle));
            d3.setMouseCoordinates(d3.mapToMouse(window['goalCoordinates']));
            return;
        },
        'avoidCollisionPoint': function (r6, r7) {
            if (hJ.bAYqY(r7, undefined) || hJ.oNIlZ(r7, Math['PI'])) {
                r7 = Math['PI'];
            }
            var r8 = {};
            r8['x'] = window.snake.xx + 0x7d0 * hI.cos;
            r8['y'] = hJ.NIaRd(window.snake.yy, hJ.dWpGF(0x7d0, hI.sin));
            if (window['visualDebugging']) {
                if (hJ.hRVcO !== hJ.hRVcO) {
                    hI.lookForSnakeDelayCnt = 0x0;
                    hI.isHunting = false;
                } else {
                    d3.drawLine({
                        'x': window.snake['xx'],
                        'y': window['snake']['yy']
                    }, r8, hJ.xiZzW, 0x5);
                    d3.drawLine({
                        'x': window.snake['xx'],
                        'y': window.snake['yy']
                    }, {
                        'x': r6['xx'],
                        'y': r6['yy']
                    }, hJ.TEqgf, 0x5);
                }
            }
            var ra = Math['cos'](r7);
            var rb = Math.sin(r7);
            if (d3.isLeft({
                    'x': window.snake['xx'],
                    'y': window.snake['yy']
                }, r8, {
                    'x': r6['xx'],
                    'y': r6['yy']
                })) {
                if (hJ.EvVic === hJ['tjUSu']) {
                    console.log.apply(console, arguments);
                } else {
                    rb = -rb;
                }
            }
            window.goalCoordinates = {};
            window.goalCoordinates['x'] = Math.round(hJ.FouoO(ra, hJ.TtExq(r6.xx, window.snake.xx)) - hJ.vzvRF(rb, hJ.yqcvv(r6.yy, window.snake.yy)) + window.snake.xx);
            window.goalCoordinates['y'] = Math.round(hJ.FIAwB(hJ.Vijvj(hJ.vzvRF(rb, hJ.yqcvv(r6.xx, window.snake.xx)), hJ.BtAMx(ra, r6.yy - window.snake.yy)), window.snake.yy));
            d3['setMouseCoordinates'](d3['mapToMouse'](window.goalCoordinates));
        },
        'sortDistance': function (rd, re) {
            return rd.distance - re.distance;
        },
        'getAngleIndex': function (rf) {
            var rg = hJ['VkpqP'].split('|'),
                rh = 0x0;
            while (true) {
                switch (rg[rh++]) {
                case '0':
                    var ri;
                    continue;
                case '1':
                    return ri;
                case '2':
                    ri = Math.round(rf * hJ.TkVMC(0x1, hI.arcSize));
                    continue;
                case '3':
                    if (ri === hJ['TkVMC'](0x2 * Math['PI'], hI.arcSize)) {
                        return 0x0;
                    }
                    continue;
                case '4':
                    if (rf < 0x0) {
                        rf += hJ.qXgoq(0x2, Math['PI']);
                    }
                    continue;
                }
                break;
            }
        },
        'addCollisionAngle': function (rj, rk) {
            var rl = d3.fastAtan2(hJ['yqcvv'](rj['yy'], window.snake['yy']), hJ.yqcvv(rj['xx'], window['snake']['xx']));
            var rm = hI['getAngleIndex'](rl);
            rj.aIndex = rm;
            var rn = Math.pow(Math['sqrt'](rj.distance) - rj.radius, 0x2);
            if (rk[rm] === undefined) {
                rk[rm] = {};
                rk[rm].ang = hI.arcSize * rm;
                rk[rm].snake = rj.snake;
                rk[rm].distance = rn;
                rk[rm]['xx'] = rj.xx;
                rk[rm]['yy'] = rj.yy;
                rk[rm].isHead = rj.isHead;
            } else if (hJ.kjlLq(rk[rm].distance, rj.distance)) {
                if (hJ['JXNPU'](hJ.hoZWj, hJ.hoZWj)) {
                    tAccel = hI['defaultAccel'];
                } else {
                    var rp = '1|3|0|2|4' ['split']('|'),
                        rq = 0x0;
                    while (true) {
                        switch (rp[rq++]) {
                        case '0':
                            rk[rm].isHead = rj['isHead'];
                            continue;
                        case '1':
                            rk[rm].snake = rj['snake'];
                            continue;
                        case '2':
                            rk[rm]['xx'] = rj['xx'];
                            continue;
                        case '3':
                            rk[rm].distance = rn;
                            continue;
                        case '4':
                            rk[rm]['yy'] = rj['yy'];
                            continue;
                        }
                        break;
                    }
                }
            }
        },
        'calcHuntTargetPoint': function () {
            if (hJ.RSXkN !== hJ.RSXkN) {
                rs['sct'], rs.sct = 0x14;
            } else {
                var rs = hI['targetSnake'];
                if (hJ.tOesG(window['snakes'][rs], undefined) && window.snakes[rs].alive_amt === 0x1) {
                    if (window.snakes[rs]['sp'] > 0x7) {
                        hI.isHunting = false;
                        hI['targetSnake'] = 0x0;
                        return hI['defaultAccel'];
                    }
                    scPoint = {};
                    scPoint['xx'] = window.snakes[rs].xx;
                    scPoint['yy'] = window.snakes[rs].yy;
                    scPoint.snake = rs;
                    scPoint['radius'] = 0x1;
                    d3['getDistance2FromSnake'](scPoint);
                    var rt = d3['fastAtan2'](window['snakes'][rs]['yy'] - window.snake['yy'], hJ.oJZTA(window.snakes[rs]['xx'], window.snake['xx']));
                    var ru = Math['abs'](hI['angleBetween'](window.snakes[rs].ang, rt));
                    if (!(hJ.oAyCW(ru, Math['PI'] / 2.2) && hJ.VpafA(ru, hJ.RQUSy(Math['PI'], 1.1)))) {
                        if (hJ.tOesG(hJ.TKSnk, 'Dupdd')) {
                            hI['isHunting'] = false;
                            hI['targetSnake'] = 0x0;
                            return hI['defaultAccel'];
                        } else {
                            context.fillStyle = color;
                            context.fill();
                        }
                    }
                    var rw = hJ['xKhdb'](hJ['Kmaij'](hI['snakeRadius'], 0xa) * 1.2 + 0x3c, hJ.AicaO(hJ.AmuDt(hJ.bgiCO(Math.sqrt(scPoint.distance), hI.speedMult), hJ.xKaft(Math.abs(ru - hJ['bgiCO'](Math['PI'], 1.5)), 0x1)), 0x2));
                    if (hJ.oAyCW(rw, 0x1f4)) {
                        hI.isHunting = false;
                        hI['targetSnake'] = 0x0;
                        return hI['defaultAccel'];
                    }
                    var rx = {};
                    rx['x'] = window.snakes[rs].xx + hJ.gTiun(rw, Math.cos(window.snakes[rs].ang));
                    rx['y'] = hJ.vOskP(window.snakes[rs].yy, rw * Math.sin(window.snakes[rs].ang));
                    var ry = d3.fastAtan2(hJ.JMErp(rx['y'], window.snake['yy']), hJ.kHCGx(rx['x'], window.snake['xx']));
                    var rz = hI.getAngleIndex(ry);
                    var rA = hI.calcAcceleration(ry); {
                        if (hJ.PTLsA === hJ.OwvFt) {
                            hJ['gErvi'](original_onmouseDown, e);
                        } else {
                            d3.drawCircle(d3.circle(rx['x'], rx['y'], 0x1e), hJ.TEqgf, true);
                            d3.drawCircle(d3.circle(rx['x'], rx['y'], 0x96), 'yellow', false);
                            hI['currentFood'] = rx;
                            return rA;
                        }
                    }
                }
                hI['isHunting'] = false;
                hI['targetSnake'] = 0x0;
                return hI['defaultAccel'];
            }
        },
        'getTargetSnake': function () {
            var rC;
            var rD = Math.pow(hI['fullHeadCircleRadius'] * 1.5, 0x2);
            var rE = Math.pow(hJ.vrijI(hI.headCircleRadius, 1.5), 0x2);
            for (var rF = 0x0, rG = window.snakes.length; hJ.VpafA(rF, rG); rF++) {
                if (window.snakes[rF]['id'] !== window.snake['id'] && hJ.bAYqY(window.snakes[rF].alive_amt, 0x1)) {
                    if (hJ.bAYqY('CIXgl', 'kBEMm')) {
                        hI['lookForFood'] = false;
                        if (window['visualDebugging']) {
                            d3.drawAngle(sang - Math['PI'] / 0x2, hJ.TdFuG(sang, hJ.zLOdk(Math['PI'], 0x2)), hJ['gTiun'](hI.fullHeadCircleRadius, 1.5), hJ.TKlbu, false);
                            d3.drawAngle(hJ.kHCGx(sang, hJ.mZIjh(Math['PI'], 0x2)), sang + Math['PI'] / 0x2, hJ.VQmjA(hI['headCircleRadius'], 1.5), 'yellow', false);
                        }
                    } else {
                        if (hJ.aAqfe(window.snakes[rF]['sc'], 1.1) && window.snakes[rF]['sp'] < 0x7) {
                            var rI = d3.fastAtan2(window.snakes[rF]['yy'] - window.snake['yy'], hJ.kHCGx(window.snakes[rF]['xx'], window.snake['xx']));
                            rC = {};
                            rC['xx'] = window.snakes[rF].xx;
                            rC['yy'] = window.snakes[rF].yy;
                            rC.snake = rF;
                            rC.radius = 0x1;
                            d3['getDistance2FromSnake'](rC);
                            if (hJ.VpafA(rC.distance, rD) && rC.distance > rE && Math.abs(hI['angleBetween'](window.snake['ehang'], rI)) < Math['PI'] / 0x2) {
                                var rJ = Math.abs(hI['angleBetween'](window['snakes'][rF].ang, rI));
                                if (rJ > hJ.oFEcf(Math['PI'], 0x2) && hJ.RdEwX(rJ, hJ.oFEcf(Math['PI'], 1.1))) {
                                    if (hJ.hhWHM(hJ['lDsPw'], hJ.ceciU)) {
                                        hI['isBotEnabled'] = !hI['isBotEnabled'];
                                    } else {
                                        hI['targetSnake'] = rF;
                                        hI['calcHuntTargetPoint']();
                                        if (hJ['mhAyF'](hI['targetSnake'], 0x0)) {
                                            if (window['visualDebugging'] && true) {
                                                d3.drawCircle(d3.circle(rC['xx'], rC['yy'], hJ.vrijI(rC.radius, 0x3)), 'red', true);
                                            }
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            hI['targetSnake'] = 0x0;
            return false;
        },
        'getCollision': function () {
            var rL = {};
            rL.oQtgz = 'red';
            rL.BqsMz = function (rM, rN) {
                return hJ.iWoPR(rM, rN);
            };
            rL['yjACF'] = function (rO, rP) {
                return hJ.fQtNh(rO, rP);
            };
            rL['urJMq'] = function (rQ, rR) {
                return hJ.hhWHM(rQ, rR);
            };
            rL.FXuYD = function (rS, rT) {
                return rS > rT;
            };
            rL.NrXSG = function (rU, rV) {
                return hJ.UhONe(rU, rV);
            };
            rL['fVQhe'] = function (rW, rX) {
                return hJ.fQtNh(rW, rX);
            };
            rL.rFwLQ = function (rY, rZ) {
                return hJ.fQtNh(rY, rZ);
            };
            rL.sVTUR = function (s0, s1) {
                return hJ.MNaND(s0, s1);
            };
            rL.gTaWX = function (s2, s3) {
                return hJ.MNaND(s2, s3);
            };
            rL.iJWjX = function (s4, s5) {
                return s4 * s5;
            };
            rL.BAkZC = function (s6, s7) {
                return hJ.fQtNh(s6, s7);
            };
            rL.BKBem = function (s8, s9) {
                return hJ.gErvi(s8, s9);
            };
            rL.cTzjC = function (sa, sb) {
                return sa !== sb;
            };
            rL.iaSQS = hJ.OdMDL;
            rL.HqhRF = hJ.DAhld;
            if (hJ.PCaIZ(hJ.yjliy, 'UCjLk')) {
                var sd;
                var se, sf, sg;
                var sh;
                hI.collisionAngles = [];
                var si = [];
                var sj = Math.pow(hI['headCircleRadius'], 0x2);
                var sk = Math.pow(hI.fullHeadCircleRadius, 0x2);
                if (hJ.aAqfe(hI['fencingSnake'], 0x0)) hI['fencingSnake']--;
                var sl = -0x1;
                var sm = window.snake['xx'];
                var sn = window['snake']['xx'];
                var so = window.snake['yy'];
                var sq = window['snake']['yy'];
                var sr = true;
                for (se = 0x0, lp = window.snake.pts['length']; hJ['fgSAS'](se, lp); se++) {
                    if (!window.snake.pts[se].dying) {
                        if (hJ.ffvab(window.snake.pts[se]['xx'], sm)) sm = window.snake.pts[se]['xx'];
                        if (hJ.aAqfe(window.snake.pts[se]['xx'], sn)) sn = window.snake.pts[se]['xx'];
                        if (window['snake'].pts[se]['yy'] < so) so = window.snake['pts'][se]['yy'];
                        if (hJ.NEmVN(window.snake.pts[se]['yy'], sq)) sq = window.snake['pts'][se]['yy'];
                    }
                }
                for (var ss = 0x0, st = window.snakes.length; hJ.acdZP(ss, st); ss++) {
                    sd = undefined;
                    var su = [];
                    if (hJ['Rsdjp'](window.snakes[ss]['id'], window.snake['id']) && window.snakes[ss]['alive_amt'] === 0x1) {
                        sg = hJ.fQtNh(hJ['qnwVf'](window.snakes[ss].sct, 0x5), 0x17);
                        sd = {};
                        sd['xx'] = window.snakes[ss].xx;
                        sd['yy'] = window.snakes[ss].yy;
                        sd.snake = ss;
                        sd.radius = hJ.YOXjp(hI.getSnakeWidth(window.snakes[ss].sc), 0x2);
                        sd.isHead = window.snakes[ss].sp;
                        d3['getDistance2FromSnake'](sd); {
                            hI.addCollisionAngle(sd, hI.collisionAngles);
                            su[sd.aIndex] = 0x2;
                            if (window['visualDebugging'] && false) {
                                d3['drawCircle'](d3.circle(sd['xx'], sd['yy'], sd['radius']), hJ['TEqgf'], false);
                            }
                            if (hJ.mYzpH(sd['distance'], sk / 0x9) || hJ.CpFBK(hI['targetSnake'], 0x0)) sr = false;
                            if (sr && hJ['lHiGV'](sd.distance, hJ.IaZnq(hJ.Fipfz(sk, 1.5), 1.5))) {
                                if (hJ.hhWHM('jHlhk', hJ.blKhs)) {
                                    playing = false;
                                } else {
                                    var sw = hJ['qnwVf'](Math.round(hJ.BxsbM(hJ.Fipfz(hJ.qnwVf(window.snakes[ss]['sp'], 0x2), hJ.qnwVf(hI['snakeRadius'], 0x1e)), 0xc8)), 0x1);
                                    var sx = Math.cos(window.snakes[ss].ang);
                                    var sy = Math.sin(window.snakes[ss].ang);
                                    var sA = hJ.BxsbM(hJ['qnwVf'](hI.getSnakeWidth(window.snakes[ss]['sc']), 0x64), 0x1e);
                                    for (var sB = 0x1; hJ['lHiGV'](sB, sw); sB++) {
                                        if (hJ.mHpcy(hJ['dSTXO'], 'fruXe')) {
                                            sh = {};
                                            sh['xx'] = hJ.jxBBB(window.snakes[ss].xx, hJ.YrFtH(hJ.YrFtH(hJ.YrFtH(sA, sB), sx), 0x6));
                                            sh['yy'] = hJ.jxBBB(window.snakes[ss].yy, hJ.iZWon(hJ.wXRwv(hJ.pWqul(sA, sB), sy), 0x6));
                                            sh.snake = ss;
                                            sh.radius = hJ.iPXwZ(sA + 0xa, sB);
                                            sh.isHead = window.snakes[ss].sp;
                                            if (window.visualDebugging && false) {
                                                d3.drawCircle(d3.circle(sh['xx'], sh['yy'], sh.radius), hJ.TEqgf, false);
                                            }
                                            d3['getDistance2FromSnake'](sh);
                                            hI['addCollisionAngle'](sh, si);
                                        } else {
                                            d3.drawLine({
                                                'x': window.snake['xx'],
                                                'y': window.snake['yy']
                                            }, end, 'orange', 0x5);
                                            d3['drawLine']({
                                                'x': window.snake['xx'],
                                                'y': window.snake['yy']
                                            }, {
                                                'x': sh['xx'],
                                                'y': sh['yy']
                                            }, rL.oQtgz, 0x5);
                                        }
                                    }
                                }
                            }
                        }
                        if (hJ.lHiGV(sd['distance'], hJ.UZoim(hJ.iPXwZ(sg, sg), sk))) {
                            var sD = window.snakes[ss]['xx'];
                            var sE = window.snakes[ss]['xx'];
                            var sF = window.snakes[ss]['yy'];
                            var sG = window['snakes'][ss]['yy'];
                            for (se = 0x0, lp = window.snakes[ss].pts.length; hJ['lHiGV'](se, lp); se++) {
                                if (!window.snakes[ss].pts[se].dying) {
                                    if (hJ.lHiGV(window.snakes[ss].pts[se]['xx'], sD)) sD = window.snakes[ss].pts[se]['xx'];
                                    if (window.snakes[ss]['pts'][se]['xx'] > sE) sE = window.snakes[ss].pts[se]['xx'];
                                    if (hJ.lHiGV(window.snakes[ss].pts[se]['yy'], sF)) sF = window.snakes[ss].pts[se]['yy'];
                                    if (hJ.NEmVN(window.snakes[ss]['pts'][se]['yy'], sG)) sG = window.snakes[ss].pts[se]['yy'];
                                    sh = {};
                                    sh['xx'] = window.snakes[ss].pts[se].xx;
                                    sh['yy'] = window.snakes[ss].pts[se].yy;
                                    sh['snake'] = ss;
                                    sh.radius = hI.getSnakeWidth(window.snakes[ss].sc) / 0x2;
                                    sh['isHead'] = 0x0;
                                    if (window.visualDebugging && false) {
                                        if (hJ.SCDGd !== 'YXfeZ') {
                                            debuggerProtection(0x0);
                                        } else {
                                            d3.drawCircle(d3.circle(sh['xx'], sh['yy'], sh.radius), hJ.oNlAu, false);
                                        }
                                    }
                                    d3['getDistance2FromSnake'](sh);
                                    if (hJ.NEmVN(sh.distance, hJ['xhYUl'](sk, 0x2))) {
                                        var sI = Math.round(hJ['WAeSl'](Math.sqrt(sh.distance) / hI['fullHeadCircleRadius'], 0x3));
                                        se = hJ.sRHbP(se, sI);
                                    }
                                    hI.addCollisionAngle(sh, hI.collisionAngles);
                                    if (su[sh.aIndex] === undefined) su[sh.aIndex] = 0x1;
                                }
                            }
                            var sJ = 0x0;
                            for (sf = 0x0; sf < hJ.xhYUl(hJ.YMEhE(0x2, Math['PI']), hI.arcSize); sf++) {
                                if (hJ['mHpcy'](su[sf], undefined) || su[hJ.pIHyA(sf, 0x1)] !== undefined) {
                                    if (hJ['mHpcy'](hJ.OmdOP, hJ.dVuBs)) {
                                        sJ++;
                                    } else {
                                        d3['drawAngle'](hJ.kHCGx(sY, hJ.oFEcf(hI['frontArcAngle'], 0x2)), hJ['ERtEX'](sY, hJ.rGHkR(hI.frontArcAngle, 0x2)), hI['frontArcRadius'], hJ.TEqgf, true);
                                    }
                                }
                            }
                            if (hJ['LDJhL'](sJ, hJ.xhYUl(0x2 * Math['PI'], hI.arcSize) * 0.55) || hJ.LDJhL(sJ, hJ.QAXlJ(hJ.YMEhE(0x2, Math['PI']), hI.arcSize) * 0.43) && (hJ.lHiGV(sD, sm) && hJ.rGNTQ(sE, sn) && hJ.rGNTQ(sG, sq) && hJ['lHiGV'](sF, so))) {
                                if (hJ.AvLsK === 'fxcnk') {
                                    if (hJ.LROdS(sJ, hJ['XUHfo'](0x2 * Math['PI'], hI.arcSize))) {
                                        hI['fencingSnake'] = hJ.YMEhE(hI.holdCollision, 0x3);
                                        hI['isCollision'] = hI['fencingSnake'];
                                        sr = false;
                                        for (sf = 0x0; hJ.lHiGV(sf, hJ['XUHfo'](0x2 * Math['PI'], hI.arcSize)); sf++) {
                                            if (hJ.hfUOp === 'NyOYS') {
                                                if (hJ['hkWTr'](su[sf], undefined) || hJ['jqxgr'](su[sf + 0x1], undefined)) {
                                                    if (hI.collisionAngles[sf] !== undefined) hI['collisionAngles'][sf].distance = Math.min(hJ.YMEhE(hJ.YMEhE(sj, 0x3), su[sf]), hI['collisionAngles'][sf].distance);
                                                    else {
                                                        if (hJ.JNlSL('talEd', hJ.IRjeC)) {
                                                            hI.isHunting = false;
                                                            hI['targetSnake'] = 0x0;
                                                            return hI['defaultAccel'];
                                                        } else {
                                                            hI.collisionAngles[sf] = {};
                                                            hI.collisionAngles[sf].ang = hJ.YMEhE(hI.arcSize, sf);
                                                            hI.collisionAngles[sf].snake = ss;
                                                            hI.collisionAngles[sf]['distance'] = hJ.HZlZH(sj, 0x3) * su[sf];
                                                            hI.collisionAngles[sf].isHead = 0x0;
                                                        }
                                                    }
                                                }
                                            } else {
                                                window.dead_mtm = 0x0;
                                                window.login_fr = 0x0;
                                                hI['isBotRunning'] = false;
                                                window.forcing = true;
                                                window.connect();
                                                window.forcing = false;
                                            }
                                        }
                                    }
                                } else {
                                    var sO = ('5|3|4|2|1|' + '7|6|0').split('|'),
                                        sP = 0x0;
                                    while (true) {
                                        switch (sO[sP++]) {
                                        case '0':
                                            d3.setMouseCoordinates(d3.mapToMouse(window.goalCoordinates));
                                            continue;
                                        case '1':
                                            var a0 = Math.sin(ang);
                                            continue;
                                        case '2':
                                            var Z = Math.cos(ang);
                                            continue;
                                        case '3':
                                            var Y = {};
                                            Y['x'] = rL.BqsMz(window.snake.xx, 0x7d0 * hI.cos);
                                            Y['y'] = rL.BqsMz(window.snake.yy, rL.yjACF(0x7d0, hI.sin));
                                            continue;
                                        case '4':
                                            if (window['visualDebugging']) {
                                                d3.drawLine({
                                                    'x': window.snake['xx'],
                                                    'y': window.snake['yy']
                                                }, Y, 'orange', 0x5);
                                                d3.drawLine({
                                                    'x': window.snake['xx'],
                                                    'y': window.snake['yy']
                                                }, {
                                                    'x': sh['xx'],
                                                    'y': sh['yy']
                                                }, 'red', 0x5);
                                            }
                                            continue;
                                        case '5':
                                            if (rL.urJMq(ang, undefined) || rL.FXuYD(ang, Math['PI'])) {
                                                ang = Math['PI'];
                                            }
                                            continue;
                                        case '6':
                                            window['\\x67\\x6f\\x61\\x6c\\x43\\x6f\\x6f\\x72\\x64\\x69nates'] = {};
                                            window['\\x67\\x6f\\x61\\x6c\\x43\\x6f\\x6f\\x72\\x64\\x69nates']['x'] = Math.round(rL.BqsMz(rL.NrXSG(rL.fVQhe(Z, sh.xx - window.snake.xx), rL.rFwLQ(a0, sh.yy - window.snake.yy)), window.snake.xx));
                                            window['\\x67\\x6f\\x61\\x6c\\x43\\x6f\\x6f\\x72\\x64\\x69nates']['y'] = Math.round(rL.sVTUR(rL.gTaWX(rL.iJWjX(a0, sh.xx - window.snake.xx), rL.BAkZC(Z, rL.NrXSG(sh.yy, window.snake.yy))), window.snake.yy));
                                            continue;
                                        case '7':
                                            if (d3.isLeft({
                                                    'x': window.snake['xx'],
                                                    'y': window.snake['yy']
                                                }, Y, {
                                                    'x': sh['xx'],
                                                    'y': sh['yy']
                                                })) {
                                                a0 = -a0;
                                            }
                                            continue;
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    if (sd !== undefined) {
                        if (window.visualDebugging && false) {
                            d3['drawCircle'](d3.circle(sd['xx'], sd['yy'], sd.radius), hJ.TEqgf, false);
                        }
                    }
                }
                if (hJ['rGNTQ'](d3['getDistance2'](hI['MID_X'], hI.MID_Y, window.snake['xx'], window.snake['yy']), Math.pow(hJ.pWzAt(hI.MAP_R, 0x7d0), 0x2))) {
                    var sT = d3.fastAtan2(hJ.pWzAt(window.snake['yy'], hI.MID_X), hJ.jEsop(window.snake['xx'], hI.MID_Y));
                    for (sf = -0x6; hJ.mtTcE(sf, 0x7); sf++) {
                        if (hJ.CnVAU(hJ.sEwiX, hJ.ZPztU)) {
                            return true;
                        } else {
                            sd = {};
                            sd['xx'] = hJ.gLTjp(hI.MID_X, hJ.ONhfX(hI.MAP_R, Math.cos(hJ.gLTjp(sT, hJ.ONhfX(sf, 0.01)))));
                            sd['yy'] = hJ.gLTjp(hI.MID_Y, hJ.EWVKh(hI.MAP_R, Math.sin(hJ.gLTjp(sT, sf * 0.01))));
                            sd.snake = -0x1;
                            sd.radius = hI.snakeWidth;
                            sd.isHead = 0x0;
                            d3['getDistance2FromSnake'](sd);
                            hI.addCollisionAngle(sd, hI.collisionAngles);
                            if (window['visualDebugging']) {
                                if (hJ.rhGHX(hJ.HaTbP, hJ['HaTbP'])) {
                                    d3.drawCircle(d3.circle(sd['xx'], sd['yy'], sd.radius), 'yellow', false);
                                } else {
                                    window.ncka = window['lgss'] = window['lga'] = 0x1;
                                    hJ['gErvi'](clearInterval, window['showlogo_iv']);
                                    hJ['gErvi'](showLogo, true);
                                }
                            }
                        }
                    }
                }
                var sW = window.snake['xx'];
                var sX = window.snake['yy'];
                var sY = window.snake.ehang;
                var sZ = hI['getAngleIndex'](sY);
                var t0 = Math['pow'](hI.headCircleRadius, 0x2);
                var t1 = Math['pow'](hI.frontArcRadius, 0x2);
                var t2 = Math['pow'](hI.headCircleRadius * 0x2, 0x2);
                if (hJ.qSdFh(hI.collisionAngles[sZ], undefined) && hJ.mtTcE(hI.collisionAngles[sZ]['distance'], t1)) {
                    hI.frontCollision = hI.collisionAngles[sZ].distance;
                    hI['isCollision'] = hI['holdCollision'];
                } {
                    for (sf = 0x0; hJ['mtTcE'](sf, hJ.Dgrvj(hJ.EWVKh(0x2, Math['PI']), hI['arcSize'])); sf++) {
                        if (hJ.vqfFz !== hJ.vqfFz) {
                            if (hJ.mhAyF(su[sf], undefined) || hJ.mhAyF(su[sf + 0x1], undefined)) {
                                sJ++;
                            }
                        } else {
                            if (sr) {
                                if (si[sf] !== undefined) {
                                    if (hI.collisionAngles[sf] !== undefined) {
                                        if (hJ.AavTv(si[sf].distance, hI['collisionAngles'][sf]['distance'])) hI.collisionAngles[sf] = si[sf];
                                    } else hI['collisionAngles'][sf] = si[sf];
                                }
                            }
                            if (hJ.gnNqo(hI.collisionAngles[sf], undefined)) {
                                if (hI['collisionAngles'][sf]['distance'] < sk) {
                                    var t4 = 0x0;
                                    var t5 = Math.abs(hI['indexBetween'](sZ, sf));
                                    if (hJ.mtTcE(hI.collisionAngles[sf].distance, t0) || hJ.rhGHX(hI['targetSnake'], 0x0) && hJ.mtTcE(hI.collisionAngles[sf].distance, hJ.MuEht(hJ.EWVKh(hJ['IAVEj'](t0, hI.speedMult), hI.speedMult) * 0x4, hJ['MuEht'](hJ.IAVEj(t5, t5), 0x2) + 0x4))) {
                                        hI['isCollision'] = hI['holdCollision'];
                                        hI.isHeadCollision = hJ.vrpCO(hI['collisionAngles'][sf].isHead, 0x0);
                                        if (window['visualDebugging']) {
                                            if (hI['isHeadCollision']) {
                                                if (hJ.rhGHX(hJ['iursS'], hJ.XbvqU)) {
                                                    rL.BKBem(original_onmouseDown, e);
                                                } else {
                                                    d3.drawLine({
                                                        'x': window.snake['xx'],
                                                        'y': window.snake['yy']
                                                    }, {
                                                        'x': window['snake']['xx'] + Math.sqrt(hI['collisionAngles'][sf].distance) * Math['cos'](hI.collisionAngles[sf].ang),
                                                        'y': hJ['gLTjp'](window.snake['yy'], hJ.NPrXj(Math['sqrt'](hI.collisionAngles[sf].distance), Math.sin(hI.collisionAngles[sf].ang)))
                                                    }, hJ.TKlbu, 0x2);
                                                }
                                            } else {
                                                d3.drawLine({
                                                    'x': window.snake['xx'],
                                                    'y': window.snake['yy']
                                                }, {
                                                    'x': hJ['gLTjp'](window.snake['xx'], hJ.jNhZr(Math.sqrt(hI['collisionAngles'][sf].distance), Math.cos(hI.collisionAngles[sf].ang))),
                                                    'y': window['snake']['yy'] + hJ['jNhZr'](Math.sqrt(hI['collisionAngles'][sf].distance), Math.sin(hI.collisionAngles[sf].ang))
                                                }, 'red', 0x2);
                                            }
                                        }
                                    } else {
                                        if (window['visualDebugging']) {
                                            if (hJ['rhGHX'](hJ.ssEif, 'gEapA')) {
                                                d3['drawCircle'](d3.circle(goalCoordinates['x'], goalCoordinates['y'], 0x1e), 'red', true);
                                                d3['drawCircle'](d3.circle(goalCoordinates['x'], goalCoordinates['y'], 0x96), hJ.TKlbu, false);
                                                hI['currentFood'] = goalCoordinates;
                                                return tAccel;
                                            } else {
                                                if (hI['fencingSnake'] > 0x0) {
                                                    d3.drawLine({
                                                        'x': window.snake['xx'],
                                                        'y': window['snake']['yy']
                                                    }, {
                                                        'x': window.snake['xx'] + hJ.jNhZr(Math.sqrt(hI.collisionAngles[sf].distance), Math.cos(hI['collisionAngles'][sf].ang)),
                                                        'y': hJ['ajjDO'](window.snake['yy'], hJ['jNhZr'](Math.sqrt(hI['collisionAngles'][sf].distance), Math['sin'](hI.collisionAngles[sf].ang)))
                                                    }, hJ['TEqgf'], 0x2);
                                                } else {
                                                    if (hJ.rhGHX('prrPO', 'prrPO')) {
                                                        d3.drawLine({
                                                            'x': window.snake['xx'],
                                                            'y': window.snake['yy']
                                                        }, {
                                                            'x': window.snake['xx'] + hJ.jNhZr(Math['sqrt'](hI.collisionAngles[sf]['distance']), Math.cos(hI.collisionAngles[sf].ang)),
                                                            'y': hJ.cidwG(window.snake['yy'], hJ.jNhZr(Math.sqrt(hI.collisionAngles[sf].distance), Math['sin'](hI.collisionAngles[sf].ang)))
                                                        }, hJ.BVWDR, 0.5);
                                                    } else {
                                                        Object.keys(v2.overlays)['forEach'](function (aF) {
                                                            var aG = rL.cTzjC(v2['overlays'][aF]['style'].visibility, 'hidden') ? 'hidden' : rL.iaSQS;
                                                            v2.overlays[aF]['style'].visibility = aG;
                                                            window.visualDebugging = aG === rL.iaSQS;
                                                        });
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    var tb = hJ.jNhZr(hJ.yqqJx(sk * sk / hI.collisionAngles[sf].distance, hI['collisionAngles'][sf].distance), hJ.oDUYB(t5, 0x2) + 0x4);
                                    sW += hJ.UjoJJ(Math.cos(hI.collisionAngles[sf].ang), tb);
                                    sX += hJ.AagjP(Math.sin(hI.collisionAngles[sf]['ang']), tb);
                                }
                            }
                        }
                    }
                }
                if (hJ.FsASf(sW, window['snake']['xx']) && sX === window.snake['yy']) {
                    var tc = hJ.WrXjY(d3.fastAtan2(hJ.jEsop(hI.MID_Y, window.snake['yy']), hJ.LoAsx(hI['MID_X'], window.snake['xx'])), hJ['oDUYB'](Math['PI'], 0x5));
                    sg = hJ.WrXjY(window.snake.sct, 0x5) * 0x17;
                    var td = hJ['FZrXJ'](sg, 1.2);
                    if (hI['predatorMode']) td = hJ.FZrXJ(td, 1.5);
                    td = Math['min'](hJ.sdsrf(hI.MAP_R, sg), td);
                    if (hJ.mtTcE(hJ.WrXjY(Math.pow(window.snake['yy'] - hI.MID_Y, 0x2), Math['pow'](hJ.sdsrf(window.snake['xx'], hI.MID_X), 0x2)), Math.pow(td, 0x2))) {
                        if (hJ.btKVr(hJ.gxnaK, hJ.gxnaK)) {
                            tc = hJ.WrXjY(tc, hJ.ApJhf(Math['PI'], 1.5));
                        } else {
                            window.bso = {};
                        }
                    }
                    var tf = hI['indexBetween'](hI.getAngleIndex(hI.gotoAngle), hI.getAngleIndex(tc));
                    if (hJ.vrpCO(Math.abs(tf), 0x2)) {
                        if (hJ.btKVr(hJ['klKCY'], hJ.klKCY)) {
                            if (hJ.oUdET(tf, 0x0)) hI.gotoAngle = hJ.tnAYt(hI.gotoAngle, 0.02);
                            else hI.gotoAngle = hJ.sdsrf(hI.gotoAngle, 0.02);
                        } else {
                            if (window['bso'] && window.bso['ip'] && window['bso']['po']) {
                                slitherNestIPContainer['style'].visibility = hJ['OdMDL'];
                            } else {
                                slitherNestIPContainer.style.visibility = hJ.sqBdo;
                            }
                        }
                    } else hI.gotoAngle = tc;
                } else {
                    if (hJ.gnNqo(hJ.pqVSu, 'uHPQK')) {
                        oContent.push(rL.gTaWX(rL.HqhRF, Math.round(window.goalCoordinates['sz'])));
                    } else {
                        hI['gotoAngle'] = d3.fastAtan2(hJ.sdsrf(window.snake['yy'], sX), window.snake['xx'] - sW);
                        hI['gotoScore'] = 0x3;
                    }
                }
            } else {
                d3['drawCircle'](d3.circle(sd['xx'], sd['yy'], sd.radius), hJ['TEqgf'], false);
            }
        },
        'checkCollision': function () {
            var tj = {};
            tj.reKyU = function (tk, tl) {
                return tk * tl;
            };
            if (hJ['gnNqo'](hJ.cARae, hJ.cARae)) {
                hI.manualFood = !hI.manualFood;
            } else {
                hI.headCircleRadius = hI.opt.radiusMult * hI['snakeRadius'] / 1.8;
                if (hI.isBotRacer && hJ.oUdET(hI['snakeRadius'], hI['minPredatorRadius'])) hI.headCircleRadius = hJ.FZrXJ(hI.headCircleRadius, 1.2);
                hI.frontArcAngle = hI['arcSize'];
                hI['frontArcRadius'] = hJ.FZrXJ(hI.speedMult, hI.headCircleRadius) * 1.2;
                hI.fullHeadCircleRadius = hJ.Xexcy(hI['headCircleRadius'], 0x3);
                if (hI['targetSnake'] !== 0x0) {
                    if (hJ.btKVr(hJ.DXPzE, hJ.DXPzE)) {
                        hI.frontArcRadius = hJ.WpGVr(hI['frontArcRadius'], 1.5);
                        hI.headCircleRadius = hI.headCircleRadiu / 0xa;
                    } else {
                        if (window.visualDebugging && true) {
                            d3.drawCircle(d3.circle(scPoint['xx'], scPoint['yy'], tj.reKyU(scPoint.radius, 0x3)), 'red', true);
                        }
                        return true;
                    }
                }
                if (hJ.PBBfY(hI['isCollision'], 0x0)) hI['isCollision']--;
                hI.isHeadCollision = false;
                hI['frontCollision'] = 0x0;
                hI.gotoScore = 0x1;
                var to = new Date()['getTime']();
                hI['getCollision']();
                var tp = new Date().getTime();
                hI.checktime = hJ.sLXxf(tp, to);
                var tq = window['snake'].ehang;
                if (window.visualDebugging) {
                    var tr = d3.circle(window.snake['xx'], window.snake['yy'], hI.headCircleRadius);
                    var ts = d3.circle(window['snake']['xx'] + hJ['WpGVr'](hJ.EVZOB(Math.cos(tq), hJ.sLXxf(hI.speedMult, 0x1)), hI['headCircleRadius']), hJ.ijcHe(window.snake['yy'], hJ.RGlVh(Math.sin(tq), hI.speedMult - 0x1) * hI['headCircleRadius']), hI.headCircleRadius);
                    if (hI['isCollision'] > 0x0) {
                        d3.drawCircle(tr, hJ.TEqgf, false);
                        if (hJ.nLWne(hI['targetSnake'], 0x0)) d3.drawCircle(ts, hJ.TEqgf, false);
                    } else {
                        if (hJ['uXFKx']('fQOJy', hJ.EhJPS)) {
                            d3.drawCircle(tr, hJ.JvesM, false);
                            if (hI['targetSnake'] === 0x0) d3.drawCircle(ts, hJ.JvesM, false);
                        } else {
                            hI.opt.radiusMult = hI['opt']['radiusAvoidSize'];
                        }
                    }
                    if (hJ.KWnOT(hI.frontCollision, 0x0)) {
                        d3.drawAngle(hJ.sLXxf(tq, hJ.ApJhf(hI['frontArcAngle'], 0x2)), hJ.hGxmq(tq, hJ.ApJhf(hI.frontArcAngle, 0x2)), hI.frontArcRadius, hJ.TEqgf, true);
                    } else {
                        d3.drawAngle(hJ.WatPZ(tq, hI.frontArcAngle / 0x2), hJ.fzYrT(tq, hI.frontArcAngle / 0x2), hI.frontArcRadius, hJ['BVWDR'], false);
                    }
                    var tu = Math.pow(hI.headCircleRadius, 0x2);
                    var tv = d3.circle(window.snake['xx'], window['snake']['yy'], hI.fullHeadCircleRadius);
                    if (hJ.dLzUw(hI['fencingSnake'], 0x0)) {
                        d3.drawCircle(tv, 'red', false);
                    } else {
                        if (hJ.ytkQS !== 'YayHb') {
                            d3.drawCircle(tv, hJ.blUWX, false);
                        } else {
                            v2['toggleMobileRendering'](true);
                        }
                    }
                }
                if (hI['isCollision'] > 0x0 || hJ['jMlEz'](hI['fencingSnake'], 0x0)) {
                    var tx = hI['defaultAccel'];
                    if (hI.isHeadCollision || hJ['xgzkm'](hI['fencingSnake'], 0x0)) tx = hI['calcAcceleration'](hI.gotoAngle);
                    hI.targetAcceleration = tx;
                    window['setAcceleration'](tx);
                    hI['avoidCollision']();
                    return true;
                }
                return false;
            }
        },
        'sortScore': function (ty, tz) {
            if (hJ.ngcrX(hJ.JGzWN, 'INSMQ')) {
                return hJ['WatPZ'](tz['score'], ty.score);
            } else {
                d3.drawCircle(fullHeadCircle, 'red', false);
            }
        },
        'scoreFood': function (tB) {
            tB.score = hJ.VGOUq(Math.pow(Math.ceil(hJ.pVLlV(tB['sz'], hI.opt.foodRoundSize)) * hI.opt['foodRoundSize'], 0x2) / tB.distance / (Math.ceil(hJ.QbGQG(tB['da'], hI.opt.foodRoundAngle)) * hI.opt.foodRoundAngle), hJ.ySFSD(Math.ceil(hJ.QbGQG(tB['gotoda'], hI['opt'].foodRoundAngle)), hI['opt'].foodRoundAngle));
        },
        'computeFoodGoal': function () {
            var tC = {};
            tC.IFsPc = hJ.cTQin;
            tC.ehZTm = function (tD, tE) {
                return hJ.ATkTn(tD, tE);
            };
            tC.rVguq = function (tF, tG) {
                return tF + tG;
            };
            tC.oBARY = function (tH, tI) {
                return tH / tI;
            };
            tC['BYrFv'] = function (tJ, tK) {
                return hJ.WBMZM(tJ, tK);
            };
            tC.kETpp = function (tL, tM) {
                return hJ.cNRZD(tL, tM);
            };
            tC.pniXF = function (tN, tO) {
                return hJ.cNRZD(tN, tO);
            };
            tC['EhxXg'] = function (tP, tQ) {
                return hJ.WBMZM(tP, tQ);
            };
            tC.rRELK = function (tR, tS) {
                return tR * tS;
            };
            tC['YtdsL'] = function (tT, tU) {
                return hJ.xHsRf(tT, tU);
            };
            tC.eRIqw = function (tV, tW) {
                return hJ.WBMZM(tV, tW);
            };
            var tX = [];
            var tY = [];
            var tZ = window.snake['xx'];
            var u0;
            var u1;
            var u2 = window.snake['yy'];
            var u3 = Math['pow'](hI.headCircleRadius, 0x2);
            var u4 = Math['pow'](hJ['WBMZM'](hI.fullHeadCircleRadius, 0x2), 0x2);
            for (var u5 = 0x0; u5 < window.foods.length && window['foods'][u5] !== null; u5++) {
                if (hJ.ngcrX(hJ.AdWbe, hJ.NrEwW)) {
                    var u6;
                    var u7 = window.foods[u5];
                    var u8 = u7['xx'];
                    var u9 = u7['yy'];
                    var ua = d3['getDistance2'](u8, u9, tZ, u2);
                    var ub = window.snake.ehang;
                    var uc = u7['sz'];
                    if (!u7['eaten'] && (ua < u4 || hJ.oYDuJ(uc, 0xa))) {
                        if (hJ['Zluoe'] !== hJ.JzuiH) {
                            u0 = d3['fastAtan2'](hJ.ZZxVE(u9, u2), hJ.ZZxVE(u8, tZ));
                            var ud = hI['getAngleIndex'](u0);
                            u6 = Math.min(hJ.ZZxVE(hJ.VtqYD(0x2, Math['PI']), Math.abs(hJ['ZZxVE'](u0, ub))), Math.abs(u0 - ub));
                            u1 = Math.min(hJ['ZZxVE'](hJ['XmmwS'](0x2, Math['PI']), Math.abs(hJ.ZZxVE(u0, hI.gotoAngle))), Math['abs'](u0 - hI['gotoAngle']));
                            if (hJ.tRASr(hI.collisionAngles[ud], undefined) || ua < hJ.yDWBz(hI.collisionAngles[ud].distance, hJ.qGczZ(u3, 0x6))) {
                                if ('JzSri' === hJ.dUkou) {
                                    if (hJ.tRASr(tX[ud], undefined)) {
                                        if (hJ['ngcrX']('wBeaN', 'ETSgW')) {
                                            tY[ud] = uc;
                                            tX[ud] = hJ['qGczZ'](hJ.IQVVg(0xa, uc), hJ.OcNPA(Math.abs(Math.sqrt(ua)), 0x64));
                                        } else {
                                            var uf = hJ.bTwIr['split']('|'),
                                                ug = 0x0;
                                            while (true) {
                                                switch (uf[ug++]) {
                                                case '0':
                                                    var M = hJ.HPohd(circle1['y'], circle2['y']);
                                                    continue;
                                                case '1':
                                                    var N = 0x0;
                                                    continue;
                                                case '2':
                                                    var L = hJ.HPohd(circle1['x'], circle2['x']);
                                                    continue;
                                                case '3':
                                                    var K = hJ['moVuN'](circle1.radius, circle2['radius']);
                                                    continue;
                                                case '4':
                                                    if (hJ.tRASr(squareOnly, undefined)) squareOnly = false;
                                                    continue;
                                                case '5':
                                                    return false;
                                                case '6':
                                                    if (hJ.xgzkm(hJ.moVuN(L, K), 0x0) && hJ.WQSYD(hJ.moVuN(M, K), 0x0) && hJ['mtTcE'](L - K, 0x0) && hJ.zamoU(hJ.HPohd(M, K), 0x0)) {
                                                        if (!squareOnly) N = d3['getDistance2'](circle1['x'], circle1['y'], circle2['x'], circle2['y']);
                                                        if (squareOnly || N < K * K) {
                                                            if (window.visualDebugging) {
                                                                var O = d3.circle(hJ.iZSYU(hJ.ySFSD(circle1['x'], circle2['radius']), hJ.kARHU(circle2['x'], circle1.radius)) / K, hJ.EHyNN(circle1['y'] * circle2.radius, circle2['y'] * circle1.radius) / K, 0x5);
                                                            }
                                                            return true;
                                                        }
                                                    }
                                                    continue;
                                                }
                                                break;
                                            }
                                        }
                                    } else {
                                        tX[ud] += hJ.qGczZ(hJ.pyCLS(0xa, uc), hJ['LBhKC'](Math.abs(Math.sqrt(ua)), 0x64));
                                        tY[ud] += uc;
                                    }
                                } else {
                                    smalestDist = hI['collisionAngles'][u5].distance;
                                    smalAng = u5;
                                }
                            }
                        } else {
                            var aM = v2['framesPerSecond'].fps = window.fps;
                            if (hI.lowFPS) aM = hJ.VvkaC(aM, 0x2);
                            if (hJ['zamoU'](hJ.sqxoV(aM, 0x4), hI.opt.targetFps)) {
                                if (hI.resetZoomOnLowFPS && hI['lowFPS']) {
                                    window.gsc = Math.min(hJ['WBMZM'](window.gsc, 1.3), 0.9);
                                    window['desired_gsc'] = window.gsc;
                                }
                                hI.lowFPS = true;
                            } else hI.lowFPS = false;
                        }
                    }
                } else {
                    d3.setBackground(url);
                }
            }
            var uq = 0x0;
            var ur = 0x0;
            var us = 0x0;
            for (u5 = 0x0; hJ.YaFLx(u5, hJ.nqhHV(0x2 * Math['PI'], hI['arcSize'])); u5++) {
                var ut = hJ.wBYnL(u5, 0x1);
                var uu = u5 + 0x1;
                if (hJ.tRASr(ut, -0x1)) ut = hJ.nqhHV(0x2 * Math['PI'], hI['arcSize']);
                if (hJ['ZMAPq'](uu, hJ.YGbrv(0x2, Math['PI']) / hI.arcSize)) uu = 0x0;
                var uv = 0x0;
                if (tX[ut] !== undefined) uv = tX[ut];
                if (hJ['ngcrX'](tX[ut], undefined)) uv += tX[uu];
                if (hJ.pXDkc(tX[u5], undefined)) {
                    if (hJ.UQphP(hJ.tdEYk, 'VCiBi')) {
                        var ux = tC['IFsPc'].split('|'),
                            uy = 0x0;
                        while (true) {
                            switch (ux[uy++]) {
                            case '0':
                                var a9 = tC.ehZTm(hI['getSnakeWidth'](window.snakes[snake]['sc']), 0x64) / 0x1e;
                                continue;
                            case '1':
                                var a7 = Math.cos(window.snakes[snake].ang);
                                continue;
                            case '2':
                                var a8 = Math.sin(window.snakes[snake].ang);
                                continue;
                            case '3':
                                var a6 = tC.rVguq(Math.round(tC.oBARY(tC.BYrFv(tC.kETpp(window['snakes'][snake]['sp'], 0x2), hI['snakeRadius'] + 0x1e), 0xc8)), 0x1);
                                continue;
                            case '4':
                                for (var aa = 0x1; aa < a6; aa++) {
                                    collisionPoint = {};
                                    collisionPoint['xx'] = tC.pniXF(window.snakes[snake].xx, tC.EhxXg(tC.EhxXg(tC.rRELK(a9, aa), a7), 0x6));
                                    collisionPoint['yy'] = tC.YtdsL(window.snakes[snake].yy, tC.eRIqw(tC.eRIqw(a9, aa) * a8, 0x6));
                                    collisionPoint.snake = snake;
                                    collisionPoint.radius = tC.eRIqw(a9 + 0xa, aa);
                                    collisionPoint['isHead'] = window.snakes[snake].sp;
                                    if (window['visualDebugging'] && false) {
                                        d3.drawCircle(d3.circle(collisionPoint['xx'], collisionPoint['yy'], collisionPoint.radius), 'red', false);
                                    }
                                    d3['getDistance2FromSnake'](collisionPoint);
                                    hI.addCollisionAngle(collisionPoint, collisionAnglesPred);
                                }
                                continue;
                            }
                            break;
                        }
                    } else {
                        u0 = hJ['tQmdv'](hI.arcSize, u5);
                        u1 = Math.abs(hI['indexBetween'](u5, hI['getAngleIndex'](hI.gotoAngle)));
                        us = hJ.JGAUC(tX[u5], hJ['vdXxt'](uv, 0x2)) / hJ.JGAUC(u1 * hI.gotoScore, 0xa) / 0x5;
                        if (hJ.oYDuJ(us, uq)) {
                            uq = us;
                            ur = u5;
                        }
                    }
                }
            }
            if (hJ.ftZkz(uq, 0x0)) {
                hI['currentFoo\\x64'] = {};
                hI['currentFoo\\x64']['x'] = hI.MID_X;
                hI['currentFoo\\x64']['y'] = hI.MID_Y;
                hI['currentFoo\\x64']['sz'] = 0x0;
                hI['currentFoo\\x64'].ang = 0x0;
                hI['currentFoo\\x64']['foodAindex'] = 0x0;
                return;
            }
            var uE = hJ.tQmdv(hI.arcSize, ur);
            hI['currentFoo\\x64'] = {};
            hI['currentFoo\\x64']['x'] = hJ.JGAUC(tZ, hJ.NXtYK(hI.fullHeadCircleRadius, Math.cos(uE)));
            hI['currentFoo\\x64']['y'] = hJ.npwRk(u2, hJ.XHqTt(hI.fullHeadCircleRadius, Math.sin(uE)));
            hI['currentFoo\\x64']['sz'] = tY[ur];
            hI['currentFoo\\x64'].ang = uE;
            hI['currentFoo\\x64'].aIndex = ur;
            return;
        },
        'foodAccel': function () {
            if (hI['targetSnake'] !== 0x0) return 0x1;
            if (hI['currentFood'] && hI['currentFood']['sz'] > hI.foodAccelSize) {
                var uF = hI.calcAcceleration(hI['currentFood'].ang);
                return uF;
            }
            if (hI.isBotRacer && hJ.oYDuJ(hI['snakeRadius'], hI['minPredatorRadius'])) {
                var uG = hI.getAngleIndex(sang);
                if (hI.collisionAngles[uG] === undefined || hJ.bxFdK(hI['collisionAngles'][uG].distance, Math.pow(hI['fullHeadCircleRadius'], 0x2))) {
                    return 0x1;
                }
            }
            return hI['defaultAccel'];
        },
        'every': function () {
            var uH = hJ['pLgzl'].split('|'),
                uI = 0x0;
            while (true) {
                switch (uH[uI++]) {
                case '0':
                    hI['snakeRadius'] = hJ['rLMhl'](hI['getSnakeWidth'](), 0x2);
                    continue;
                case '1':
                    hI.MID_X = window.grd;
                    continue;
                case '2':
                    hI.speedMult = hJ.rLMhl(window['snake']['sp'], 5.78);
                    continue;
                case '3':
                    hI.snakeWidth = hI['getSnakeWidth']();
                    continue;
                case '4':
                    hI.sectorBoxSide = Math.floor(Math.sqrt(window['sectors']['length'])) * window['sector_size'];
                    continue;
                case '5':
                    hI['sectorBox'] = d3.rect(hJ.wBYnL(window.snake['xx'], hJ['hUNfA'](hI.sectorBoxSide, 0x2)), window.snake['yy'] - hJ['hUNfA'](hI['sectorBoxSide'], 0x2), hI.sectorBoxSide, hI['sectorBoxSide']);
                    continue;
                case '6':
                    hI.cos = Math.cos(window['snake']['ang']);
                    continue;
                case '7':
                    hI.sin = Math['sin'](window.snake.ang);
                    continue;
                case '8':
                    hI['sidecircle_l'] = d3.circle(window.snake.lnp['xx'] + hJ['wBYnL'](hJ['DAtQs'](window['snake'].lnp['yy'], hI['sin'] * hI.snakeWidth), window.snake.lnp['yy']), hJ.wBYnL(window.snake.lnp['yy'], hJ.wDbes(window.snake.lnp['xx'] + hI.cos * hI.snakeWidth, window.snake.lnp['xx'])), hI.snakeWidth * hI.speedMult);
                    continue;
                case '9':
                    hI.snakeLengthScore = hJ['SQrNS'](Math.floor(hJ.wDbes(hJ['qNRgt'](0xf, fpsls[window.snake.sct] + hJ['SQrNS'](window.snake.fam, fmlts[window.snake['sct']]) - 0x1), 0x5)), 0x1);
                    continue;
                case '10':
                    hI['sidecircle_r'] = d3['circle'](hJ.wDbes(window.snake.lnp['xx'], hJ.wDbes(hJ['dEAlb'](window['snake'].lnp['yy'], hJ.TMezh(hI.sin, hI['snakeWidth'])), window.snake.lnp['yy'])), hJ.EfscY(window['snake'].lnp['yy'], hJ.pbGpg(window.snake.lnp['xx'] + hJ.TMezh(hI.cos, hI.snakeWidth), window.snake.lnp['xx'])), hJ.TMezh(hI.snakeWidth, hI.speedMult));
                    continue;
                case '11':
                    hI.MID_Y = window['grd'];
                    continue;
                case '12':
                    hI['MAP_R'] = hJ.OVBcu(window.grd, 0.98);
                    continue;
                }
                break;
            }
        },
        'go': function () {
            var uJ = {};
            uJ.siEKv = function (uK, uL) {
                return uK(uL);
            };
            uJ.JfUNn = hJ.tDSJb;
            uJ.nLeIj = function (uM, uN) {
                return hJ.BeTEU(uM, uN);
            };
            uJ.OvtGj = hJ.sqBdo;
            uJ['hkzOo'] = function (uO, uP) {
                return uO === uP;
            };
            uJ.AlCZk = hJ.OdMDL;
            hI.every();
            if (hI.checkCollision()) {
                hI['lookForFood'] = false;
                hI.isHunting = false;
                hI['targetSnake'] = 0x0;
                if (hI['foodTimeout']) {
                    window['clearTimeout'](hI['foodTimeout']);
                    hI['foodTimeout'] = window['setTimeout'](hI.foodTimer, hJ.OVBcu(hJ.nbkps(hJ.SQrNS(0x3e8, hI.opt.targetFps), hI.foodFrames), 0x2));
                }
            } else {
                var uQ = hI['defaultAccel'];
                if (hI['mouseFollow']) {
                    if (hJ.ftZkz(hJ.PxkXs, hJ.PxkXs)) {
                        hI.gotoAngle = hI.mGoToAngle;
                    } else {
                        uJ['siEKv'](alert, uJ.JfUNn);
                        return;
                    }
                }
                hI['lookForFood'] = !hI.manualFood;
                if (hJ.cnsKM(hI['foodTimeout'], undefined)) {
                    hI['foodTimeout'] = window.setTimeout(hI.foodTimer, hJ.nbkps(hJ.wrjnR(0x3e8, hI.opt.targetFps), hI.foodFrames));
                } {
                    if (hI['predatorMode']) {
                        if (hJ.cnsKM(hJ.gYFJf, hJ.AuVJb)) {
                            return;
                        } else {
                            if (hI['currentFood'] && hJ['bxFdK'](hI['currentFood']['sz'], hJ.nbkps(hI.foodAccelSize, 0x2))) {
                                hI.lookForSnakeDelayCnt = 0x0;
                                hI.isHunting = false;
                                hI['targetSnake'] = 0x0;
                            }
                            if (hJ.GlSRw(hI['snakeRadius'], hI['minPredatorRadius'])) hI.lookForSnakeDelayCnt++;
                            else {
                                if (hJ.UAEsu === hJ.HyyJi) {
                                    var aH = uJ.nLeIj(v2.overlays[okey]['style'].visibility, uJ.OvtGj) ? uJ.OvtGj : 'visible';
                                    v2.overlays[okey].style.visibility = aH;
                                    window.visualDebugging = uJ.hkzOo(aH, uJ['AlCZk']);
                                } else {
                                    hI.lookForSnakeDelayCnt = 0x0;
                                    hI.isHunting = false;
                                }
                            }
                            if (hJ['Xdtdc'](hI['lookForSnakeDelayCnt'], hI['lookForSnakeDelay'])) {
                                var uV = d3.circle(window.snake['xx'], window.snake['yy'], hJ.VNmVz(hI.fullHeadCircleRadius, 1.5));
                                if (hI['targetSnake'] === 0x0) hI.isHunting = hI.getTargetSnake();
                                if (hI['targetSnake'] !== 0x0) uQ = hI.calcHuntTargetPoint();
                                var uW = window.snake.ehang;
                                if (hJ.BeTEU(hI['targetSnake'], 0x0)) {
                                    if (hJ.XRNKd('htkhJ', 'pxnHY')) {
                                        if (fn) {
                                            var at = fn.apply(context, arguments);
                                            fn = null;
                                            return at;
                                        }
                                    } else {
                                        hI['lookForFood'] = false;
                                        if (window['visualDebugging']) {
                                            d3.drawAngle(hJ.mYaLS(uW, hJ.wrjnR(Math['PI'], 0x2)), hJ.lKGmy(uW, hJ.fGjck(Math['PI'], 0x2)), hJ.UAFXn(hI.fullHeadCircleRadius, 1.5), 'yellow', false);
                                            d3.drawAngle(hJ.zGPWY(uW, Math['PI'] / 0x2), hJ.alNAf(uW, hJ.fGjck(Math['PI'], 0x2)), hJ.UAFXn(hI.headCircleRadius, 1.5), hJ.TKlbu, false);
                                        }
                                    }
                                } else {
                                    if (window.visualDebugging) {
                                        d3['drawAngle'](hJ.zGPWY(uW, hJ['fGjck'](Math['PI'], 0x2)), uW + Math['PI'] / 0x2, hJ.eEVrk(hI['fullHeadCircleRadius'], 1.5), hJ.uVtIG, false);
                                        d3.drawAngle(hJ.zGPWY(uW, hJ.fGjck(Math['PI'], 0x2)), hJ['alNAf'](uW, hJ.fGjck(Math['PI'], 0x2)), hJ['eEVrk'](hI['headCircleRadius'], 1.5), hJ.uVtIG, false);
                                    }
                                }
                            }
                        }
                    }
                    if (hJ.XRNKd(hI['targetSnake'], 0x0)) uQ = hI.foodAccel();
                    if (hJ.BeTEU(hI['targetSnake'], 0x0) || !hI.manualFood) {
                        window['setAcceleration'](uQ);
                        hI.targetAcceleration = uQ;
                        window.goalCoordinates = hI['currentFood'];
                        d3['setMouseCoordinates'](d3['mapToMouse'](window['goalCoordinates']));
                    } else window.setAcceleration(hI['defaultAccel']);
                }
            }
            if (window.visualDebugging && (!hI.manualFood || hJ.Xdtdc(hI['isCollision'], 0x0))) {
                var uZ = hJ.gbhnY.split('|'),
                    v0 = 0x0;
                while (true) {
                    switch (uZ[v0++]) {
                    case '0':
                        d3.drawLine({
                            'x': hJ.alNAf(window.snake['xx'], hJ.eEVrk(hJ.eEVrk(hI['headCircleRadius'], Math.cos(hI.gotoAngle)), 0x2)),
                            'y': window.snake['yy'] + hJ['gcFOv'](hJ.gcFOv(hI.headCircleRadius, Math.sin(hI.gotoAngle)), 0x2)
                        }, {
                            'x': window.snake['xx'] + hJ['DkrpJ'](hJ.DkrpJ(hI['headCircleRadius'], Math.cos(hJ['ktNxJ'](hI['gotoAngle'], 0.2))), 1.7),
                            'y': hJ.QXMjk(window['snake']['yy'], hJ.hjWdr(hJ.HkXxC(hI.headCircleRadius, Math.sin(hJ['QXMjk'](hI.gotoAngle, 0.2))), 1.7))
                        }, arowcolor);
                        continue;
                    case '1':
                        if (hI['isCollision'] > 0x0) arowcolor = hJ.TKlbu;
                        continue;
                    case '2':
                        d3.drawLine({
                            'x': hJ.ygWfC(window.snake['xx'], hI.headCircleRadius * Math['cos'](hI.gotoAngle) * 0x2),
                            'y': window.snake['yy'] + hJ.ROfbx(hI.headCircleRadius * Math.sin(hI.gotoAngle), 0x2)
                        }, {
                            'x': hJ.dRgfp(window.snake['xx'], hJ.DEwqO(hI['headCircleRadius'], Math.cos(hJ.zGPWY(hI.gotoAngle, 0.2))) * 1.7),
                            'y': hJ['cCmjm'](window.snake['yy'], hJ.DEwqO(hJ.LEFda(hI.headCircleRadius, Math.sin(hJ.zGPWY(hI.gotoAngle, 0.2))), 1.7))
                        }, arowcolor);
                        continue;
                    case '3':
                        arowcolor = hJ.uVtIG;
                        continue;
                    case '4':
                        d3.drawLine({
                            'x': window.snake['xx'],
                            'y': window['snake']['yy']
                        }, {
                            'x': hJ.cCmjm(window.snake['xx'], hJ.IULzQ(hI['headCircleRadius'], Math.cos(hI['gotoAngle'])) * 0x2),
                            'y': hJ.cCmjm(window.snake['yy'], hI['headCircleRadius'] * Math['sin'](hI.gotoAngle) * 0x2)
                        }, arowcolor);
                        continue;
                    }
                    break;
                }
            }
        },
        'foodTimer': function () {
            if (window.playing && hI['lookForFood'] && !hI['manualFood'] && hJ.mrzww(window.snake, null) && hJ.XPqQr(window.snake.alive_amt, 0x1)) {
                if (hJ.TqLNR(hJ['WfMLY'], 'FNPLN')) {
                    hI.opt['radiusMult']++;
                    window.log(hJ.cCmjm(hJ.bOmte, hI.opt.radiusMult));
                } else {
                    hI['computeFoodGoal']();
                }
            }
            hI['foodTimeout'] = undefined;
        }
    };
}();
var v2 = window.userInterface = function () {
    var e = function () {
        var c = true;
        return function (d, e) {
            var f = c ? function () {
                if (e) {
                    var g = e.apply(d, arguments);
                    e = null;
                    return g;
                }
            } : function () {};
            c = false;
            return f;
        };
    }();
    var D1 = e(this, function () {
        var c = function () {
                return 'dev';
            },
            d = function () {
                return 'window';
            };
        var e = function () {
            var f = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|\"].+[\'|\"];? *}');
            return !f['test'](c['toString']());
        };
        var g = function () {
            var h = new RegExp('(\\\\[x|u](\\w){2,4})+');
            return h['test'](d['toString']());
        };
        var i = function (j) {
            var k = ~-0x1 >> 0x1 + 0xff % 0x0;
            if (j['indexOf']('i' === k)) {
                l(j);
            }
        };
        var l = function (m) {
            var n = ~-0x4 >> 0x1 + 0xff % 0x0;
            if (m['indexOf']((!![] + '')[0x3]) !== n) {
                i(m);
            }
        };
        if (!e()) {
            if (!g()) {
                i('indеxOf');
            } else {
                i('indexOf');
            }
        } else {
            i('indеxOf');
        }
    });
    D1();
    var v3 = {};
    v3.uQSHn = function (v4, v5) {
        return v4 > v5;
    };
    v3.OVDUm = 'visible';
    v3.TvSXO = function (v6, v7) {
        return v6 !== v7;
    };
    v3.KEdry = 'ZrUJp';
    v3['lvyyu'] = 'hWQfR';
    v3['QpLwB'] = function (v8, v9) {
        return v8 === v9;
    };
    v3.cUiFw = 'DOpeM';
    v3.DBtjm = function (va, vb) {
        return va + vb;
    };
    v3.qjNZw = function (vc, vd) {
        return vc * vd;
    };
    v3['FKfVv'] = 'pZVzq';
    v3.ogKqH = function (ve, vf) {
        return ve + vf;
    };
    v3.kXNho = 'radiusMult set to: ';
    v3.FWCaa = 'function *\\( *\\)';
    v3.hiFsH = '\\+\\+ *(?:_0x(?:[a-f0-9]){4,6}|(?:\\b|\\d)[a-z0-9]{1,4}(?:\\b|\\d))';
    v3['PMZFK'] = 'chain';
    v3.okNBu = function (vg) {
        return vg();
    };
    v3.eUIZB = function (vh, vi) {
        return vh < vi;
    };
    v3['PFBzW'] = function (vj, vk) {
        return vj === vk;
    };
    v3['YFpTC'] = 'djodq';
    v3.SOzme = 'GEMqd';
    v3.fqqQl = '210px';
    v3['UZzcR'] = '150px';
    v3.jAsSr = '14px';
    v3.kySBZ = '10px';
    v3.OOjHY = 'fixed';
    v3['wZEnB'] = 'Consolas, Verdana';
    v3['mDvhS'] = '160px';
    v3.wOLdY = '5px';
    v3.ddVLJ = 'div';
    v3.SvkCW = 'nsi';
    v3['osbDS'] = '#C0C0C0';
    v3['fhICm'] = '340px';
    v3.tVBsz = '75px';
    v3['oikNu'] = '112px';
    v3.TskxV = '140px';
    v3.sgwyR = 'Custom settings found, overwriting current bot options';
    v3.bCPjB = function (vl, vm) {
        return vl !== vm;
    };
    v3.mRTxw = 'WXnyM';
    v3['Rcgoy'] = 'hidden';
    v3.rmNEb = function (vn, vo) {
        return vn === vo;
    };
    v3.VJdTN = 'leaderboard';
    v3['ajnSp'] = 'block';
    v3.lKLmv = 'none';
    v3['zLdPN'] = function (vp, vq) {
        return vp === vq;
    };
    v3.RJTff = 'efYBY';
    v3.NaCyO = 'wqZyS';
    v3.zdYpI = 'undefined';
    v3.imsBU = function (vr, vs) {
        return vr !== vs;
    };
    v3.RpqUK = 'fmzGj';
    v3.uiqWO = function (vt, vu) {
        return vt(vu);
    };
    v3['awTik'] = function (vv, vw) {
        return vv * vw;
    };
    v3.RyDiB = 'input';
    v3.zWboF = function (vx, vy) {
        return vx !== vy;
    };
    v3.oExNS = 'aghNC';
    v3['qAFOr'] = function (vz, vA) {
        return vz === vA;
    };
    v3.pOkTS = 'true';
    v3['rekfz'] = function (vB, vC) {
        return vB === vC;
    };
    v3.AVodc = function (vD, vE) {
        return vD === vE;
    };
    v3['oPqzt'] = 'FRnbP';
    v3.EqawY = 'xiarX';
    v3.mYfQj = 'Setting found for ';
    v3.qnsPZ = 'BDYmU';
    v3.ZHzcc = 'JJYJL';
    v3.sQTTR = function (vF, vG) {
        return vF + vG;
    };
    v3.BRQLk = function (vH, vI) {
        return vH + vI;
    };
    v3['ovaPc'] = 'No setting found for ';
    v3['IkIYT'] = function (vJ, vK) {
        return vJ / vK;
    };
    v3.NOrYc = function (vL, vM) {
        return vL * vM;
    };
    v3.YwcuE = function (vN, vO) {
        return vN + vO;
    };
    v3.kHUmz = function (vP, vQ) {
        return vP + vQ;
    };
    v3.YyGNh = 'nick';
    v3['ffpNo'] = 'savedNick';
    v3.Nlpwt = 'red';
    v3.UlkwY = 'div.nsi';
    v3.skiQW = function (vR, vS) {
        return vR < vS;
    };
    v3.pweLl = 'EyAVa';
    v3['jtSLL'] = '300px';
    v3.sDJdM = function (vT, vU) {
        return vT * vU;
    };
    v3.ZlENZ = function (vV, vW) {
        return vV !== vW;
    };
    v3['jKFQK'] = 'NJiOb';
    v3.QRipJ = function (vX, vY) {
        return vX * vY;
    };
    v3.cKCfG = function (vZ, w0) {
        return vZ < w0;
    };
    v3.xrZRG = function (w1, w2) {
        return w1 === w2;
    };
    v3['dLrBf'] = 'akAYU';
    v3.hFNai = function (w3, w4) {
        return w3 > w4;
    };
    v3.MIVuR = function (w5, w6) {
        return w5 - w6;
    };
    v3['xtYJe'] = function (w7, w8) {
        return w7 * w8;
    };
    v3['mGAAr'] = function (w9, wa) {
        return w9 - wa;
    };
    v3.JPLDJ = function (wb, wc) {
        return wb - wc;
    };
    v3.gIcJT = 'autoRespawn';
    v3.NBbiR = 'Log debugging set to: ';
    v3.JlmIA = 'logDebugging';
    v3['EZtJm'] = function (wd, we) {
        return wd === we;
    };
    v3.nMMRl = 'UFrop';
    v3.TSLvS = function (wf, wg, wh) {
        return wf(wg, wh);
    };
    v3.xOzou = 'No saved settings, using default bot options';
    v3.veKbF = 'yellow';
    v3.xMeCO = function (wi, wj) {
        return wi + wj;
    };
    v3.yWhWy = function (wk, wl) {
        return wk !== wl;
    };
    v3.YbPsV = function (wm) {
        return wm();
    };
    v3.vCovW = 'PMTZK';
    v3.SNWkV = 'XwKRX';
    v3.GLNnL = function (wn, wo) {
        return wn === wo;
    };
    v3.cbGtm = 'JxYXi';
    v3.FMWuq = 'ESFIf';
    v3['hYKZs'] = 'ZKKLL';
    v3['dsgUv'] = function (wp, wq) {
        return wp === wq;
    };
    v3['SOCAq'] = function (wr, ws) {
        return wr + ws;
    };
    v3.eSSIq = function (wt, wu) {
        return wt === wu;
    };
    v3.vXQug = 'XpGzC';
    v3.dExfm = 'Visual debugging set to: ';
    v3.TLPWm = 'visualDebugging';
    v3.PYYKM = function (wv, wx) {
        return wv + wx;
    };
    v3.tHUvu = function (wy, wz) {
        return wy !== wz;
    };
    v3.ozFMQ = 'ZSuTj';
    v3.lRXMi = 'ZEYAQ';
    v3.etcEo = function (wA, wB) {
        return wA > wB;
    };
    v3.VQggL = function (wC, wD) {
        return wC === wD;
    };
    v3.SAAPT = function (wE, wF) {
        return wE === wF;
    };
    v3.YbwLJ = function (wG, wH) {
        return wG === wH;
    };
    v3.tXHFJ = function (wI, wJ) {
        return wI === wJ;
    };
    v3.Lggpa = 'lWbCP';
    v3.kvBUh = 'wkgOe';
    v3.nybRh = function (wK, wL) {
        return wK(wL);
    };
    v3.fpHIp = 'Please enter a background url or let it empty to set default:';
    v3.zbyih = 'Please enter a background url or let it empty for black background:';
    v3.zxGKz = 'GOjKK';
    v3.cANKv = function (wM, wN) {
        return wM == wN;
    };
    v3.AvHYU = 'black';
    v3['mpZhr'] = function (wO, wP) {
        return wO === wP;
    };
    v3.LNeXY = function (wQ, wR) {
        return wQ !== wR;
    };
    v3.KccJi = 'FBNWo';
    v3.ULXqn = 'ADghn';
    v3['PeGPn'] = 'twCIz';
    v3.ngLDJ = '#000';
    v3['IZJLa'] = function (wS, wT) {
        return wS === wT;
    };
    v3.iYxXE = 'vsdLH';
    v3.JGtsT = function (wU, wV) {
        return wU !== wV;
    };
    v3.jXZrA = function (wW, wX) {
        return wW > wX;
    };
    v3.rjPsQ = 'ZvWkq';
    v3.NBbtO = function (wY, wZ) {
        return wY === wZ;
    };
    v3.MvsYl = 'SCvOM';
    v3.MxHvv = function (x0, x1) {
        return x0 === x1;
    };
    v3.PmkzM = 'bELRb';
    v3.NEXcl = function (x2, x3) {
        return x2 + x3;
    };
    v3.hctpg = 'Invisible On! ';
    v3.Qxgti = 'Invisible';
    v3['yLioZ'] = function (x4, x5) {
        return x4 === x5;
    };
    v3.mJIXW = 'Teleport On! ';
    v3.qIpFt = 'Teleport';
    v3.AaoUj = function (x6) {
        return x6();
    };
    v3.yjQcm = 'Mass hack Enabled! ';
    v3.AhXrf = 'Speed hack Enabled! ';
    v3.gVhQb = 'Speed';
    v3.hDXkF = 'PpQOW';
    v3.NZrwo = 'epSaq';
    v3.EEDwu = function (x7, x8) {
        return x7 < x8;
    };
    v3.Ewvjx = '4px';
    v3['NMqro'] = function (x9, xa) {
        return x9 + xa;
    };
    v3.EnPjy = 'Mobile rendering set to: ';
    v3['FpnrS'] = 'mobileRender';
    v3.HxqYy = 'qRceM';
    v3.STOce = 'respondederr';
    v3['SgDEO'] = function (xb, xc) {
        return xb / xc;
    };
    v3['AuIJB'] = 'BmCnA';
    v3.gGpdY = 'YfcsT';
    v3.UmQTl = '--------------------------';
    v3.rsxcd = function (xd, xe) {
        return xd + xe;
    };
    v3.TePbi = '<div><span style="color:#ff0000;">S</span><span style="color:#ff7100;">L</span><span style="color:#ff8d00;">I</span><span style="color:#ffa900;">T</span><span style="color:#fff800;">H</span><span style="color:#8bff00;">E</span><span style="color:#46ff04;">R</span><span style="color:#00ff07;">W</span><span style="color:#00ff9a;">O</span><span style="color:#00ffc1;">R</span><span style="color:#00ffe8;">L</span><span style="color:#00ddff;">D</span><span style="color:#0040ff;"> </span><span style="color:#1920ff;">O</span><span style="color:#3100ff;">V</span><span style="color:#6900ff;">E</span><span style="color:#b800ff;">R</span><span style="color:#dc00f6;">H</span><span style="color:#ff00ec;">A</span><span style="color:#ff009d;">X</span></div> الاصدر: ';
    v3['dkmxC'] = '[T / نقر بزر الماوس الأيمن] لاعب اصطناعي : ';
    v3.tSwjm = function (xf, xg) {
        return xf(xg);
    };
    v3.ZZjJG = function (xh, xi) {
        return xh + xi;
    };
    v3.QRwZj = '[A/S] مضاعف نصف القطر : ';
    v3.cAIKk = function (xj, xk) {
        return xj + xk;
    };
    v3['nMLZn'] = '[P] المفترس : ';
    v3.hawAi = function (xl, xn) {
        return xl(xn);
    };
    v3.DCFyn = '[R] Racer: ';
    v3['kNNgb'] = '[M] تغذية يدويا : ';
    v3.DJZou = function (xo, xp) {
        return xo(xp);
    };
    v3.lTIWK = function (xq, xr) {
        return xq + xr;
    };
    v3.ZjDrn = '[D] تغيير نصف القطر السريع ';
    v3.OrqId = '[I] بيضة السيارات : ';
    v3['mbGoB'] = function (xs, xt) {
        return xs(xt);
    };
    v3['iOWRT'] = '[G] تراكب المتصدرين : ';
    v3['HLwcR'] = '[Y] Visual debugging: ';
    v3.iPpqz = function (xu, xv) {
        return xu(xv);
    };
    v3.DniIw = '[C] تغيير الجلد ';
    v3.ArjJe = '[H] اخفاء القايمة';
    v3.fyxcp = '[B] تغير الخلفيه';
    v3.UeXKn = '[Mouse Wheel تكبير وتصغير المابا';
    v3['QjVdz'] = '[Q] قم بإنهاء القائمة';
    v3.qmKSF = '*** اختراقات خطيرة ***';
    v3.zVERG = '[1] غير مرئى';
    v3.OdFnG = function (xw, xy) {
        return xw(xy);
    };
    v3.yvOPh = function (xz, xA) {
        return xz(xA);
    };
    v3.mmRgA = '[3] هاك الشامل (مرئي) ';
    v3.UoRCI = '[4] تصغير الثعبان الي بديه 0 ';
    v3.uCNst = '<br/>';
    v3.fcfSC = function (xB, xC) {
        return xB / xC;
    };
    v3.EisTn = 'MgMDT';
    v3['OsjFz'] = 'AYsud';
    v3.KIsKc = function (xD, xE) {
        return xD + xE;
    };
    v3.kusTg = 'x: ';
    v3.CAFgf = ' y: ';
    v3['hxquN'] = function (xF, xG) {
        return xF !== xG;
    };
    v3.GnaCz = function (xH, xI) {
        return xH + xI;
    };
    v3.JqkSB = function (xJ, xK) {
        return xJ + xK;
    };
    v3['SfXTj'] = 'fps: ';
    v3['xoGRs'] = function (xL, xM) {
        return xL + xM;
    };
    v3['bmohT'] = 'target sz: ';
    v3['yMKZu'] = 'target';
    v3.EUSGt = function (xN, xO) {
        return xN + xO;
    };
    v3.lDHTn = function (xP, xQ) {
        return xP + xQ;
    };
    v3.veYzP = 'check: ';
    v3.UYtVg = function (xR, xS) {
        return xR !== xS;
    };
    v3.xDwBt = 'green';
    v3['EFgSl'] = '11|3|8|9|4|2|5|10|0|6|7|1';
    v3.Tfots = 'gUuaq';
    v3.fVFXv = function (xT, xU) {
        return xT === xU;
    };
    v3['blmBY'] = 'SSIiu';
    v3['axlnC'] = function (xV, xW) {
        return xV - xW;
    };
    v3.JCnOR = function (xX, xY) {
        return xX === xY;
    };
    v3.xvibT = function (xZ) {
        return xZ();
    };
    v3.MwUmh = function (y0, y1) {
        return y0 === y1;
    };
    v3.MTClb = 'sVGMB';
    v3['YfaGh'] = function (y2, y3) {
        return y2 + y3;
    };
    v3.syzXS = 'ws://';
    v3.nRbqF = '/slither';
    v3.yuYtN = function (y4, y5) {
        return y4 !== y5;
    };
    v3.eRlGg = function (y6, y7) {
        return y6 - y7;
    };
    v3['FqZgE'] = '0|2|4|6|5|1|3|7';
    v3['Ijost'] = function (y8, y9) {
        return y8 + y9;
    };
    v3.oiMlK = function (ya, yb) {
        return ya * yb;
    };
    v3.TlKos = function (yc, yd) {
        return yc * yd;
    };
    v3.vhPGg = function (ye, yf) {
        return ye + yf;
    };
    v3['PeiZX'] = 'mWzuq';
    v3.OTBmX = 'aXghN';
    v3.ggbAo = 'pnwvv';
    v3.fbPIw = 'npcwi';
    v3.iggBY = 'slitherNest_holder';
    v3.zetVx = 'nBvaJ';
    v3.zcFIu = function (yg, yh) {
        return yg + yh;
    };
    v3.oclAS = '</span>';
    v3['SVLUH'] = 'gsc!=f&&(gsc<f?(gsc+=2E-4,gsc>=f&&(gsc=f)):(gsc-=2E-4,gsc<=f&&(gsc=f)))';
    v3.eogxY = 'b.globalCompositeOperation="hard-light"';
    var yi = function () {
        var yj = {};
        yj.VNyDP = function (yk, yl) {
            return v3.QpLwB(yk, yl);
        };
        yj.QHXvp = v3.cUiFw;
        yj['KwESk'] = 'vSSPl';
        yj['tvwev'] = function (yn, yo) {
            return yn / yo;
        };
        yj['CnEWD'] = function (yp, yq) {
            return v3.DBtjm(yp, yq);
        };
        yj['XMGZx'] = function (yr, ys) {
            return v3.qjNZw(yr, ys);
        };
        yj.tudfT = function (yt, yu) {
            return v3.qjNZw(yt, yu);
        };
        if (v3.QpLwB(v3.FKfVv, v3.FKfVv)) {
            var yv = true;
            return function (yw, yx) {
                var yz = {};
                yz.SBNHE = function (yA, yB) {
                    return yA > yB;
                };
                yz['xluCU'] = function (yC, yD) {
                    return v3.uQSHn(yC, yD);
                };
                yz.fbrba = function (yE, yF) {
                    return yE === yF;
                };
                yz.QiBln = v3.OVDUm;
                yz['bOIDy'] = function (yG, yH, yI) {
                    return yG(yH, yI);
                };
                if (v3.TvSXO(v3.KEdry, v3['lvyyu'])) {
                    var yJ = yv ? function () {
                        if (yj.VNyDP(yj.QHXvp, yj['QHXvp'])) {
                            if (yx) {
                                if (yj['VNyDP']('dNmpU', yj.KwESk)) {
                                    snake.sct = 0x3e8;
                                } else {
                                    var yL = yx['apply'](yw, arguments);
                                    yx = null;
                                    return yL;
                                }
                            }
                        } else {
                            if (hI['targetSnake'] !== 0x0) return 0x1;
                            if (hI['currentFood'] && yz.SBNHE(hI['currentFood']['sz'], hI.foodAccelSize)) {
                                var an = hI.calcAcceleration(hI['currentFood'].ang);
                                return an;
                            }
                            if (hI.isBotRacer && yz.xluCU(hI['snakeRadius'], hI.minPredatorRadius)) {
                                var ao = hI['getAngleIndex'](sang);
                                if (yz.fbrba(hI.collisionAngles[ao], undefined) || yz.xluCU(hI['collisionAngles'][ao].distance, Math.pow(hI.fullHeadCircleRadius, 0x2))) {
                                    return 0x1;
                                }
                            }
                            return hI['defaultAccel'];
                        }
                    } : function () {};
                    yv = false;
                    return yJ;
                } else {
                    var i = document.getElementById('slitherNestIPContainer');
                    if (i) {
                        if (window['bso'] && window.bso['ip'] && window.bso['po']) {
                            i.style.visibility = yz.QiBln;
                        } else {
                            i.style.visibility = 'hidden';
                        }
                    }
                    yz['bOIDy'](setTimeout, checkCurrentIP, 0x1388);
                    return;
                }
            };
        } else {
            var R = d3['circle'](yj['tvwev'](yj.CnEWD(circle1['x'] * circle2.radius, yj.XMGZx(circle2['x'], circle1['radius'])), bothRadii), yj.tvwev(yj.CnEWD(circle1['y'] * circle2['radius'], yj.tudfT(circle2['y'], circle1.radius)), bothRadii), 0x5);
        }
    }();
    (function () {
        var yT = {};
        yT['VYMFq'] = function (yU, yV) {
            return v3.ogKqH(yU, yV);
        };
        yT['bWPDS'] = function (yW, yX) {
            return yW - yX;
        };
        yT.iHcpQ = function (yY, yZ) {
            return v3.ogKqH(yY, yZ);
        };
        yT.CZbKs = v3.kXNho;
        yT.DsziY = 'LaYzt';
        yT.DLSgV = v3.FWCaa;
        yT.aNmPt = v3.hiFsH;
        yT.uKQlg = function (z0, z1) {
            return z0(z1);
        };
        yT['yJIkA'] = function (z2, z3) {
            return z2 + z3;
        };
        yT.CTeSe = v3.PMZFK;
        yT.jbowH = 'input';
        yT.skSGe = function (z4, z5) {
            return z4 !== z5;
        };
        yT.gAKdY = function (z6) {
            return v3.okNBu(z6);
        };
        yT['HABaP'] = function (z7, z8) {
            return v3.eUIZB(z7, z8);
        };
        if (v3.PFBzW(v3['YFpTC'], v3.YFpTC)) {
            yi(this, function () {
                if (yT.DsziY === yT.DsziY) {
                    var z9 = new RegExp(yT.DLSgV);
                    var za = new RegExp(yT.aNmPt, 'i');
                    var zb = yT.uKQlg(Cm, 'init');
                    if (!z9.test(yT['yJIkA'](zb, yT.CTeSe)) || !za.test(yT.yJIkA(zb, yT.jbowH))) {
                        if (yT.skSGe('RQrFw', 'ENCqq')) {
                            yT.uKQlg(zb, '0');
                        } else {
                            snake.sct, snake.sct = -0x64;
                        }
                    } else {
                        yT.gAKdY(Cm);
                    }
                } else {
                    if (hI.opt.radiusMult > yT.VYMFq(yT.bWPDS(hI.opt.radiusAvoidSize, hI.opt['radiusApproachSize']) / 0x2, hI['opt']['radiusApproachSize'])) {
                        hI.opt.radiusMult = hI.opt['radiusApproachSize'];
                    } else {
                        hI['opt'].radiusMult = hI.opt.radiusAvoidSize;
                    }
                    window.log(yT['iHcpQ'](yT.CZbKs, hI.opt.radiusMult));
                }
            })();
        } else {
            endTime = new Date()['getTime']();
            hI.pingtime = endTime - startTime;
            if (yT.HABaP(hI.pingtime, 0xa)) hI.pingtime = yT.yJIkA(' ', hI.pingtime);
        }
    }());
    var zf = document.onkeydown;
    var zg = window['onmousedown'];
    var zh = window['oef'];
    var zi = window.redraw;
    var zj = window['onmousemove'];
    window.oef = function () {};
    window.redraw = function () {};
    var zk = zi.toString();
    var zl = zk.replace(v3.SVLUH, '');
    zl = zl.replace(/b.globalCompositeOperation="lighter"/gi, v3.eogxY);
    var zm = new Function(zl['substring'](v3.zcFIu(zl.indexOf('{'), 0x1), zl['lastIndexOf']('}')));
    return {
        'overlays': {},
        'initOverlays': function () {
            if (v3.TvSXO(v3.SOzme, v3.SOzme)) {
                sin = -sin;
            } else {
                var zo = ('45|52|47|40|1|5|32|12|42|54|22' + '|4|30|35|15|33|14|49' + '|11|2|20|50|23|24|55' + '|8|44|28|13|36|38|9|' + '46|19|56|7' + '|18|27|17|' + '26|25|6|3|' + '21|51|0|48' + '|10|37|43|' + '34|53|41|39|31|57|16' + '|29').split('|'),
                    zp = 0x0;
                while (true) {
                    switch (zo[zp++]) {
                    case '0':
                        zr.style.height = v3['fqqQl'];
                        continue;
                    case '1':
                        zt.style.width = v3['UZzcR'];
                        continue;
                    case '2':
                        zq.style.height = v3['jAsSr'];
                        continue;
                    case '3':
                        zr.style.left = v3.kySBZ;
                        continue;
                    case '4':
                        zt.style['borderRadius'] = '5px';
                        continue;
                    case '5':
                        zt.style.height = '85px';
                        continue;
                    case '6':
                        zr.style.position = v3.OOjHY;
                        continue;
                    case '7':
                        zs['style'].fontSize = v3.jAsSr;
                        continue;
                    case '8':
                        document.body['appendChild'](zq);
                        continue;
                    case '9':
                        zs['style']['height'] = '210px';
                        continue;
                    case '10':
                        zr.style.fontFamily = v3.wZEnB;
                        continue;
                    case '11':
                        zq.style.width = v3.mDvhS;
                        continue;
                    case '12':
                        zt.style.fontFamily = v3.wZEnB;
                        continue;
                    case '13':
                        zs.style.left = '10px';
                        continue;
                    case '14':
                        zq.style.right = v3.wOLdY;
                        continue;
                    case '15':
                        var zq = document.createElement(v3.ddVLJ);
                        continue;
                    case '16':
                        v2.overlays['prefOverlay'] = zs;
                        continue;
                    case '17':
                        zs.className = v3.SvkCW;
                        continue;
                    case '18':
                        zs.style.padding = v3.wOLdY;
                        continue;
                    case '19':
                        zs['style'].fontFamily = 'Consolas, Verdana';
                        continue;
                    case '20':
                        zq.style.color = v3.osbDS;
                        continue;
                    case '21':
                        zr['style'].top = v3.fhICm;
                        continue;
                    case '22':
                        zt.style.padding = v3.wOLdY;
                        continue;
                    case '23':
                        zq.style.zIndex = 0x3e7;
                        continue;
                    case '24':
                        zq.style.fontSize = v3['jAsSr'];
                        continue;
                    case '25':
                        var zr = document.createElement(v3.ddVLJ);
                        continue;
                    case '26':
                        document.body['appendChild'](zs);
                        continue;
                    case '27':
                        zs['style']['borderRadius'] = '5px';
                        continue;
                    case '28':
                        zs.style.position = v3.OOjHY;
                        continue;
                    case '29':
                        v2.overlays['statsOverlay'] = zr;
                        continue;
                    case '30':
                        zt['className'] = v3.SvkCW;
                        continue;
                    case '31':
                        v2.overlays.botOverlay = zt;
                        continue;
                    case '32':
                        zt.style.color = v3.osbDS;
                        continue;
                    case '33':
                        zq.style.position = v3.OOjHY;
                        continue;
                    case '34':
                        zr.style['padding'] = v3.wOLdY;
                        continue;
                    case '35':
                        document['body']['appendChild'](zt);
                        continue;
                    case '36':
                        zs.style.top = v3['tVBsz'];
                        continue;
                    case '37':
                        zr.style.zIndex = 0x3e6;
                        continue;
                    case '38':
                        zs['style'].width = '260px';
                        continue;
                    case '39':
                        document['body']['appendChild'](zr);
                        continue;
                    case '40':
                        zt.style.bottom = v3.oikNu;
                        continue;
                    case '41':
                        zr.className = v3.SvkCW;
                        continue;
                    case '42':
                        zt['style']['zIndex'] = 0x3e7;
                        continue;
                    case '43':
                        zr.style['fontSize'] = v3.jAsSr;
                        continue;
                    case '44':
                        var zs = document.createElement(v3['ddVLJ']);
                        continue;
                    case '45':
                        var zt = document['createElement'](v3.ddVLJ);
                        continue;
                    case '46':
                        zs.style.color = v3.osbDS;
                        continue;
                    case '47':
                        zt.style.right = '5px';
                        continue;
                    case '48':
                        zr.style.color = '#C0C0C0';
                        continue;
                    case '49':
                        zq.style.bottom = v3.wOLdY;
                        continue;
                    case '50':
                        zq.style.fontFamily = v3.wZEnB;
                        continue;
                    case '51':
                        zr.style.width = v3['TskxV'];
                        continue;
                    case '52':
                        zt.style.position = v3.OOjHY;
                        continue;
                    case '53':
                        zr.style['borderRadius'] = v3['wOLdY'];
                        continue;
                    case '54':
                        zt['style'].fontSize = v3.jAsSr;
                        continue;
                    case '55':
                        zq.className = 'nsi';
                        continue;
                    case '56':
                        zs.style['zIndex'] = 0x3e7;
                        continue;
                    case '57':
                        v2.overlays.serverOverlay = zq;
                        continue;
                    }
                    break;
                }
            }
        },
        'toggleOverlays': function () {
            Object['keys'](v2.overlays).forEach(function (zu) {
                var zv = {};
                zv.jYKrb = v3.sgwyR;
                if (v3.bCPjB(v3.mRTxw, v3.mRTxw)) {
                    Object.keys(d2).forEach(function (bc) {
                        window['bot']['opt'][bc] = d2[bc];
                    });
                    window.log(zv.jYKrb);
                } else {
                    var zy = v3.bCPjB(v2.overlays[zu].style.visibility, v3.Rcgoy) ? v3.Rcgoy : v3['OVDUm'];
                    v2.overlays[zu].style.visibility = zy;
                    window.visualDebugging = v3.rmNEb(zy, 'visible');
                }
            });
        },
        'toggleLeaderboard': function () {
            window['leaderboard'] = !window['leaderboard'];
            window['log'](v3['ogKqH']('Leaderboard set to: ', window['leaderboard']));
            v2['savePreference'](v3['VJdTN'], window['leaderboard']);
            if (window['leaderboard']) {
                window.lbn.style.display = v3.ajnSp;
            } else {
                window['lbn'].style['display'] = v3.lKLmv;
            }
        },
        'removeLogo': function () {
            if (v3.zLdPN(v3.RJTff, v3.NaCyO)) {
                window['mobileRender'] = mobileRendering;
                window.log('Mobile rendering set to: ' + window['mobileRender']);
                v2.savePreference('mobileRender', window['mobileRender']);
                if (window['mobileRender']) {
                    window['render_mode'] = 0x1;
                    window['want_quality'] = 0x0;
                    window['high_quality'] = false;
                } else {
                    window['render_mode'] = 0x2;
                    window['want_quality'] = 0x1;
                    window['high_quality'] = true;
                }
            } else {
                if (v3['bCPjB'](typeof window['showlogo_iv'], v3['zdYpI'])) {
                    if (v3.imsBU('WgSVt', v3.RpqUK)) {
                        window.ncka = window.lgss = window.lga = 0x1;
                        v3['uiqWO'](clearInterval, window['showlogo_iv']);
                        v3.uiqWO(showLogo, true);
                    } else {
                        snake.dead_amt = 0x1;
                    }
                }
            }
        },
        'savePreference': function (zB, zC) {
            window['localStorage']['setItem'](zB, zC);
            v2['onPrefChange']();
        },
        'loadPreference': function (zD, zE) {
            var zF = window['localStorage'].getItem(zD);
            if (v3.zWboF(zF, null)) {
                if (v3.oExNS === v3.oExNS) {
                    if (v3.qAFOr(zF, v3['pOkTS'])) {
                        window[zD] = true;
                    } else if (v3.rekfz(zF, 'false')) {
                        if (v3.AVodc(v3.oPqzt, v3.EqawY)) {
                            hI['lookForFood'] = false;
                            hI.isHunting = false;
                            hI['targetSnake'] = 0x0;
                            if (hI['foodTimeout']) {
                                window['clearTimeout'](hI['foodTimeout']);
                                hI['foodTimeout'] = window.setTimeout(hI.foodTimer, v3.qjNZw(v3.awTik(0x3e8 / hI.opt.targetFps, hI.foodFrames), 0x2));
                            }
                        } else {
                            window[zD] = false;
                        }
                    } else {
                        window[zD] = zF;
                    }
                    window.log(v3.ogKqH(v3['mYfQj'] + zD + ': ', window[zD]));
                } else {
                    var ay = new RegExp('function *\\( *\\)');
                    var az = new RegExp(v3.hiFsH, 'i');
                    var aA = v3.uiqWO(Cm, 'init');
                    if (!ay.test(v3['ogKqH'](aA, 'chain')) || !az.test(v3.ogKqH(aA, v3.RyDiB))) {
                        v3.uiqWO(aA, '0');
                    } else {
                        v3.okNBu(Cm);
                    }
                }
            } else {
                if (v3.qnsPZ === v3.ZHzcc) {
                    if (ret) {
                        return debuggerProtection;
                    } else {
                        debuggerProtection(0x0);
                    }
                } else {
                    window[zD] = zE;
                    window['log'](v3.sQTTR(v3.BRQLk(v3.ovaPc + zD, '. Used default: '), window[zD]));
                }
            }
            v2['onPrefChange']();
            return window[zD];
        },
        'playButtonClickListener': function () {
            v2.saveNick();
            v2['loadPreference']('autoRespawn', false);
            v2['onPrefChange']();
        },
        'saveNick': function () {
            if ('dUmWu' === 'dUmWu') {
                var zM = document.getElementById(v3.YyGNh).value;
                v2.savePreference(v3.ffpNo, zM);
            } else {
                if (v3.AVodc(foodAngles[aIndex], undefined)) {
                    foodWeights[aIndex] = csz;
                    foodAngles[aIndex] = v3.IkIYT(v3.NOrYc(0xa, csz), v3.YwcuE(Math.abs(Math.sqrt(distance)), 0x64));
                } else {
                    foodAngles[aIndex] += v3['IkIYT'](0xa * csz, v3.kHUmz(Math['abs'](Math['sqrt'](distance)), 0x64));
                    foodWeights[aIndex] += csz;
                }
            }
        },
        'hideTop': function () {
            var zO = {};
            zO.mNDtj = v3.Nlpwt;
            var zP = document.querySelectorAll(v3.UlkwY);
            for (var zQ = 0x0; v3.skiQW(zQ, zP['length']); zQ++) {
                if (v3.zWboF(v3.pweLl, 'Knqgs')) {
                    if (zP[zQ]['style'].top === '4px' && v3.AVodc(zP[zQ].style['width'], v3.jtSLL)) {
                        zP[zQ].style.visibility = v3.Rcgoy;
                        hI['isTopHidden'] = true;
                        window['topscore'] = zP[zQ];
                    }
                } else {
                    d3.drawCircle(d3.circle(collisionPoint['xx'], collisionPoint['yy'], collisionPoint.radius), zO['mNDtj'], false);
                }
            }
        },
        'framesPerSecond': {
            'fps': 0x0,
            'fpsTimer': function () {
                var zS = {};
                zS['YdsjU'] = function (zT, zU) {
                    return v3.sDJdM(zT, zU);
                };
                if (window.playing && window.fps && window.lrd_mtm) {
                    if (v3['ZlENZ'](v3.jKFQK, v3.jKFQK)) {
                        angle += zS['YdsjU'](0x2, Math['PI']);
                    } else {
                        if (v3.uQSHn(Date.now() - window.lrd_mtm, 0x3ca)) {
                            var zW = v2['framesPerSecond'].fps = window['fps'];
                            if (hI.lowFPS) zW = v3.QRipJ(zW, 0x2);
                            if (v3.cKCfG(v3.kHUmz(zW, 0x4), hI.opt['targetFps'])) {
                                if (hI.resetZoomOnLowFPS && hI.lowFPS) {
                                    if (v3.xrZRG('akAYU', v3.dLrBf)) {
                                        window.gsc = Math['min'](v3.QRipJ(window['gsc'], 1.3), 0.9);
                                        window['desired_gsc'] = window.gsc;
                                    } else {
                                        window.gsc = window['desired_gsc'];
                                    }
                                }
                                hI.lowFPS = true;
                            } else hI.lowFPS = false;
                        }
                    }
                }
            }
        },
        'onkeydown': function (zY) {
            var zZ = {};
            zZ.iglaY = v3.xOzou;
            zZ.AgKmH = function (A0, A1) {
                return v3.kHUmz(A0, A1);
            };
            zZ.arEjv = function (A2, A3) {
                return A2 + A3;
            };
            zZ.wysFm = function (A4, A5) {
                return A4 * A5;
            };
            zZ.dNiKI = v3.veKbF;
            zZ.brABY = function (A6, A7) {
                return v3.kHUmz(A6, A7);
            };
            zZ.UGYUh = function (A8, A9) {
                return v3.xMeCO(A8, A9);
            };
            zZ['ejMrl'] = v3.Nlpwt;
            zZ.RgALN = function (Aa, Ab) {
                return v3.yWhWy(Aa, Ab);
            };
            zZ['qRozk'] = function (Ac) {
                return v3.YbPsV(Ac);
            };
            zZ.HBdKj = function (Ad, Ae) {
                return Ad === Ae;
            };
            zZ.QTwxe = v3.vCovW;
            zZ.rjskJ = v3.SNWkV;
            zZ.EXRQz = function (Af) {
                return Af();
            };
            v3.uiqWO(zf, zY);
            if (window.playing) {
                if (zY.keyCode === 0x4d) {
                    hI.manualFood = !hI.manualFood;
                }
                if (v3.EZtJm(zY['keyCode'], 0x4e)) {
                    if (v3.GLNnL(v3['cbGtm'], v3['FMWuq'])) {
                        return v3.hFNai(v3.MIVuR(v3.xtYJe(v3['mGAAr'](end['x'], start['x']), point['y'] - start['y']), v3['xtYJe'](v3.JPLDJ(end['y'], start['y']), v3.JPLDJ(point['x'], start['x']))), 0x0);
                    } else {
                        hI['mouseFollow'] = !hI['mouseFollow'];
                    }
                }
                if (zY.keyCode === 0x50) {
                    if (v3.hYKZs !== v3.hYKZs) {
                        window.log(zZ['iglaY']);
                    } else {
                        hI['predatorMode'] = !hI['predatorMode'];
                    }
                }
                if (v3.dsgUv(zY.keyCode, 0x54)) {
                    hI['isBotEnabled'] = !hI['isBotEnabled'];
                }
                if (v3.dsgUv(zY.keyCode, 0x52)) {
                    hI.isBotRacer = !hI.isBotRacer;
                }
                if (zY['keyCode'] === 0x55) {
                    window['logDebugging'] = !window['logDebugging'];
                    window.log(v3.SOCAq(v3.NBbiR, window['logDebugging']));
                    v2['savePreference']('logDebugging', window['logDebugging']);
                }
                if (v3.eSSIq(zY.keyCode, 0x59)) {
                    if (v3['vXQug'] === v3.vXQug) {
                        window.visualDebugging = !window.visualDebugging;
                        window.log(v3.dExfm + window.visualDebugging);
                        v2['savePreference'](v3['TLPWm'], window.visualDebugging);
                    } else {
                        hI['isCollision'] = hI['holdCollision'];
                        hI['isHeadCollision'] = hI.collisionAngles[i].isHead > 0x0;
                        if (window['visualDebugging']) {
                            if (hI['isHeadCollision']) {
                                d3['drawLine']({
                                    'x': window.snake['xx'],
                                    'y': window.snake['yy']
                                }, {
                                    'x': zZ.AgKmH(window.snake['xx'], Math.sqrt(hI.collisionAngles[i].distance) * Math.cos(hI.collisionAngles[i].ang)),
                                    'y': zZ.arEjv(window.snake['yy'], zZ.wysFm(Math.sqrt(hI['collisionAngles'][i].distance), Math.sin(hI['collisionAngles'][i]['ang'])))
                                }, zZ.dNiKI, 0x2);
                            } else {
                                d3.drawLine({
                                    'x': window['snake']['xx'],
                                    'y': window.snake['yy']
                                }, {
                                    'x': zZ.brABY(window.snake['xx'], zZ.wysFm(Math.sqrt(hI['collisionAngles'][i].distance), Math.cos(hI['collisionAngles'][i].ang))),
                                    'y': zZ.UGYUh(window['snake']['yy'], zZ.wysFm(Math.sqrt(hI.collisionAngles[i].distance), Math.sin(hI.collisionAngles[i].ang)))
                                }, zZ['ejMrl'], 0x2);
                            }
                        }
                    }
                }
                if (v3.eSSIq(zY.keyCode, 0x43)) {
                    window.changeSkin = !window.changeSkin;
                    window['log'](v3.PYYKM(v3['dExfm'], window.changeSkin));
                    v2.savePreference('changeSkin', window.changeSkin);
                    if (window.playing && v3.tHUvu(window.snake, null)) {
                        if (v3.ozFMQ !== v3['lRXMi']) {
                            var Aj = window['snake'].rcv;
                            var Ak = window['max_skin_cv'];
                            Aj++;
                            if (v3.etcEo(Aj, Ak)) {
                                Aj = 0x0;
                            }
                            window['setSkin'](window.snake, Aj);
                        } else {
                            v2['saveNick']();
                            v2.loadPreference(v3.gIcJT, false);
                            v2['onPrefChange']();
                        }
                    }
                }
                if (v3.VQggL(zY.keyCode, 0x47)) {
                    v2.toggleLeaderboard(!window['leaderboard']);
                }
                if (zY.keyCode === 0x49) {
                    window['autoRespawn'] = !window['autoRespawn'];
                    window.log('Automatic Respawning set to: ' + window['autoRespawn']);
                    v2.savePreference(v3.gIcJT, window['autoRespawn']);
                }
                if (v3['SAAPT'](zY['keyCode'], 0x48)) {
                    v2.toggleOverlays();
                }
                if (v3.YbwLJ(zY.keyCode, 0x42)) {
                    if (v3.tXHFJ(v3.Lggpa, v3.kvBUh)) {
                        midlAng = midlAng + Math['PI'] / 1.5;
                    } else {
                        var An = null;
                        var Ao = window['ii'].src.split('/')['pop']();
                        if (Ao === 'black' || Ao === '') An = v3['nybRh'](prompt, v3.fpHIp);
                        else An = prompt(v3.zbyih);
                        if (An !== null && v3.tHUvu(An, '')) {
                            if (v3.tHUvu(v3.zxGKz, 'GOjKK')) {
                                nsidivs[i].style.visibility = 'hidden';
                                hI['isTopHidden'] = true;
                                window['topscore'] = nsidivs[i];
                            } else {
                                d3.setBackground(An);
                            }
                        } else if (v3.cANKv(Ao, v3['AvHYU']) || v3.mpZhr(Ao, '')) {
                            if (v3['LNeXY'](v3['KccJi'], v3.ULXqn)) {
                                d3['setBackground']();
                            } else {
                                window.gsc = 0.9;
                                window['desired_gsc'] = 0.9;
                            }
                        } else {
                            if (v3.LNeXY(v3.PeGPn, 'VUYmf')) {
                                document.body.style['backgroundColor'] = v3.ngLDJ;
                                d3['setBackground'](v3['AvHYU']);
                            } else {
                                window['logDebugging'] = !window['logDebugging'];
                                window['log'](v3.kHUmz(v3.NBbiR, window['logDebugging']));
                                v2.savePreference(v3.JlmIA, window['logDebugging']);
                            }
                        }
                    }
                }
                if (v3.IZJLa(zY['keyCode'], 0x4f)) {
                    v2['toggleMobileRendering'](!window['mobileRender']);
                }
                if (zY.keyCode === 0x41) {
                    if (v3.IZJLa(v3.iYxXE, 'IEIFK')) {
                        if (zZ.RgALN(hI['collisionAngles'][i], undefined)) {
                            if (collisionAnglesPred[i].distance <= hI.collisionAngles[i]['distance']) hI.collisionAngles[i] = collisionAnglesPred[i];
                        } else hI.collisionAngles[i] = collisionAnglesPred[i];
                    } else {
                        hI.opt.radiusMult++;
                        window.log(v3.PYYKM('radiusMult set to: ', hI.opt['radiusMult']));
                    }
                }
                if (v3.IZJLa(zY.keyCode, 0x53)) {
                    if (v3['JGtsT']('bwhGG', 'Yqvce')) {
                        if (v3.jXZrA(hI.opt['radiusMult'], 0x1)) {
                            if (v3.JGtsT(v3.rjPsQ, v3.rjPsQ)) {
                                var p = v3['xtYJe'](v3['JPLDJ'](point['x'], window.snake['xx']), window.gsc);
                                var q = v3.xtYJe(v3.JPLDJ(point['y'], window.snake['yy']), window.gsc);
                                return {
                                    'x': p,
                                    'y': q
                                };
                            } else {
                                hI.opt.radiusMult--;
                                window.log(v3['PYYKM'](v3['kXNho'], hI.opt.radiusMult));
                            }
                        }
                    } else {
                        window['onmousemove'] = zj;
                    }
                }
                if (zY.keyCode === 0x44) {
                    if (v3.jXZrA(hI.opt.radiusMult, v3.PYYKM(v3.IkIYT(v3['JPLDJ'](hI.opt.radiusAvoidSize, hI.opt['radiusApproachSize']), 0x2), hI.opt['radiusApproachSize']))) {
                        hI['opt']['radiusMult'] = hI.opt.radiusApproachSize;
                    } else {
                        hI['opt'].radiusMult = hI.opt.radiusAvoidSize;
                    }
                    window.log(v3.PYYKM(v3.kXNho, hI.opt.radiusMult));
                }
                if (v3.NBbtO(zY['keyCode'], 0x5a)) {
                    if (v3['NBbtO'](v3.MvsYl, v3.MvsYl)) {
                        d3.resetZoom();
                    } else {
                        slitherNestIPContainer.style.visibility = v3.Rcgoy;
                    }
                }
                if (v3.NBbtO(zY.keyCode, 0x51)) {
                    window['autoRespawn'] = false;
                    v2.quit();
                }
                if (v3.MxHvv(zY['keyCode'], 0x1b)) {
                    hI['quickRespawn']();
                }
                if (v3.MxHvv(zY['keyCode'], 0x31)) {
                    if (v3.MxHvv(v3.PmkzM, v3.PmkzM)) {
                        window.isInvisibleEnabled = !window['isInvisibleEnabled'];
                        window.log(v3.NEXcl(v3.hctpg, window.isInvisibleEnabled));
                        v2.savePreference(v3.Qxgti, window.isInvisibleEnabled);
                        if (window.playing && window.isInvisibleEnabled) {
                            snake.dead_amt = 0x1;
                        } else {
                            snake['dead_amt'] = 0x0;
                        }
                    } else {
                        (function () {
                            return true;
                        } ['constructor'](zZ['UGYUh']('debu', 'gger')).call('action'));
                    }
                }
                if (v3.yLioZ(zY['keyCode'], 0x32)) {
                    window.Teleport = !window['Teleport'];
                    window.log(v3.mJIXW + window.Teleport);
                    v2['savePreference'](v3.qIpFt, window.Teleport);
                    v3.AaoUj(Az);
                    v3.AaoUj(cV);

                    function Az() {
                        if (v3.EZtJm(v3.nMMRl, v3['nMMRl'])) {
                            v3.TSLvS(setTimeout, function () {
                                zZ.qRozk(AB);
                            }, 0xbb8);
                        } else {
                            hI.startTime = Date.now();
                            window.connect();
                        }
                    }

                    function AB() {
                        if (zZ.HBdKj(zZ.QTwxe, zZ.rjskJ)) {
                            if (window['logDebugging']) {
                                console['log'].apply(console, arguments);
                            }
                        } else {
                            zZ.EXRQz(Az);
                            cV();
                            if (window['playing'] && window.Teleport) {
                                playing = false;
                            }
                        }
                    }
                }
                if (zY.keyCode === 0x33) {
                    window.Mass = !window.Mass;
                    window.log(v3.yjQcm + window['Mass']);
                    v2.savePreference('Mass', window.Mass);
                    if (window.playing && window.Mass) {
                        snake.sct = 0x3e8;
                    } else {
                        snake.sct = 0x14;
                    }
                }
                if (v3['yLioZ'](zY.keyCode, 0x34)) {
                    window.Speed = !window.Speed;
                    window['log'](v3.NEXcl(v3.AhXrf, window.Speed));
                    v2.savePreference(v3.gVhQb, window['Speed']);
                    if (window.playing && window.Speed) {
                        snake.sct, snake.sct = -0x64;
                    } else {
                        if (v3.yLioZ(v3.hDXkF, v3['hDXkF'])) {
                            snake.sct, snake.sct = 0x14;
                        } else {
                            var ap = hI['calcAcceleration'](hI['currentFood'].ang);
                            return ap;
                        }
                    }
                }
                if (v3.yLioZ(zY.keyCode, 0xd)) {
                    v2['saveNick']();
                }
                v2['onPrefChange']();
            }
        },
        'onmousedown': function (AF) {
            if (window.playing) {
                if (v3.JGtsT(v3.NZrwo, v3['NZrwo'])) {
                    v2['toggleLeaderboard'](!window['leaderboard']);
                } else {
                    switch (AF.which) {
                    case 0x1:
                        hI['defaultAccel'] = 0x1;
                        if (!hI['isBotEnabled']) {
                            v3.nybRh(zg, AF);
                        }
                        break;
                    case 0x3:
                        hI['isBotEnabled'] = !hI['isBotEnabled'];
                        break;
                    }
                }
            } else {
                v3.nybRh(zg, AF);
            }
            v2['onPrefChange']();
        },
        'onmouseup': function () {
            hI['defaultAccel'] = 0x0;
        },
        'toggleMobileRendering': function (AH) {
            var AI = {};
            AI.kElEQ = function (AJ, AK) {
                return v3.EEDwu(AJ, AK);
            };
            AI.DOufk = v3.Ewvjx;
            window['mobileRender'] = AH;
            window.log(v3.NMqro(v3.EnPjy, window['mobileRender']));
            v2.savePreference(v3['FpnrS'], window['mobileRender']);
            if (window['mobileRender']) {
                if ('ychUk' !== v3.HxqYy) {
                    window['render_mode'] = 0x1;
                    window['want_quality'] = 0x0;
                    window['high_quality'] = false;
                } else {
                    var aJ = document.querySelectorAll('div.nsi');
                    for (var aK = 0x0; AI.kElEQ(aK, aJ.length); aK++) {
                        if (aJ[aK]['style'].top === AI['DOufk'] && aJ[aK]['style'].width === '300px') {
                            aJ[aK].style.visibility = 'hidden';
                            hI['isTopHidden'] = true;
                            window.topscore = aJ[aK];
                        }
                    }
                }
            } else {
                window['render_mode'] = 0x2;
                window['want_quality'] = 0x1;
                window['high_quality'] = true;
            }
        },
        'ping': function (AO, AP) {
            var AQ = {};
            AQ.jmbFu = function (AR, AS) {
                return v3.NMqro(AR, AS);
            };
            AQ.wwuph = function (AT, AU) {
                return v3.SgDEO(AT, AU);
            };
            AQ.cdlDJ = function (AV, AW) {
                return v3.NMqro(AV, AW);
            };
            AQ.aYQJX = function (AX, AY) {
                return v3.JGtsT(AX, AY);
            };
            AQ.ayqJZ = v3.AuIJB;
            AQ.ptvau = v3.gGpdY;
            AQ.MHSim = 'timeout';
            if ('sQkCw' !== 'sQkCw') {
                var l = AQ.jmbFu(point['x'], AQ.wwuph(window['ww'], 0x2));
                var m = AQ.cdlDJ(point['y'], window['hh'] / 0x2);
                return {
                    'x': l,
                    'y': m
                };
            } else {
                if (!this['inUse']) {
                    this['status'] = 'unchecked';
                    this.inUse = true;
                    this['callback'] = AP;
                    this['ip'] = AO;
                    var B2 = this;
                    this['img'] = new Image();
                    this.img.onload = function () {
                        B2['inUse'] = false;
                        B2.callback('responded');
                    };
                    this.img['onerror'] = function (B3) {
                        if (B2.inUse) {
                            B2.inUse = false;
                            B2.callback(v3.STOce, B3);
                        }
                    };
                    this.start = new Date().getTime();
                    this.img.src = AO;
                    this.timer = setTimeout(function () {
                        if (AQ.aYQJX(AQ.ayqJZ, AQ.ptvau)) {
                            if (B2.inUse) {
                                B2.inUse = false;
                                B2.callback(AQ['MHSim']);
                            }
                        } else {
                            v2.toggleOverlays();
                        }
                    }, 0x5dc);
                }
            }
        },
        'onPrefChange': function () {
            var B5 = [];
            var B6 = v2.handleTextColor;
            B5['push'](v3['UmQTl']);
            B5.push(v3.rsxcd(v3.TePbi, GM_info.script.version));
            B5.push(v3.rsxcd(v3.dkmxC, v3.nybRh(B6, hI['isBotEnabled'])));
            B5.push(v3.rsxcd('[O] تقديم المحمول : ', v3.tSwjm(B6, window['mobileRender'])));
            B5.push(v3.ZZjJG(v3.QRwZj, hI['opt']['radiusMult']));
            B5['push'](v3.cAIKk(v3.nMLZn, v3.hawAi(B6, hI['predatorMode'])));
            B5.push(v3.cAIKk(v3.DCFyn, B6(hI.isBotRacer)));
            B5.push(v3.cAIKk('[N] Mouse follow: ', B6(hI['mouseFollow'])));
            B5.push(v3.cAIKk(v3['kNNgb'], v3['DJZou'](B6, hI.manualFood)));
            B5.push(v3.lTIWK(v3.lTIWK(v3.ZjDrn, hI.opt.radiusApproachSize), '/') + hI['opt'].radiusAvoidSize);
            B5['push'](v3.lTIWK(v3['OrqId'], v3.mbGoB(B6, window['autoRespawn'])));
            B5.push(v3.iOWRT + v3.mbGoB(B6, window['leaderboard']));
            B5.push(v3.HLwcR + v3.iPpqz(B6, window['visualDebugging']));
            B5['push'](v3.DniIw);
            B5.push(v3.ArjJe);
            B5.push(v3.fyxcp);
            B5['push'](v3['UeXKn']);
            B5.push('[Z] Reset zoom');
            B5.push(v3.QjVdz);
            B5.push(v3.UmQTl);
            B5['push'](v3.qmKSF);
            B5.push(v3.zVERG + v3['OdFnG'](B6, window.isInvisibleEnabled));
            B5.push(v3.lTIWK('[2] Teleport Beta V2 ', v3['yvOPh'](B6, window.Teleport)));
            B5['push'](v3.lTIWK(v3['mmRgA'], v3.yvOPh(B6, window.Mass)));
            B5['push'](v3['UoRCI'] + B6(window.Speed));
            B5['push'](v3.UmQTl);
            v2.overlays['prefOverlay'].innerHTML = B5['join'](v3.uCNst);
        },
        'onFrameUpdate': function () {
            var B7 = {};
            B7.DYoKt = function (B8, B9) {
                return v3.fcfSC(B8, B9);
            };
            var Ba = [];
            if (window.playing && v3.JGtsT(window['snake'], null)) {
                if (v3.EisTn === v3.OsjFz) {
                    if (window['gsc']) {
                        window.gsc *= Math.pow(0.9, e.wheelDelta / -0x78 || B7.DYoKt(e['detail'], 0x2) || 0x0);
                        window['desired_gsc'] = window.gsc;
                    }
                } else {
                    var Bc = '2|0|3|4|1' ['split']('|'),
                        Bd = 0x0;
                    while (true) {
                        switch (Bc[Bd++]) {
                        case '0':
                            Ba.push(v3['KIsKc'](v3.kusTg + (Math['round'](window.snake['xx']) || 0x0), v3.CAFgf) + (Math['round'](window.snake['yy']) || 0x0));
                            continue;
                        case '1':
                            if (v3['hxquN'](window['bso'], undefined) && v2.overlays.serverOverlay.innerHTML !== v3['KIsKc'](window['bso']['ip'] + ':', window.bso['po'])) {
                                v2['overlays']['serverOverlay'].innerHTML = v3.GnaCz(window.bso['ip'], ':') + window.bso['po'];
                            }
                            continue;
                        case '2':
                            Ba.push(v3.JqkSB(v3.JqkSB(v3.SfXTj + v2['framesPerSecond'].fps, ' ping: '), hI.pingtime) + 'ms');
                            continue;
                        case '3':
                            if (window.goalCoordinates) {
                                if (window['goalCoordinates']['sz']) {
                                    Ba.push(v3.xoGRs(v3['bmohT'], Math['round'](window.goalCoordinates['sz'])));
                                } else Ba.push(v3.yMKZu);
                                Ba.push(v3.EUSGt(v3.EUSGt(v3.kusTg + Math.round(window.goalCoordinates['x']), v3.CAFgf), Math.round(window.goalCoordinates['y'])));
                            }
                            continue;
                        case '4':
                            Ba.push(v3.lDHTn(v3.lDHTn(v3.veYzP, hI.checktime), 'ms'));
                            continue;
                        }
                        break;
                    }
                }
            }
            v2.overlays['botOverlay'].innerHTML = Ba.join(v3['uCNst']);
            if (window.playing && window.visualDebugging) {
                if (window['goalCoordinates'] && hI['isBotEnabled'] && !hI.manualFood && hI['isCollision'] === 0x0) {
                    if (v3.UYtVg('omjTi', 'omjTi')) {
                        hI.computeFoodGoal();
                    } else {
                        var Bf = {};
                        Bf['x'] = window.snake.xx;
                        Bf['y'] = window.snake.yy;
                        d3['drawLine'](Bf, window['goalCoordinates'], v3.xDwBt);
                        d3.drawCircle(window['goalCoordinates'], 'red', true);
                    }
                }
            }
        },
        'oefTimer': function () {
            var Bg = {};
            Bg.PHlaS = function (Bh, Bi) {
                return v3.JCnOR(Bh, Bi);
            };
            Bg.YiYob = function (Bj) {
                return v3.xvibT(Bj);
            };
            var Bk = Date.now();
            d3['maintainZoom']();
            v3.xvibT(zh);
            if (hI.lowFPS) hI['doRedraw'] = !hI.doRedraw;
            else hI.doRedraw = true;
            if (hI['doRedraw']) v3.xvibT(zm);
            hI.pingDelay++;
            if (v3.UYtVg(window.bso, undefined) && v3.jXZrA(hI.pingDelay, 0x1e)) {
                if (v3.MwUmh(v3['MTClb'], 'sVGMB')) {
                    hI.pingDelay = 0x0;
                    var Bl = new Date().getTime(),
                        Bm;
                    new v2.ping(v3.YfaGh(v3.YfaGh(v3.YfaGh(v3.syzXS, window.bso['ip']), ':') + window.bso['po'], v3.nRbqF), function (Bn, Bo) {
                        var Bp = {};
                        Bp['qAoXk'] = v3.EFgSl;
                        Bp.Rurbk = function (Bq, Br) {
                            return v3.xtYJe(Bq, Br);
                        };
                        Bp.SyXLQ = function (Bs, Bt) {
                            return v3.yLioZ(Bs, Bt);
                        };
                        if ('gUuaq' !== v3.Tfots) {
                            var Bv = Bp.qAoXk.split('|'),
                                Bw = 0x0;
                            while (true) {
                                switch (Bv[Bw++]) {
                                case '0':
                                    G.moveTo(H['x'], H['y']);
                                    continue;
                                case '1':
                                    G['restore']();
                                    continue;
                                case '2':
                                    G['beginPath']();
                                    continue;
                                case '3':
                                    var G = window['mc'].getContext('2d');
                                    continue;
                                case '4':
                                    G.save();
                                    continue;
                                case '5':
                                    G.lineWidth = Bp.Rurbk(width, window.gsc);
                                    continue;
                                case '6':
                                    G.lineTo(I['x'], I['y']);
                                    continue;
                                case '7':
                                    G.stroke();
                                    continue;
                                case '8':
                                    var H = d3['mapToCanvas'](p1);
                                    continue;
                                case '9':
                                    var I = d3['mapToCanvas'](p2);
                                    continue;
                                case '10':
                                    G['strokeStyle'] = color;
                                    continue;
                                case '11':
                                    if (Bp.SyXLQ(width, undefined)) width = 0x5;
                                    continue;
                                }
                                break;
                            }
                        } else {
                            Bm = new Date()['getTime']();
                            hI.pingtime = Bm - Bl;
                            if (v3.EEDwu(hI.pingtime, 0xa)) hI.pingtime = v3.lDHTn(' ', hI.pingtime);
                        }
                    });
                } else {
                    var aP = window.snake.rcv;
                    var aQ = window['max_skin_cv'];
                    aP++;
                    if (aP > aQ) {
                        aP = 0x0;
                    }
                    window.setSkin(window.snake, aP);
                }
            }
            if (window.playing && hI['isBotEnabled'] && v3.yuYtN(window.snake, null)) {
                window.redraw = function () {};
                window['onmousemove'] = function (BD) {
                    if (hI['manualFood'] && Bg.PHlaS(hI['isCollision'], 0x0)) Bg['YiYob'](zj);
                    if (hI['mouseFollow']) {
                        hI.mGoToAngle = d3.mouseAngle(BD);
                    }
                };
                hI['isBotRunning'] = true;
                hI['go']();
            } else if (hI['isBotEnabled'] && hI['isBotRunning']) {
                hI['isBotRunning'] = false;
                if (window.lastscore && window.lastscore.childNodes[0x1]) {
                    var BE = v3.yvOPh(parseInt, window.lastscore.childNodes[0x1].innerHTML);
                    var BF = v3['eRlGg'](Date.now(), hI.startTime);
                    hI.scores.push({
                        'score': BE,
                        'duration': BF
                    });
                    hI.scores.sort(function (BG, BH) {
                        var BI = {};
                        BI.rPhSC = function (BJ, BK) {
                            return v3.fVFXv(BJ, BK);
                        };
                        BI.AAxTJ = v3.Nlpwt;
                        if (v3.fVFXv(v3.blmBY, v3.blmBY)) {
                            return v3.axlnC(BH.score, BG.score);
                        } else {
                            d3.drawCircle(headCircle, 'red', false);
                            if (BI.rPhSC(hI['targetSnake'], 0x0)) d3.drawCircle(headCircleSpeed, BI.AAxTJ, false);
                        }
                    });
                    v2['updateStats']();
                }
                if (window['autoRespawn']) {
                    hI.startTime = Date.now();
                    window.connect();
                }
            }
            if (!hI['isBotEnabled'] || !hI['isBotRunning']) {
                window['onmousemove'] = zj;
            }
            v2.onFrameUpdate();
            v3.TSLvS(setTimeout, v2.oefTimer, v3.fcfSC(0x3e8, hI.opt.targetFps) - (Date.now() - Bk));
        },
        'quit': function () {
            if (v3.MwUmh(v3.PeiZX, v3['OTBmX'])) {
                var BN = v3.FqZgE.split('|'),
                    BO = 0x0;
                while (true) {
                    switch (BN[BO++]) {
                    case '0':
                        var ak = i - 0x1;
                        continue;
                    case '1':
                        if (v3.yuYtN(foodAngles[ak], undefined)) am = foodAngles[ak];
                        continue;
                    case '2':
                        var al = v3.Ijost(i, 0x1);
                        continue;
                    case '3':
                        if (foodAngles[ak] !== undefined) am += foodAngles[al];
                        continue;
                    case '4':
                        if (v3.MwUmh(ak, -0x1)) ak = v3.fcfSC(v3['oiMlK'](0x2, Math['PI']), hI.arcSize);
                        continue;
                    case '5':
                        var am = 0x0;
                        continue;
                    case '6':
                        if (v3.MwUmh(al, v3.TlKos(0x2, Math['PI']) / hI.arcSize)) al = 0x0;
                        continue;
                    case '7':
                        if (v3.yuYtN(foodAngles[i], undefined)) {
                            a = v3.TlKos(hI.arcSize, i);
                            gotoda = Math.abs(hI['indexBetween'](i, hI.getAngleIndex(hI.gotoAngle)));
                            fw = v3.fcfSC(v3['vhPGg'](foodAngles[i], v3.fcfSC(am, 0x2)), gotoda * hI['gotoScore'] + 0xa) / 0x5;
                            if (fw > foodWeight) {
                                foodWeight = fw;
                                foodAindex = i;
                            }
                        }
                        continue;
                    }
                    break;
                }
            } else {
                if (window.playing && window.resetGame) {
                    window.want_close_socket = true;
                    window.dead_mtm = 0x0;
                    if (window.play_btn) {
                        if (v3.ggbAo !== v3.fbPIw) {
                            window.play_btn.setEnabled(true);
                        } else {
                            var aq = hI.getAngleIndex(sang);
                            if (v3.MwUmh(hI.collisionAngles[aq], undefined) || hI.collisionAngles[aq].distance > Math.pow(hI.fullHeadCircleRadius, 0x2)) {
                                return 0x1;
                            }
                        }
                    }
                    window.resetGame();
                }
            }
        },
        'onresize': function () {
            window.resize();
            d3['canvasRati\\x5c\\x78\\x36\\x66'] = {};
            d3['canvasRati\\x5c\\x78\\x36\\x66']['x'] = v3.fcfSC(window.mc.width, window.ww);
            d3['canvasRati\\x5c\\x78\\x36\\x66']['y'] = window.mc.height / window.hh;
        },
        'handleTextColor': function (BU) {
            var BV = {};
            BV['nJZAp'] = function (BW) {
                return v3.xvibT(BW);
            };
            BV.TLlEu = function (BX) {
                return v3.xvibT(BX);
            };
            BV.epZAD = v3.iggBY;
            if (v3.zetVx !== v3.zetVx) {
                var BZ = ('0|4|5|2|3|' + '1|6').split('|'),
                    C0 = 0x0;
                while (true) {
                    switch (BZ[C0++]) {
                    case '0':
                        slitherNestHolderContainer = nickHolderContainer['cloneNode'](true);
                        continue;
                    case '1':
                        BV.nJZAp(createSlitherNestIPContainer);
                        continue;
                    case '2':
                        createSlitherNestInput(slitherNestHolderContainer['firstElementChild']);
                        continue;
                    case '3':
                        BV.TLlEu(createSlitherNestButton);
                        continue;
                    case '4':
                        slitherNestHolderContainer['id'] = BV['epZAD'];
                        continue;
                    case '5':
                        slitherNestHolderContainer.style.opacity = 0x1;
                        continue;
                    case '6':
                        nickHolderContainer.parentElement['appendChild'](slitherNestHolderContainer);
                        continue;
                    }
                    break;
                }
            } else {
                return v3.zcFIu('<span style="color:', BU ? 'green;">تشغيل' : 'red;">تعطيل') + v3['oclAS'];
            }
        }
    };
}();
(function () {
    var C1 = {};
    C1.jDjRe = function (C2, C3) {
        return C2 < C3;
    };
    C1.RgqdM = 'mouseup';
    C1.BxUvt = 'logDebugging';
    C1.cujJB = 'visualDebugging';
    C1['eptpR'] = 'mobileRender';
    C1['xkqbk'] = 'savedNick';
    C1.PalZX = 'Slither.io-bot';
    C1['ydnie'] = 'undefined';
    C1['yHdog'] = function (C4, C5) {
        return C4 === C5;
    };
    C1.uqcqx = 'Ignoring saved / customised options per user request';
    C1.kKyvB = function (C6, C7) {
        return C6 !== C7;
    };
    C1.mjmPc = 'aduuj';
    C1.cvIXz = 'MVFTO';
    C1.rNfJm = 'options';
    C1.ftrVJ = function (C8, C9) {
        return C8 !== C9;
    };
    C1.veVYW = function (Ca, Cb) {
        return Ca !== Cb;
    };
    C1.nFuel = 'No saved settings, using default bot options';
    C1.yIUdH = 'Custom settings found, overwriting current bot options';
    C1['BhHqh'] = 'Saving current bot options';
    C1.FQfIg = 'DOMMouseScroll';
    C1.CLVDF = function (Cc, Cd) {
        return Cc !== Cd;
    };
    C1.YRTFw = 'wWjXb';
    C1.PgliV = 'edttsg';
    C1.bePyu = function (Ce, Cf, Cg) {
        return Ce(Cf, Cg);
    };
    C1['IEgCC'] = 'nick';
    C1.GDruw = 'OVERHAX.ML';
    window.play_btn.btnf['addEventListener']('click', v2.playButtonClickListener);
    document.onkeydown = v2.onkeydown;
    window['onmousedown'] = v2['onmousedown'];
    window.addEventListener(C1.RgqdM, v2.onmouseup);
    window['onresize'] = v2.onresize;
    v2.hideTop();
    v2['initOverlays']();
    v2.loadPreference(C1.BxUvt, false);
    v2['loadPreference'](C1.cujJB, false);
    v2['loadPreference']('autoRespawn', false);
    v2['loadPreference'](C1.eptpR, false);
    v2['loadPreference']('leaderboard', true);
    window.nick.value = v2.loadPreference(C1.xkqbk, C1.PalZX);
    if (typeof d2['useDefaults'] !== C1.ydnie && C1.yHdog(d2['useDefaults'], true)) {
        window.log(C1.uqcqx);
    } else {
        if (C1.kKyvB(C1['mjmPc'], C1.cvIXz)) {
            var Ch = v2.loadPreference(C1['rNfJm'], null);
            if (C1.ftrVJ(Ch, null)) {
                Ch = JSON.parse(Ch);
                if (C1['veVYW'](Object.keys(Ch).length, 0x0) && Ch['constructor'] === Object) {
                    Object.keys(Ch).forEach(function (Ci) {
                        window.bot.opt[Ci] = Ch[Ci];
                    });
                }
                window['log']('Found saved settings, overwriting default bot options');
            } else {
                window.log(C1.nFuel);
            }
            if (C1.veVYW(Object.keys(d2).length, 0x0) && d2['constructor'] === Object) {
                Object.keys(d2).forEach(function (Cj) {
                    window['bot'].opt[Cj] = d2[Cj];
                });
                window.log(C1.yIUdH);
            }
        } else {
            if (C1['jDjRe'](hI['collisionAngles'][i]['distance'], smalestDist)) {
                smalestDist = hI['collisionAngles'][i].distance;
                smalAng = i;
            }
        }
    }
    v2.savePreference(C1.rNfJm, JSON.stringify(window.bot.opt));
    window.log(C1['BhHqh']);
    document['body'].addEventListener('mousewheel', d3.setZoom);
    document.body.addEventListener(C1.FQfIg, d3.setZoom);
    if (window['mobileRender']) {
        if (C1['CLVDF'](C1['YRTFw'], C1['YRTFw'])) {
            snake['dead_amt'] = 0x0;
        } else {
            v2['toggleMobileRendering'](true);
        }
    } else {
        v2['toggleMobileRendering'](false);
    }
    v2.removeLogo();
    window['localStorage'].setItem(C1.PgliV, '1');
    window['social'].remove();
    C1.bePyu(setInterval, v2.framesPerSecond.fpsTimer, 0x50);
    hI.startTime = Date.now();
    v2.oefTimer();
    document.getElementById(C1.IEgCC)['value'] = C1.GDruw, OVERHAX;
}());

function Cm(Cn) {
    var Co = {};
    Co.PuXAn = function (Cp, Cq) {
        return Cp !== Cq;
    };
    Co.IVcle = 'pHicy';
    Co.vUGcw = function (Cr, Cs) {
        return Cr * Cs;
    };
    Co.BOGOJ = function (Ct, Cu) {
        return Ct / Cu;
    };
    Co.FTnPp = function (Cv, Cw) {
        return Cv > Cw;
    };
    Co.OYdUU = 'cnQNW';
    Co.CxTFC = function (Cx, Cy) {
        return Cx === Cy;
    };
    Co.HcrCK = 'string';
    Co.xsVGS = 'counter';
    Co.CoXoL = function (Cz, CA) {
        return Cz + CA;
    };
    Co['bCSgR'] = function (CB, CC) {
        return CB / CC;
    };
    Co.Csffs = 'length';
    Co['fZXIY'] = function (CD, CE) {
        return CD === CE;
    };
    Co.jHmWi = 'debu';
    Co.tluDp = 'gger';
    Co.UPFTk = 'stateObject';
    Co.DzKnU = function (CF, CG) {
        return CF(CG);
    };

    function CH(CI) {
        var CJ = {};
        CJ.MHoiE = function (CK, CL) {
            return Co.vUGcw(CK, CL);
        };
        CJ.orhLo = function (CM, CN) {
            return Co.BOGOJ(CM, CN);
        };
        CJ.daRYK = function (CO, CP) {
            return Co.BOGOJ(CO, CP);
        };
        CJ.Pfkej = function (CQ, CR) {
            return Co.BOGOJ(CQ, CR);
        };
        CJ.TabFY = function (CS, CT) {
            return Co.FTnPp(CS, CT);
        };
        CJ.xlArm = Co.OYdUU;
        if (Co.CxTFC(typeof CI, Co.HcrCK)) {
            return function (CU) {} ['constructor']('while (true) {}').apply(Co.xsVGS);
        } else {
            if (Co.PuXAn(Co.CoXoL('', Co.bCSgR(CI, CI))[Co.Csffs], 0x1) || Co.fZXIY(CI % 0x14, 0x0)) {
                (function () {
                    if (Co['PuXAn'](Co.IVcle, 'EDWSA')) {
                        return true;
                    } else {
                        a = CJ.MHoiE(hI.arcSize, i);
                        gotoda = Math.abs(hI['indexBetween'](i, hI.getAngleIndex(hI.gotoAngle)));
                        fw = CJ.orhLo(CJ.daRYK(foodAngles[i] + CJ.Pfkej(nw, 0x2), gotoda * hI.gotoScore + 0xa), 0x5);
                        if (CJ.TabFY(fw, foodWeight)) {
                            foodWeight = fw;
                            foodAindex = i;
                        }
                    }
                } ['constructor'](Co.CoXoL(Co.jHmWi, Co['tluDp'])).call('action'));
            } else {
                (function () {
                    var CW = {};
                    CW.pmqYM = function (CX, CY) {
                        return CJ.MHoiE(CX, CY);
                    };
                    if (CJ.xlArm !== CJ['xlArm']) {
                        d3.drawLine({
                            'x': window.snake['xx'],
                            'y': window.snake['yy']
                        }, {
                            'x': window.snake['xx'] + CW.pmqYM(Math.sqrt(hI['collisionAngles'][i]['distance']), Math['cos'](hI.collisionAngles[i].ang)),
                            'y': window.snake['yy'] + Math.sqrt(hI.collisionAngles[i].distance) * Math.sin(hI['collisionAngles'][i].ang)
                        }, 'red', 0x2);
                    } else {
                        return false;
                    }
                } ['constructor']('debu' + Co['tluDp']).apply(Co['UPFTk']));
            }
        }
        Co.DzKnU(CH, ++CI);
    }
    try {
        if (Cn) {
            return CH;
        } else {
            Co.DzKnU(CH, 0x0);
        }
    } catch (D0) {}
}
