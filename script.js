var playerHP = 100;
var playerDmg = 10;
var bossHP = 100;
var bossDmg = 10;
var playerShield = 0;
var bossShield = 0;
var plSH = false;
var bossSh = false;
var minValue = 0;
var maxValue = 100;
var playerAttacked = false;
console.log(bossHP + " boss hp");
console.log(bossShield + " boss sheild");
console.log(playerHP + " player hp");
console.log(playerShield + " player sheild");

// var bossHealthBar = document.getElementById("bossHP").value;
// var bossShieldBar = document.getElementById("bossShield").value;
// var playerHealthBar = document.getElementById("playerHP").value;
// var playerShieldBar = document.getElementById("playerShield").value;


// heal player or boss
function incrementHP(hpToCharacter, character)
{
return character += hpToCharacter;
}

// deal damage to player or boss
function decrementHP(dmgToCharacter, character)
{
return character -= dmgToCharacter;
}

// linked to player attack button.
 document.getElementById("attackPlayer").addEventListener("click", function()
{   
    if(!playerAttacked)
    {   playerAttacked = true;
        if(bossSh)
        {
            document.getElementById("bossShield").value -= playerDmg;
            bossShield -= playerDmg;
            setTimeout(function(){ bossChoice(); }, 1000);
            if (bossShield === 0)
            {
                document.getElementById("bossShield").value = 0;
                bossSh = false;
            }
            document.getElementById("turn").innerHTML = "Bosses turn!";
        }

        if(!bossSh)
        {
            if (bossHP === 10)
            {
                document.getElementById("bossHP").value -= playerDmg;
                bossHP = decrementHP( playerDmg, bossHP);
                console.log(bossHP + " dmg boss");
                window.location.href = "Winner.html";
            }
            else
            {
                document.getElementById("bossHP").value -= playerDmg;
                bossHP = decrementHP( playerDmg, bossHP);
                console.log(bossHP + " dmg boss");
                setTimeout(function(){ bossChoice(); }, 1000);
            }
            document.getElementById("turn").innerHTML = "Bosses turn!";
        }
    }
    // else{

    // }
});

// linked to heal button
document.getElementById("healPlayer").addEventListener("click", function()
{
    if(!playerAttacked)
    {   
        playerAttacked = true;
        if(playerHP === maxValue)
        {
            setTimeout(function(){ bossChoice(); }, 1000);
            console.log(playerHP + " player hp is full");
        }
        else if (playerHP < maxValue)
        {
            document.getElementById("playerHP").value += playerDmg;
            playerHP = incrementHP( playerDmg, playerHP);
            console.log(playerHP + " increase player hp");
            setTimeout(function(){ bossChoice(); }, 1000);
        }
        document.getElementById("turn").innerHTML = "Bosses turn!";
    }
});

