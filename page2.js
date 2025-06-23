import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p2 = () =>{
    return __c(
        "div",
        {
            style:`position:relative;height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;background-color:transparent;` + __sC['pages'](),
            id:"p2"
        },
        [
            __SYD.p2SubHeader(),
            // __SYD.page2_ring_big(),
            // __SYD.page2_ring_small()
        ],
        {
            // genericStyle:["bg_cover"]
        }
    )
}

__SYD.p2SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;justify-content:center;align-items:center;gap:20px;padding:0 ${__p(["p2SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};flex-direction:${__p(["p2SubHeader" , "breakVal"],false) ? "column" : "row"};`
        },
        [
            // __c(
            //     "div",
            //     {
            //         style:`height:100vw;max-height:calc(100vh - 150px);width:${__p(["p2SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;flex-direction:column;gap:20px;background-image:url("./assets/about.png")`
            //     },[],{genericStyle:["bg_fit"]}
            // ),
            __c(
                "div",
                {
                    style:`height:fit-content;width:${__p(["p2SubHeader" , "breakVal"],false) ? "100%" : "100%"};display:flex;justify-content:center;`
                },
                [
                    __SYD.p2_tab()
                ]
            ),
        ],
        {
            createState:{
                stateName:"p2SubHeader",
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

__SYD.p2_tab = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;padding:60px 20px;display:flex;flex-direction:column;gap:30px;border-radius:30px;",
            class:"primaryTab"
        },
        [
            // __SYD.p2_text1(),
            __SYD.p2_text2(),
            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;display:flex;gap:30px;padding:10px 0px;flex-direction:column;padding-top:50px;"
                },
                [   
                    __SYD.p2_text3(),
                    __SYD.p2_text4(),
                    __SYD.p2_text5()
                ]
            ),
            // __SYD.p2_button()

        ]
    )
}

__SYD.p2_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get()
        },
        [
            __c(
                "p",
                {},["read more about Alita"]
            )
        ]
    )
}


__SYD.p2_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "text-align:center;text-shadow:2px 2px 0px #171717;color:#ffffff;text-transform:unset;text-decoration:none;text-transform:uppercase;letter-spacing:3px;"
        },
        [
            __c(
                "p",
                {},["about"]
            )
        ]
    )
}

__SYD.p2_text3 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text3.get() + "color:#ffffff;text-align:center;"
        },
        [
            __c(
                "p",
                {},["$KEKE is the ultimate frog-based meme coin to hop onto Ethereum — a web3 lovechild of Kermit’s wholesome charm and Pepe’s internet infamy. It’s the fusion no one saw coming but everyone secretly wanted. If Jim Henson and Matt Furie swapped notes in a Discord server, $KEKE would be their chaotic green masterpiece. He’s cute, he’s cursed, he’s crypto-native — and he’s here to shake up the meme coin pond."]
            )
        ]
    )
}

__SYD.p2_text4 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text3.get() + "color:#ffffff;text-align:center;"
        },
        [
            __c(
                "p",
                {},["If Kermit and Pepe had an illicit love child, it’d be $KEKE.We’ve smashed wholesome Muppet nostalgia into the raw, viral power of meme culture — and minted it on-chain. While Pepe basked in his meme spotlight on Ethereum, $KEKE is here to reclaim the throne, swinging in with more sass, more shade, and way more ribbits. He's the remix the world didn’t know it needed — chaotic, charismatic, and unmistakably green."]
            )
        ]
    )
}

__SYD.p2_text5 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text3.get() + "color:#ffffff;text-align:center;"
        },
        [
            __c(
                "p",
                {},["Now the pond belongs to $KEKE.More than just laughs, he brings meme-fueled rebellion, frog lore redefined, and the spirit of Ethereum’s degen culture. Whether you’re here for the memes, the madness, or the moon — $KEKE is your frog. One foot in internet legend, the other on-chain — he’s the new face of frog supremacy on Ethereum."]
            )
        ]
    )
}

__SYD.p2_button = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.buttonStyle1.get() + "font-family:font1;align-self:center;",
            class:"clickButton"
        },
        [
            __c("p" , {style:"width:fit-content"},["read more"])
        ]
    )
}