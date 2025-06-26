import { __c, __p, __SYD, __v, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p1 = () =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:100%;min-height:fit-content;padding-top:unset;padding-bottom:unset;display:flex;justify-content:center;background-color: transparent;flex-direction:column;gap:10px;`,
            id:"p1"
        },
        [
            __SYD.p1SubHeader(),
            __SYD.contacts_p1(),
            __SYD.p1_CA_section()
        ],[],{genericStyle:["bg_cover"]}
    )
}

__SYD.p1SubHeader = () =>{
    return  __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;align-items:center;justify-content:center;gap:10px;`,
            class:"p1SubHeader"
        },
        [
            __c(
                "div",
                {
                    style:`height:fit-content;display:flex;flex-direction:column;gap:20px;padding:10px;`,
                    class:"p1SubHeader_text_cont"
                },
                [
                    __SYD.p1_mainHeader(),
                    __SYD.p1_subText(),
                    // __SYD.desktopNav_button()
                ]
            ),
            __SYD.goldenRings_container()
            // __c(
            //     "div",
            //     {
            //         style:`height:100vw;max-height:calc(100vh - 150px);width:${__p(["p1SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;flex-direction:column;gap:20px;background-image:url("./assets/main.png")`,
            //         class:"floatMainPic"
            //     },[],{genericStyle:['bg_fit']}
            // )
        ],
        {
            createState:{
                stateName:"p1SubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<1000px" , prop:{breakVal:true}}
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , breakVal:false}
            }
        }
    )
}

__SYD.p1_mainHeader = () =>{
    return __c(
        "div",
        {
            style:`text-shadow:1px 1px 0px #fff,2px 2px 0px #333333,3px 3px 0px #171717,4px 4px 0px #171717;
            text-transform:uppercase;font-weight:900;font-size:${SYD_VAR.page1MainFont_1.get()};color:#ffffff;font-family:font1;display:flex;justify-content:center;letter-spacing:5px;`
        },
        [
            // __c("div",{style:"min-height:50px;min-width:50px;background-image:url(./assets/speedy_icon.png);"},[],{genericStyle:["bg_fit"]}),
            __c("p" , {} , ["KEKE"])
        ]
    )
}

__SYD.p1_subText = () =>{
    return __c(
        "div",
        {style:"height:fit-content;width:100%;"},
        [
            __c("p" , {style:SYD_VAR.pag1SubText.get() + "width:100%;color:#ffffff;max-width:unset;text-align:center;"},["The Ultimate Frog Legend."])
        ]
    )
}

__SYD.contacts_p1 = () =>{
    return __c(
        "div",
        {
            style:"display:flex;gap:30px;height:fit-content;width:100%;max-width:unset;justify-content:center;flex-wrap:wrap;",
            class:"contacts_p1"
        },
        [
            __c(
                "a",
                {
                    style:"height:fit-content;width:fit-content;",
                    href:"#"
                },
                [
                    __c("div" , {style:"height:70px;min-width:70px;border-radius:50%;border:4px solid #000;background-image:url(./assets/frog.png);"},[],
                        {
                            genericStyle:["bg_cover"]
                        })
                ]
            ),
            __c(
                "a",
                {
                    style:"height:fit-content;width:fit-content;",
                    href:"https://x.com/keke_ethereum"
                },
                [
                    __c("div" , {style:"height:70px;min-width:70px;border-radius:50%;border:4px solid #000;background-image:url(./assets/x.png);"},[],
                        {
                            genericStyle:["bg_cover"]
                        })
                ]
            ),
            __c(
                "a",
                {
                    style:"height:fit-content;width:fit-content;",
                    href:"https://t.me/kekethefrog_Erc20"
                },
                [
                    __c("div" , {style:"height:70px;min-width:70px;border-radius:50%;border:4px solid #000;background-image:url(./assets/tel.png);"},[],
                        {
                            genericStyle:["bg_cover"]
                        })
                ]
            ),
            __c(
                "a",
                {
                    style:"height:fit-content;width:fit-content;",
                    href:"#"
                },
                [
                    __c("div" , {style:"height:70px;min-width:200px;border-radius:30px;border:4px solid #000;background-image:url(./assets/dex.png);background-color:#fff;"},[],
                        {
                            genericStyle:["bg_fit"]
                        })
                ]
            ),
            __c(
                "a",
                {
                    style:"height:fit-content;width:fit-content;",
                    href:"#"
                },
                [
                    __c("div" , {style:"height:70px;min-width:200px;border-radius:30px;border:4px solid #000;background-image:url(./assets/uniswap.png);background-color:#fff;"},[],
                        {
                            genericStyle:["bg_fit"]
                        })
                ]
            ),
        ]
    )
}


__SYD.p1_CA_section = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;max-width:600px;background:transparent;padding:20px;border-radius:10px;display:flex;gap:10px;flex-wrap:wrap;justify-content:center;align-items:center;align-self:center;cursor:pointer;"
        },
        [
            __c(
                "i",
                {
                    style:"min-height:40px;min-width:40px;font-size:20px;color:#fff;background: transparent;border-radius:5px;display:flex;justify-content:center;align-items:center;",
                    class:"fa-solid fa-copy"
                }
            ),
            __c(
                "div",
                {
                    style:`font-weight:900;font-size:${__p(["p1SubHeader" , "caTextSize"],"16px")};color:#fff;`
                },
                [
                    SYD_VAR.p1CAText.get()
                ],
                {
                    type:"c_a"
                }
            ),
            // __SYD.CA_copyButton()
        ],
        {
            events:{
                onclick:() =>{
                    navigator.clipboard.writeText(SYD_VAR.p1CAText.get())
                    __v['c_a'].textContent = 'Contract Address Copied'

                    const timer = setTimeout(() =>{
                    __v['c_a'].textContent = SYD_VAR.p1CAText.get()
                    clearTimeout(timer)
                    },1500)
                }
            }
        }
    )
}

__SYD.CA_copyButton = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.buttonStyle1.get(),
            class:"clickButton"
        },
        [
            __c("p",{style:"font-weight:900;"},["copy"])
        ],
        {
            events:{
                onclick:() =>{
                    navigator.clipboard.writeText(SYD_VAR.p1CAText.get())
                    __v['c_a'].textContent = 'Contract Address Copied'

                    const timer = setTimeout(() =>{
                    __v['c_a'].textContent = SYD_VAR.p1CAText.get()
                    clearTimeout(timer)
                    },1500)
                }
            }
        }
    )
}