// linked to the shield button
document.getElementById("shieldPlayer").addEventListener("click", function()
{
    if(!playerAttacked)
    {
        playerAttacked = true;
        plSH = true;
        if(playerShield === maxValue)
        {
            setTimeout(function(){ bossChoice(); }, 1000);
            console.log(playerShield + " player shield is full");
        }
        else if (playerShield < maxValue)
        {
            document.getElementById("playerShield").value += 10;
            playerShield += 10;
            console.log(playerShield + " increase player shield by 10");
            setTimeout(function(){ bossChoice(); }, 1000);
        }
        document.getElementById("turn").innerHTML = "Bosses turn!";
    }
});
// linked to random button.
document.getElementById("randomSpellPlayer").addEventListener("click", function()
{
    if(!playerAttacked)
    {
        playerAttacked = true;
        tempNum = Math.floor(Math.random() * 3);
        console.log(tempNum + " tempNum")
        if (tempNum === 0)
        {
            if(bossSh)
            {
                if (bossShield < 30) 
                {
                    if (bossShield === 20 && bossHP === 10)
                    {
                        document.getElementById("bossShield").value = 0;
                        bossShield = minValue;
                        bossSh = false;
                        bossHP = minValue;
                        window.location.href = "Winner.html";
                    }
                    else if (bossShield === 10 && bossHP === 20) 
                    {
                        document.getElementById("bossShield").value = 0;
                        bossShield = minValue;
                        bossSh = false;
                        bossHP = minValue;
                        window.location.href = "Winner.html";
                    }
                    else 
                    {
                        document.getElementById("bossShield").value -= playerDmg * 3; 
                        bossShield -= playerDmg * 3;
                        tempNum = Math.abs(bossShield);
                        bossHP = decrementHP( tempNum, bossHP);
                        console.log(bossHP + " dmg boss");
                        setTimeout(function(){ bossChoice(); }, 1000);
                        bossShield = minValue;
                        bossSh = false;
                    }
                    
                }
               else if (bossShield === 30)
               {
                    document.getElementById("bossShield").value = 0;
                    setTimeout(function(){ bossChoice(); }, 1000);
                    bossShield = minValue;
                    bossSh = false;
               }
               else 
               {
                document.getElementById("bossShield").value -= playerDmg * 3;
                bossShield -= playerDmg * 3;
                setTimeout(function(){ bossChoice(); }, 1000);
               }
            
            }
            if(!bossSh)
            {
                if (bossHP <= 30)
                {
                    document.getElementById("bossHP").value = 0;
                    bossHP = minValue;
                    console.log(bossHP + " dmg boss");
                    window.location.href = "Winner.html";
                    // then switch over to win page
                }
                else
                {
                    document.getElementById("bossHP").value -= playerDmg * 3;
                    bossHP = decrementHP( playerDmg * 3, bossHP);
                    console.log(bossHP + " dmg boss");
                    setTimeout(function(){ bossChoice(); }, 1000);
                }
            }
            document.getElementById("turn").innerHTML = "Bosses turn!";
        }
        
        else if (tempNum === 1) 
        {
            if(playerHP === maxValue)
            {
                setTimeout(function(){ bossChoice(); }, 1000);
                console.log(playerHP + " player hp is full");
            }
            else if (playerHP <= 70)
            {
                document.getElementById("playerHP").value += playerDmg * 3;
                playerHP = incrementHP( playerDmg * 3, playerHP);
                console.log(playerHP + " increase player hp");
                setTimeout(function(){ bossChoice(); }, 1000);
            }
            else
            {
                document.getElementById("playerHP").value = maxValue;
                playerHP = maxValue;
                console.log(playerHP + " increase player hp to max");
                setTimeout(function(){ bossChoice(); },1000);
            }
            document.getElementById("turn").innerHTML = "Bosses turn!";
        }
        else 
        {
            plSH = true;
            if(playerShield === maxValue)
            {
                setTimeout(function(){ bossChoice(); }, 1000);
                console.log(playerShield + " player shield is full");
            }
            else if (playerShield <= 70)
            {
                document.getElementById("playerShield").value += 30;
                playerShield += 30;
                console.log(playerShield + " increase player shield by 30");
                setTimeout(function(){ bossChoice(); }, 1000);
            }
            else 
            {
                document.getElementById("playerShield").value = maxValue;
                playerShield = maxValue;
                console.log(playerShield + " increase player shield by 30");
                setTimeout(function(){ bossChoice(); }, 1000);
            }
            document.getElementById("turn").innerHTML = "Bosses turn!";
        }
    }
   
});

