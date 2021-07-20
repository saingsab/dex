const Dai = artifacts.require('mocks/Dai.sol');
const Bat = artifacts.require('mocks/Bat.sol');
const Rep = artifacts.require('mocks/Rep.sol');
const Zrx = artifacts.require('mocks/Zrx.sol');
const Dex = artifacts.require('Dex.sol');

contract('Dex', (account) => {
  let dai, bat, rep, zrx;

  const [DAI, BAT, REP, ZRX] = ['DAI', 'BAT', 'REP', 'ZRX']
    .map(ticker => web3.utils.fromAscii(ticker));

  beforeEach(async() => {
    ([dai, bat, rep, zrx] = await Promise.all([
      Dai.new(),
      Bat.new(),
      Rep.new(),
      Zrx.new()
    ]));
    const dex = await Dex.new();
    await Promise.all([
      dex.AddToken(DAI, dai.address),
      dex.AddToken(BAT, bat.address),
      dex.AddToken(REP, rep.address),
      dex.AddToken(ZRX, zrx.address),
    ]);
  });
});
