require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remind attitude inflict enter outer giggle'; 
let testAccounts = [
"0x38e8272d7b599e99ca594da9691a85815883e7fab1e50231a6e3da9e027c0ee0",
"0xb510b96804a5572713805fbc448f82e477e63dfa11f43d3e992b1b71aacfb86c",
"0x3548be267c0203d54bb6e94b0f69e5312bb2d1b6fca39469c396a2d9f175e9bc",
"0xc60f713d61c04ed28ab7bf54a897d28c169798e1d126f5ec30466077f933b85e",
"0xb5bea0e8c4f163330508c382c6bd6d2f6429dc562201581da90b301bf772a91c",
"0x5045a7a21d13b63312eed7523881fea9ca11560fec2c5e2d49bc204eaf4ab178",
"0x8e30c8f246f2e0ddf8fc545395e64ca582767425999977c19a3cf43eefc13556",
"0x21e28e17032abda22bf8ec8f68c29ec88ab7dc08f55fd1958731491a919b67c3",
"0xc4d1d0d57f1bdf53b65c6025e67f3d686e703dc85c6024a93498e2deb6c760a7",
"0x3cb664407214c5107b138d6f2b4915393593bd2daea9b948611d6d0e046e1d48"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


