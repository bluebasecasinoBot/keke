import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p4 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;background:transparent;flex-direction:column;gap:50px;" + __sC['pages']({method:"add" , style:{paddingTop:"20px" , paddingLeft:"20px" , paddingRight:"20px"}}),
            id:"p4"
        },
        [
            __SYD.p4_text2(),
            __SYD.p4SubHeader()
        ]
    )
}

__SYD.p4SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:unset;display:flex;justify-content:space-between;align-items:flex-start;gap:20px;padding:0 ${__p(["p4SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};`,
            class:"p1SubHeader"
        },
        [
            __SYD.p4_tab(
                {content:`Ensures smooth trading and strong market presence.` ,title:`Roadmap` , img:"road_aux" , headerClr:" #a8e10c"}
            ),
            __c(
                "div",
                {
                    style:`height:100vw;max-height:calc(100vh - 150px);width:${__p(["p4SubHeader" , "breakVal"],false) ? "100%" : "100%"};display:flex;flex-direction:column;gap:20px;background-image:url("./assets/road_main.png");border-radius:15px;`
                },[],{genericStyle:["bg_fit"]}
            ),
        ],
        {
            createState:{
                stateName:"p4SubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    __flex_child:'row',
                    resize:false
                    // breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<1000px" , prop:{__flex_child:'column' , resize:true}}
                    // {size:"<1000px" , prop:{breakVal:true}}
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , __flex_child:'row' , resize:false}//breakVal:false
            }
        }
    )
}


__SYD.p4_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get() + "color:#b9bcc5;"
        },
        [
            __c(
                "p",
                {},["get $Alita"]
            )
        ]
    )
}


__SYD.p4_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "color:#175dfb;text-shadow:2px 2px 0px #171717;text-decoration:none;color:#fff;text-align:center;letter-spacing:3px;"
        },
        [
            __c(
                "p",
                {},["ROADMAP"]
            )
        ]
    )
}


__SYD.p4_text3 = () =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get() + "color:#fff;"} text-align:center;`},["Trade $ALITA securely and instantly on top-tier Solana DEXs. No middlemen, just pure peer-to-peer trading power."])
        ]
    )
}

__SYD.p4_tabs = () =>{
    return __c(
        "div",
        {
            style:"display:flex;row-gap:50px;column-gap:50px;height:fit-content;width:100%;justify-content:center;flex-wrap:wrap;"
        },
        [
            __SYD.p4_tab({title:"uniswap" , src:"uniswap"}),
            __SYD.p4_tab({title:"ByBit" , src:"bybit"}),
            __SYD.p4_tab({title:"OKX" , src:"okx"}),
            __SYD.p4_tab({title:"Binance" , src:"binance"}),
            __SYD.p4_tab({title:"pancakeswap" , src:"pancakeswap"}),
        ]
    )
}

__SYD.p4_tab = ({title = '' , content = '' , img = "basePlus2" , headerClr = "blue"}) =>{
    return __c(
        'div',
        {
            style:`width:calc(100% - 0px);max-width:${__p(["p4SubHeader" , "__flex_child"],"row") === "row" ? "380px" : "100%"};height:fit-content;border-radius:10px;padding:30px 0;margin-top:100px;position:relative;padding-top:150px;`,
            class:"secondaryTab"
        },
        [
            __c(
                'div',
                {
                    style:`height:fit-content;min-height:250px;padding:10px 20px;width:100%;background:unset;display:flex;align-items:center;column-gap:20px;row-gap:20px;flex-direction:column;`
                },
                [
                    __c(
                        "div",
                        {
                            style:"height:100%;width:100%;display:flex;justify-content:center;align-items:center;",
                            // class:"p3_tab"
                        },
                        [
                            __c(
                                "div",
                                {
                                    style:"height:fit-content;width:fit-content;position:absolute;top:0;transform:translateY(-150px)"
                                },
                                [
                                    __c(
                                        "img",
                                        {
                                            style:"width:auto;height:300px;transition:all linear .3s;",
                                            src:`./assets/${img}.png`
                                        }
                                    ),
                                ]
                            ),
                        ]
                    ),
                    __c(
                        'div',
                        {
                            style:'width:100%;display:flex;flex-direction:column;gap:10px;'
                        },
                        [
                            __SYD.p3_text4(title , headerClr),
                            __c(
                                "ul",
                                {
                                    style:"display:flex;flex-direction:column;gap:5px;font-size:16px;font-weight:900;margin-top:5px;"
                                },
                                [
                                    __c("li",{style:"margin-left:30px;"} , ["Meme ignition"]),
                                    __c("li",{style:"margin-left:30px;"} , ["Hold the vibes"]),
                                    __c("li",{style:"margin-left:30px;"} , ["Frogs take over"]),
                                    __c("li",{style:"margin-left:30px;"} , ["Straight to the moon 🌕"])
                                ]
                            ),
                        ]
                    ),
                ]
            )
        ]
    )
}