var ZombieFeeding = artifacts.require("./ZombieFeeding.sol");

contract('ZombieFeeding', function(accounts) {
  it("should assert true", function(done) {
    var zombie_feeding = ZombieFeeding.deployed();
    assert.isTrue(true);
    done();
  });
});
