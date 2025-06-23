import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p3 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;background:transparent;flex-direction:column;gap:50px;" + __sC['pages']({method:"add" , style:{paddingTop:"20px" , paddingLeft:"20px" , paddingRight:"20px"}}),
            id:"p3"
        },
        [
            __SYD.p3_text2(),
            __SYD.p3_text3(),
            __SYD.p3SubHeader()
        ],
        {
            genericStyle:["bg_cover"]
        }
    )
}

__SYD.p3SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:unset;display:flex;justify-content:space-between;align-items:flex-start;gap:20px;padding:0 ${__p(["p3SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};`,
            class:"p1SubHeader"
        },
        [
            __c(
                "div",
                {
                    style:`height:100vw;max-height:calc(100vh - 150px);width:${__p(["p3SubHeader" , "breakVal"],false) ? "100%" : "100%"};display:flex;flex-direction:column;gap:20px;background-image:url("./assets/toke_main.png");border-radius:15px;transform:rotateY(180deg)`
                },[],{genericStyle:["bg_fit"]}
            ),
            __SYD.p3_tab(
                {content:`Ensures smooth trading and strong market presence.` ,title:`KEKE's Tokenomics` , img:"toke_sub" , headerClr:" #a8e10c"}
            ),
        ],
        {
            createState:{
                stateName:"p3SubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    __flex_child:'row',
                    breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<1000px" , prop:{__flex_child:'column'}},
                    // {size:"<1000px" , prop:{breakVal:true}}
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , __flex_child:'row' , }//breakVal:false
            }
        }
    )
}


__SYD.p3_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get()
        },
        [
            __c(
                "p",
                {},["Buy $Alita"]
            )
        ]
    )
}


__SYD.p3_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "color:#175dfb;text-shadow:2px 2px 0px #171717;text-decoration:none;color:#fff;text-align:center;letter-spacing:3px;"
        },
        [
            __c(
                "p",
                {},["KEKENOMICS"]
            )
        ]
    )
}


__SYD.p3_text3 = () =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get()} text-align:center;max-width:unset;color:#fff;text-align:center;`},["$KEKE launched fair and free on Ethereum — no presale, no team wallets, just pure meme magic. Backed by the full chaotic love of Miss Piggy and fueled by frog-tier charisma, $KEKE brings legendary energy to the chain. With a fixed supply and liquidity locked, he’s not just here for laughs — he’s here to lead the meme meta, hand in hoof."])
        ]
    )
}

__SYD.p3_text4 = (textContent , headerClr) =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page3Text4.get() + `text-align:center;color:${headerClr};font-size:18px;text-shadow:2px 2px 0px #171717;font-size:30px;letter-spacing:3px;`
        },
        [
            __c(
                "p",
                {},[`${textContent}`]
            )
        ]
    )
}


__SYD.p3_text5 = (textContent) =>{
    return __c(
        "div",
        {
            style:SYD_VAR.pag1SubText.get() + "text-align:center;font-size:14px;"
        },
        [
            __c(
                "p",
                {},[`${textContent}`]
            )
        ]
    )
}

// __SYD.p3_tabs = () =>{
//     return  __c(
//         "div",
//         {
//             style:"display:flex;gap:50px;height:fit-content;width:100%;justify-content:center;flex-wrap:wrap;"
//         },
//         [
//             __SYD.p3_tab(
//                 {content:`Ensures smooth trading and strong market presence.` ,title:`Liquidity Pool` , img:"1" , headerClr:"#00cfff"}
//             ),
//             __SYD.p3_tab({
//                 content:`Rewarding our loyal supporters and early adopters.`,title:`Community Airdrop` , img:"2" , headerClr:"#ff6b6b"
//             }),
//             __SYD.p3_tab({
//                 content:`Fueling future development and innovation.`,title:`Dev Team` , img:"3" , headerClr:" #42ffb9"
//             }),
//             __SYD.p3_tab({
//                 content:`For strategic future use and project stability.`,title:`Reserves` , img:"4" , headerClr:" #ffe600"
//             }),
//             __SYD.p3_tab({
//                 content:`Driving global reach through campaigns and hype. `,title:`Marketing` , img:"5" , headerClr:"#e078ff"
//             })
//         ]
//     )
// }


__SYD.p3_tab = ({title = '' , content = '' , img = "basePlus2" , headerClr = "blue"}) =>{
    return __c(
        'div',
        {
            style:`width:calc(100% - 0px);max-width:${__p(["p3SubHeader" , "__flex_child"],"row") === "row" ? "380px" : "100%"};height:fit-content;border-radius:10px;padding:30px 0;margin-top:100px;position:relative;padding-top:150px;`,
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
                                            style:"width:300px;height:auto;transition:all linear .3s;",
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
                                    __c("li",{style:"margin-left:30px;"} , ["Zero Tax, Zero Nonsense"]),
                                    __c("li",{style:"margin-left:30px;"} , ["Pure Memes, No Schemes"]),
                                    __c("li",{style:"margin-left:30px;"} , ["Liquidity? Torched Forever 🔥"]),
                                    __c("li",{style:"margin-left:30px;"} , ["Maximum Fun Enabled"]),
                                    __c("li",{style:"margin-left:30px;"} , ["Full-Throttle Frog Hype 🐸"]),
                                ]
                            ),
                        ]
                    ),
                ]
            )
        ]
    )
}