function bossChoice()
{
    tempNum = Math.floor(Math.random() * 4);
    console.log(tempNum + " tempNum")
    if (tempNum === 0)
    {
        damageBoss();
    }
    else if (tempNum === 1) 
    {
        healBoss();
    }
    else if (tempNum === 2) 
    {
        shieldBoss();
    }
    else 
    {
        randomSpellBoss();
    }
    playerAttacked = false;
    document.getElementById("turn").innerHTML = "Your turn!";
}
// deals damage to player
function damageBoss()
{
    if(plSH)
    {
        document.getElementById("playerShield").value -= bossDmg; 
        playerShield -= bossDmg;
        if (playerShield === 0)
        {
            document.getElementById("playerShield").value = 0; 
            plSH = false;
        }
    }
    if(!plSH)
    {
        if (playerHP === 10)
        {
            document.getElementById("playerHP").value -= bossDmg;
            playerHP = decrementHP( bossDmg, playerHP);
            console.log(playerHP + " dmg player");
            window.location.href = "Loss.html";
        }
        else
        {
            document.getElementById("playerHP").value -= bossDmg;
            playerHP = decrementHP( bossDmg, playerHP);
            console.log(playerHP + " dmg player");
        }
    }
 
}
// heals the boss
function healBoss()
{
    if(bossHP === maxValue)
    {
        console.log(bossHP + " boss hp is full");
    }
    else if (bossHP < maxValue)
    {
        document.getElementById("bossHP").value += bossDmg;
        bossHP = incrementHP(bossDmg, bossHP);
        console.log(bossHP + " heal boss hp");
    }
    
}
// gives the boss a shield
function shieldBoss()
{
    bossSh = true;
    if(bossShield === maxValue)
    {
        console.log(bossShield + " boss shield is full");
    }
    else if (bossShield < maxValue)
    {
        document.getElementById("bossShield").value += 10;
        bossShield += 10;
        console.log(bossShield + " increase boss shield by 10");
    }
    
}
// random spell for boss
function randomSpellBoss() // need to change player values to boss
{
    tempNum = Math.floor(Math.random() * 3);
    console.log(tempNum + " tempNum")
    if (tempNum === 0)
    {
        if(plSH)
        {
            if (playerShield < 30) 
            {
                if (playerShield === 20 && playerHP === 10)
                {
                    document.getElementById("playerShield").value = minValue;
                    playerShield = minValue;
                    plSH = false;
                    playerHP = minValue;
                    window.location.href = "Loss.html";
                }
                else if (playerShield === 10 && playerHP === 20) 
                {
                    document.getElementById("playerShield").value = minValue;
                    playerShield = minValue;
                    plSH = false;
                    playerHP = minValue;
                    window.location.href = "Loss.html";
                }
                else 
                {
                    document.getElementById("playerShield").value -= bossDmg * 3;
                    playerShield -= bossDmg * 3;
                    tempNum = Math.abs(playerShield);
                    playerHP = decrementHP( tempNum, playerHP);
                    console.log(playerHP + " dmg player");
                    playerShield = minValue;
                    bossSh = false;
                }
                
            }
           else if (playerShield === 30)
           {
                document.getElementById("playerShield").value = minValue;
                playerShield = minValue;
                plSH = false;
           }
           else 
           {
                document.getElementById("playerShield").value -= bossDmg * 3;
                playerShield -= bossDmg * 3;
           }
        
        }
        if(!plSH)
        {
            if (playerHP <= 30)
            {
                document.getElementById("playerHP").value = minValue;
                playerHP = minValue;
                console.log(playerHP + " dmg player");
                window.location.href = "Loss.html";
                // then switch over to win page
            }
            else
            {
                document.getElementById("playerHP").value -= bossDmg * 3;
                playerHP = decrementHP( bossDmg * 3, playerHP);
                console.log(playerHP + " dmg player");
            }
        }
       
    }
    else if (tempNum === 1) 
    {
        if(bossHP === maxValue)
        {
            console.log(bossHP + " boss hp is full");
        }
        else if (bossHP <= 70)
        {
            document.getElementById("bossHP").value += bossDmg * 3;
            bossHP = incrementHP( bossDmg * 3, bossHP);
            console.log(bossHP + " increase boss hp");
        }
        else
        {
            document.getElementById("bossHP").value = maxValue;
            bossHP = maxValue;
            console.log(bossHP + " increase boss hp to max");
        }
    }
    else 
    {
        bossSh = true;
        if(bossShield === maxValue)
        {
            console.log(bossShield + " boss shield is full");
        }
        else if (bossShield <= 70)
        {
            document.getElementById("bossShield").value += 30;
            bossShield += 30;
            console.log(bossShield + " increase boss shield by 30");
        }
        else 
        {
            document.getElementById("bossShield").value = maxValue;
            bossShield = maxValue;
            console.log(bossShield + " increase boss shield by 30");
        }
    }
}


//document.getElementById("progress").value = 100;
//document.getElementById("progress").max = 200;
//https://www.potterapi.com/v1/characters/?key=$2a$10$H1pmgojMlcHoQBh9QhzYYeYnIfKZtYOxZR2FQ6SH0lNbYzgMEQVme
//&house=Slytherin
