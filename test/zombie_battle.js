var ZombieBattle = artifacts.require("ZombieBattle");

contract('ZombieBattle', function(accounts) {
    let zombieBattle;

    const account1= accounts[7];
    const account2= accounts[8];

    beforeEach(async function() {
        zombieBattle = await ZombieBattle.new();

    });

    it("test create Zombie", async function() {
        const logsZombie = await zombieBattle.createRandomZombie('zombie1', {from:account1});
        const event = logsZombie.logs.find(e=>e.event === 'NewZombie');
         assert.isTrue(event.args.name === 'zombie1');
    });

    it("test attack Zombie", async function(){

        await zombieBattle.createRandomZombie('zombie1', {from:account1});
        await zombieBattle.createRandomZombie('zombie2', {from:account2});

        let idZombie1=0;
        let idZombie2=1;

        await zombieBattle.attack(idZombie1,idZombie2,{from:account1});


        await zombieBattle.attack(idZombie1,idZombie2,{from:account1, gas:300000}).then(function (value) {
          assert(false, "cooldownTime != 1 days");
        }).catch(function(error){

            assert.isTrue(true); //can't second attack zombie
        })
    });

    it("test levelUp Zombie", async function(){
        zombieBattle.createRandomZombie('zombie1', {from:account1});
        let idZombie1=0;
        let payment = web3.toWei(1)*0.001;

        return zombieBattle.levelUp(idZombie1,{value: payment,from:account1}).then(function (value) {
            assert.isTrue(true);
        }).catch(function(error){
            assert(false , "can't level up zombie");
        })
    });



});
