(function(g){var window=this;'use strict';var J6=function(a){g.W.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.pe=!1;this.player=a;this.S(a,"minimized",this.dg);this.S(a,"onStateChange",this.xH)},K6=function(a){g.tM.call(this,a);
this.i=new J6(this.player);this.i.hide();g.fM(this.player,this.i.element,4);a.Se()&&(this.load(),g.M(a.getRootNode(),"ytp-player-minimized",!0))};
g.v(J6,g.W);g.h=J6.prototype;
g.h.nF=function(){this.tooltip=new g.iQ(this.player,this);g.J(this,this.tooltip);g.fM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Ac=new g.mN(this.player);g.J(this,this.Ac);this.Gg=new g.W({D:"div",K:"ytp-miniplayer-scrim"});g.J(this,this.Gg);this.Gg.Ca(this.element);this.S(this.Gg.element,"click",this.OA);var a=new g.W({D:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],V:{"aria-label":"\ub2eb\uae30"},U:[g.fK()]});g.J(this,a);a.Ca(this.Gg.element);this.S(a.element,"click",
this.Ni);a=new g.a2(this.player,this);g.J(this,a);a.Ca(this.Gg.element);this.Pp=new g.W({D:"div",K:"ytp-miniplayer-controls"});g.J(this,this.Pp);this.Pp.Ca(this.Gg.element);this.S(this.Pp.element,"click",this.OA);var b=new g.W({D:"div",K:"ytp-miniplayer-button-container"});g.J(this,b);b.Ca(this.Pp.element);a=new g.W({D:"div",K:"ytp-miniplayer-play-button-container"});g.J(this,a);a.Ca(this.Pp.element);var c=new g.W({D:"div",K:"ytp-miniplayer-button-container"});g.J(this,c);c.Ca(this.Pp.element);this.iO=
new g.LO(this.player,this,!1);g.J(this,this.iO);this.iO.Ca(b.element);b=new g.JO(this.player,this);g.J(this,b);b.Ca(a.element);this.nextButton=new g.LO(this.player,this,!0);g.J(this,this.nextButton);this.nextButton.Ca(c.element);this.Jg=new g.VP(this.player,this);g.J(this,this.Jg);this.Jg.Ca(this.Gg.element);this.Jc=new g.TO(this.player,this);g.J(this,this.Jc);g.fM(this.player,this.Jc.element,4);this.EA=new g.W({D:"div",K:"ytp-miniplayer-buttons"});g.J(this,this.EA);g.fM(this.player,this.EA.element,
4);a=new g.W({D:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],V:{"aria-label":"\ub2eb\uae30"},U:[g.fK()]});g.J(this,a);a.Ca(this.EA.element);this.S(a.element,"click",this.Ni);a=new g.W({D:"button",Ga:["ytp-miniplayer-replay-button","ytp-button"],V:{"aria-label":"\ub2eb\uae30"},U:[g.mK()]});g.J(this,a);a.Ca(this.EA.element);this.S(a.element,"click",this.QW);this.S(this.player,"presentingplayerstatechange",this.Sc);this.S(this.player,"appresize",this.yb);this.S(this.player,"fullscreentoggled",
this.yb);this.yb()};
g.h.show=function(){this.Sd=new g.fr(this.Bq,null,this);this.Sd.start();this.pe||(this.nF(),this.pe=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Jc.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.Sd&&(this.Sd.dispose(),this.Sd=void 0);g.W.prototype.hide.call(this);this.player.Se()||(this.pe&&this.Jc.hide(),this.player.loadModule("annotations_module"))};
g.h.ra=function(){this.Sd&&(this.Sd.dispose(),this.Sd=void 0);g.W.prototype.ra.call(this)};
g.h.Ni=function(){this.player.stopVideo();this.player.Oa("onCloseMiniplayer")};
g.h.QW=function(){this.player.playVideo()};
g.h.OA=function(a){if(a.target===this.Gg.element||a.target===this.Pp.element)this.player.T().L("kevlar_miniplayer_play_pause_on_scrim")?g.WI(this.player.zb())?this.player.pauseVideo():this.player.playVideo():this.player.Oa("onExpandMiniplayer")};
g.h.dg=function(){g.M(this.player.getRootNode(),"ytp-player-minimized",this.player.Se())};
g.h.Dd=function(){this.Jc.Rb();this.Jg.Rb()};
g.h.Bq=function(){this.Dd();this.Sd&&this.Sd.start()};
g.h.Sc=function(a){g.V(a.state,32)&&this.tooltip.hide()};
g.h.yb=function(){g.gP(this.Jc,0,this.player.bb().getPlayerSize().width,!1);g.UO(this.Jc)};
g.h.xH=function(a){this.player.Se()&&(0===a?this.hide():this.show())};
g.h.jc=function(){return this.tooltip};
g.h.Ye=function(){return!1};
g.h.Bf=function(){return!1};
g.h.Ei=function(){return!1};
g.h.Jx=function(){};
g.h.Fn=function(){};
g.h.Gs=function(){};
g.h.Vn=function(){return null};
g.h.mw=function(){return null};
g.h.Dj=function(){return new g.qn(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.Iq=function(a,b,c,d,e){var f=0,k=d=0,l=g.io(a);if(b){c=g.nr(b,"ytp-prev-button")||g.nr(b,"ytp-next-button");var m=g.nr(b,"ytp-play-button"),n=g.nr(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.go(b,this.element),k=b.x,f=b.y-12):n&&(k=g.nr(b,"ytp-miniplayer-button-top-left"),f=g.go(b,this.element),b=g.io(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=this.player.bb().getPlayerSize().width;e=f+(e||0);l=g.Yg(k,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.Al=function(){};
g.h.Rk=function(){return!1};g.v(K6,g.tM);K6.prototype.create=function(){};
K6.prototype.bj=function(){return!1};
K6.prototype.load=function(){this.player.hideControls();this.i.show()};
K6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.sM("miniplayer",K6);})(_yt_player);
