//PLayers
let player1_turn = true;

//Buttons ID
const TL=document.querySelector('#TL');
const CL=document.querySelector('#CL');
const BL=document.querySelector('#BL');
const TC=document.querySelector('#TC');
const CC=document.querySelector('#CC');
const BC=document.querySelector('#BC');
const TR=document.querySelector('#TR');
const CR=document.querySelector('#CR');
const BR=document.querySelector('#BR');
const p1_div= document.querySelector('#p1');
const p2_div= document.querySelector('#p2');

TL.addEventListener('click',function(){
    print_TL();
    checkwin();
    checkturn()
});

CL.addEventListener('click',function(){
    print_CL();
    checkwin();
    checkturn();
});

BL.addEventListener('click',function(){
    print_BL();
    checkwin();
    checkturn();
});

TC.addEventListener('click',function(){
    print_TC();
    checkwin();
    checkturn();
});

CC.addEventListener('click',function(){
    print_CC();
    checkwin();
    checkturn();
});

BC.addEventListener('click',function(){
    print_BC();
    checkwin();
    checkturn();
});

TR.addEventListener('click',function(){
    print_TR();
    checkwin();
    checkturn();
});

CR.addEventListener('click',function(){
    print_CR();
    checkwin();
    checkturn();
});

BR.addEventListener('click',function(){
    print_BR();
    checkwin();
    checkturn();
});

function print_TL(){
    if(player1_turn=true)
    {
         TL.innerText='X';
    }
    else{
        TL.innerText='O';
    }
    TL.disabled = true;
}

function print_CL(){
    if(player1_turn==true)
    {
         CL.innerText='X';
    }
    else{
        CL.innerText='O';
    }
    CL.disabled = true;
}

function print_BL(){
    if(player1_turn==true)
    {
         BL.innerText='X';
    }
    else{
        BL.innerText='O';
    }
    BL.disabled = true;
}

function print_TC(){
    if(player1_turn==true)
    {
         TC.innerText='X';
    }
    else{
        TC.innerText='O';
    }
    TC.disabled = true;
}

function print_CC(){
    if(player1_turn==true)
    {
         CC.innerText='X';
    }
    else{
        CC.innerText='O';
    }
    CC.disabled = true;
}

function print_BC(){
    if(player1_turn==true)
    {
         BC.innerText='X';
    }
    else{
        BC.innerText='O';
    }
    BC.disabled = true;
}

function print_TR(){
    if(player1_turn==true)
    {
         TR.innerText='X';
    }
    else{
        TR.innerText='O';
    }
    TR.disabled = true;
}

function print_CR(){
    if(player1_turn==true)
    {
         CR.innerText='X';
    }
    else{
        CR.innerText='O';
    }
    CR.disabled = true;
}

function print_BR(){
    if(player1_turn==true)
    {
         BR.innerText='X';
    }
    else{
        BR.innerText='O';
    }
    BR.disabled = true;
}

function checkwin(){
    //PLAYER 1 WINS
    if (TL.innerText=='X' && CC.innerText=='X' && BR.innerText=='X' ||
        TR.innerText=='X' && CC.innerText=='X' && BL.innerText=='X' ||
        TL.innerText=='X' && CL.innerText=='X' && BL.innerText=='X' ||
        TC.innerText=='X' && CC.innerText=='X' && BC.innerText=='X' ||
        TR.innerText=='X' && CR.innerText=='X' && BR.innerText=='X' ||
        TL.innerText=='X' && TC.innerText=='X' && TR.innerText=='X' ||
        CL.innerText=='X' && CC.innerText=='X' && CR.innerText=='X' ||
        BL.innerText=='X' && BC.innerText=='X' && BR.innerText=='X')
    {
        disable_buttons();
        createbutton(p1_div);
        
    }

    //PLAYER 2 WINS 
    else if(
        TL.innerText=='O' && CC.innerText=='O' && BR.innerText=='O' ||
        TR.innerText=='O' && CC.innerText=='O' && BL.innerText=='O' ||
        TL.innerText=='O' && CL.innerText=='O' && BL.innerText=='O' ||
        TC.innerText=='O' && CC.innerText=='O' && BC.innerText=='O' ||
        TR.innerText=='O' && CR.innerText=='O' && BR.innerText=='O' ||
        TL.innerText=='O' && TC.innerText=='O' && TR.innerText=='O' ||
        CL.innerText=='O' && CC.innerText=='O' && CR.innerText=='O' ||
        BL.innerText=='O' && BC.innerText=='O' && BR.innerText=='O')
    {
        disable_buttons();
        createbutton(p2_div);
    }
    else{
        
    }
}

function checkturn(){
    player1_turn =!player1_turn;
}


function createbutton(winnerdiv){
        const restart = document.createElement("button");
        const rbtn_txt = document.createTextNode("PLAY AGAIN");
        restart.appendChild(rbtn_txt);
        const restartdiv = document.querySelector("#restart");
        restart.setAttribute(
            'style','width: 250px; height: 75px; background-color: rgb(255,210,127); color: rgb(0, 73, 55); font-size: 30px; font-weight: 800; margin-top:10px; border-radius:15px;',
        );
        restartdiv.appendChild(restart);
///////////////////////////////////////////////////////////////////////////////////////////////////////////
        const win=document.createElement("p");
        const win_txt=document.createTextNode("WINNER");
        win.appendChild(win_txt);
        win.setAttribute(
            'style','text-align : center; padding-top:50px;',
        )
        winnerdiv.appendChild(win);      
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
        restart.addEventListener('click',function(){
            reset();
            restartdiv.removeChild(restart)
            winnerdiv.removeChild(win);
        });      
}

function reset(){
        player1_turn=true;
        TL.innerText='';
        CL.innerText='';
        BL.innerText='';
        TC.innerText='';
        CC.innerText='';
        BC.innerText='';
        TR.innerText='';
        CR.innerText='';
        BR.innerText='';
        TL.disabled = false;
        CL.disabled = false;
        BL.disabled = false;
        TC.disabled = false;
        CC.disabled = false;
        BC.disabled = false;
        TR.disabled = false;
        CR.disabled = false;
        BR.disabled = false;
}

function disable_buttons(){
    TL.disabled = true;
    CL.disabled = true;
    BL.disabled = true;
    TC.disabled = true;
    CC.disabled = true;
    BC.disabled = true;
    TR.disabled = true;
    CR.disabled = true;
    BR.disabled = true;
}
