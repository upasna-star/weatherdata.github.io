'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e5ccfdd920f734ad420b715982a1f033",
"version.json": "23e9d24d5b36279cbfede1d4ebb467c0",
"index.html": "04ff615954a2e8592291f4c1846e78c4",
"/": "04ff615954a2e8592291f4c1846e78c4",
"main.dart.js": "cd8a7b1f74e4af8565ce814805a07603",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dae412191356a938d12aec62db4d6567",
".git/config": "50870620f5334c65d592d7c6e6cc15be",
".git/objects/61/01f5ac293231a3d30054e9eaa5686fa985e4cd": "10051e2b823127b4fbc00afb30b9916c",
".git/objects/0d/56346e5cd0d6338ddce03815c85b8ef8224517": "fbe3e745fdeac03bd629d093b7d9c42c",
".git/objects/0c/ada7e928da046572b2ef0c05386c6fd3b27b47": "25fd66d95b83c999fc7ffc7fb002c008",
".git/objects/0c/52bb2ab54a8ff9a833e388ceb16021398ba9f4": "d2426cdf257f90c2e2b0d6514baa9af0",
".git/objects/3e/145f44cc1d254d75b37727df2926b68513907b": "3f16e9aa99e1af1954130e937c9c1371",
".git/objects/3b/40c37758f718e4b54cff51c606c7119298b594": "990d2408997ee71a0c3a4e39f9a885c8",
".git/objects/3b/3a7c2a14754dbc32e271c3f900960e9d0ae443": "f9ad20ddbb71f3b215de6196376eba0c",
".git/objects/03/b5ed6278fe3d339068f03daaeb3ee642bb931d": "d3dd2c3d318ac7155226be8beb7add71",
".git/objects/9e/efc4561040729c8815ad5154ef76eedbb15cb2": "3bfd27cf2a3342cbfdd9b365392056f2",
".git/objects/32/cdf90fbd269b743577acf23776f2b3795985ac": "d537b434fd07710321859d6bd8ab6ec2",
".git/objects/35/220c57ee17f752d8600913ec748715c46805d3": "92710ab374c8617f46fab6ff7f86422b",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/69/d14bcbbdea2da190a1da75b72b4acebe613555": "f994d2eed44fc27f05ac5244d93e8a4c",
".git/objects/51/9b48cc37b2a9a4d856477c92ce87ac735455e3": "8d5e78427c5aa3000d1b9a8b89ec0fea",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/a2ab1e02f72bc51c7f505f23dc44f2aefb35e9": "7525333c18758348b648d5da52177139",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/f1c2b90807e50a34b0bd3fa206102b85e06c7e": "98991dea35e38970010defacc97595e2",
".git/objects/60/f69f1d5185ddfc5fec50fabd1a0b94a9dccc7e": "35716bd8be5e7920fc748635531a1c4d",
".git/objects/a4/91fecf3f1db2ad491fc3c6ee64a620543684dc": "e7b3e750585cfdde1b82b6ccc297eb34",
".git/objects/a3/aa93447f720fa85e9f0e8682a5f155568b60e0": "bfbe21d09ad7665ebbf45bbec949c519",
".git/objects/a3/ac3ef40942d97b66029f49e0d3c6d1bdc89d92": "e422478a45b663eda9c569adf6eedef4",
".git/objects/b5/9f45517dc686b29ceee49861164b326f3c4450": "6c10258b95f21d7a529495873c1492bd",
".git/objects/b5/b8189d592f9d0778ac6f852e7cf9f15a253372": "f612f151b2334e38deba7eac5a72db3c",
".git/objects/b2/d530b70fffdde3379c98a390e9c4ffa9629283": "64a68b12685672b25835c1a4340f97b9",
".git/objects/b2/b11126001b768bbe6f90206cd2a6dc2039cc03": "132ef08242bf57371b6ba61242e35fe7",
".git/objects/d9/5b5434a0bbb3429215bb876f90545e0cac6cbb": "9d5bbac7fa636afa424d11c6ba7519a6",
".git/objects/d9/0a6b9e89751ec1c26f60be6486ba03f5902645": "455a33300ed03988d86450c802c38133",
".git/objects/ac/fd34811f225e0d627fc4acdf42d33e3ab38160": "825f4ef16ff3031f673c6c4c44c297e0",
".git/objects/ad/4528aec7d366a346125cf39f71a7f5ae3ae8e6": "f51195e24a44d414a9c5205d4b177863",
".git/objects/bb/51fe1fd6ca4ee5493c3b8e86c0cff6fd31c2ee": "560565b8577546adde54ad7959b4a593",
".git/objects/d7/7fa6d0009e37a131ada769bf1bf15184c5c486": "a82f07667a794d8e4b8584f9019786e3",
".git/objects/d0/172a969c2f519da8bd20e2cdc0be9f565c7e85": "97932aeee24a269fa4d14c5b4ac45f05",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/678651dea690d9b029f294895404500e4739ff": "91624e5f2d93946e478730bd094642c5",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a5/13506e0ed946e90ddb74723a41103ee94db16a": "b225e9cecee8dd1d77d7ab444a3e3a64",
".git/objects/bd/ff91d302b221a81b165b63ba165f76a2f08bd1": "2501f50cf0736c8c0b459d8cfea6d858",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/d35e243c855f60240b5e7195259f0dce8165ec": "2e47a947086683bfeb41b45edcab89a9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/24e9df1d569c7448b441988b3fbd6022270622": "eaa9c29074e9047561110b594026c9ae",
".git/objects/bc/e69f400c9544c7501e41e41ab860fd53303903": "3fc27d5f4f4b15da6c6f9c1e7ef39aa9",
".git/objects/bc/26e5d552764ae0873f6eb3d26614da21365ea2": "2013024d460cb4c0a930d87e021e6f95",
".git/objects/f4/d86cd3a575ff9f7a759a20eda0e2f20a4bcb77": "1527edaa2d6b36d88bb29540a03765fb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/c9ffce9d3940c41d5e85d386968340d86cd747": "5dca390ac15acec53dac3457194ad84c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/fbc3268facb02cc0e051fd30a6673bd90293d8": "a511b849909196435a244167b8573191",
".git/objects/f2/f76a710f6d7bf77ff7433089ea325133ec52f3": "ab7a3eec18f2234ac5a4a930ea1588bd",
".git/objects/e3/75d05c546e9c38acaf9c4aa907363d8aac377c": "e4a7dd84a06edfdfaded4c84055ac471",
".git/objects/ca/333ade6407faab3dec5b8b27e32203ca63dd8f": "30d01d35a21e6b415046e80ef1207c9c",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/944c952c05285e5d08b7e38343236fd233329f": "69e1669996f74af1de6ce6327140b1a9",
".git/objects/fe/db34a6d93240d275dcc3d238e8e10a6770de84": "ef721016e57c9b8f5857c9f8a4765410",
".git/objects/fe/513debdbe6eb2425baaf1d0633079dd882dd61": "25446f7ee96e91d3517c93c49719ce0d",
".git/objects/ed/c38e161af56e1d719f06691cf60d38598ea796": "14705e2510cd18af69c3bc5f74af0711",
".git/objects/ed/18d5e4c63fb88384ca417e876e3790ab3462b0": "0efad699201e101b9225465d99a45411",
".git/objects/ec/e8e68600357453995302f35624a5e6523f9043": "8d1d45f541df5249706f3896768c7d2a",
".git/objects/ec/b24b3e21e0934dd1546c43857e327db186477e": "848c00ec5599a58788e2cc406e342b04",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/11/6fdd7a3fc01bd35211861ca6e3276196bae381": "edac09812053a67c360ab996794e1bd6",
".git/objects/29/fecd0f3964472f13e269c14690d669ae259be4": "03f4cbfcaab895c3eaa106c4c67b5caf",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/89/cca3ea41e1a711569c65e30a67d8a78e1d6676": "1c7182c3f91fa98b2706dd9e945e9ba9",
".git/objects/45/b68607a2661afeab47346d6944737eef6d98d9": "ed0fe1be44958038dad187f6649fd824",
".git/objects/73/c9432c7d158364544274165ab47933af0406a5": "a9f2f169af9c8318b3d61ec601f6aea4",
".git/objects/87/f20f7fa6377b54fc81893fe8bb6ad51a74a4a4": "a3f20ba349bf9b3b27581d9096c1cdd2",
".git/objects/80/21210e4fe3bd9f33717b9875bb85019e3e1f52": "b085b6919ffdc4ef34d753243fb1247b",
".git/objects/74/af06039b85c47cf65e4a65ae8bad5cad4215a1": "2c21bd35033064c2b691ac897a747360",
".git/objects/28/17707a55b42b12cd0e57d4f0e4902449fd2813": "3c302dbed5eec52ea7ddb35f908b8e75",
".git/objects/28/c8c42eaca17dcc5b609714077d3b5687f9c88d": "9615d7ffb96b96fe8d3027acbc8af858",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/91aedb2b7072316e32c4ad9f3fe8094236e42c": "40e817b026a9cbc8cd238742706448b3",
".git/objects/26/c863fcf1dddb1ac7e6668162920fe4eff0b41e": "743351df4c4124d48ffe3e3ba472173d",
".git/objects/21/3399d407440d63248c9b21258c3ae4f86eadf5": "2c0719b3606d491530b52722231c7f32",
".git/objects/72/40feae6ae4bcc6ce4809d40d89fc31e423e56d": "3b7044368e87550606a39381933a1253",
".git/objects/72/caec70779fd1cedb332bfa56fa434821059a43": "a7fa8d127d8de726c66f24d418fe0847",
".git/objects/43/4623d3774324e6813f6b1a844eb6ae91b11d7e": "21a409ac247e9e822bc20389691d65a9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/2c33408a00dde38ac8eafa7b9c5bba8c03e288": "21d3f21cd47d0d3f33dbfb4153c8a01a",
".git/objects/6e/67a2ea30c9fd088bb53a5d4a1145fb1fcc92cf": "4f8483133d64d2176d15d8f5e80ce3d0",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/09/cc529e5b8ee10c33c30ca8437ac3c4fbb0205f": "edd2cd48a8028fe39e6b0adc307c55cb",
".git/objects/5d/7c91bb4ae71c0f346077e604d4e9d904dd3770": "45bd07938e57570eeb20e8c7d9146bdc",
".git/objects/5d/a2d8ba98bf7f8de6b9022e2f2b276e037ea7b5": "b789ac4e2eaba57c1ab82b15cedbc06a",
".git/objects/31/8b3a91933ff986727703b7d8493c05dacb52ea": "571bcd031c904d3c67a835a3a08c368b",
".git/objects/91/a851a4865936cab00f562a7c8280d7423b6746": "497cca7dbe92a3ce57f2f146b7b15e08",
".git/objects/65/d070214483627afa832f85a8e968feda75d813": "cab4aed3db844a047ab207fc07a83a81",
".git/objects/65/1d8390593c000aeea2171d28de65cefdaeac38": "efc096ce3cbf8be343aa04161dd24d83",
".git/objects/3a/1fc0b380a94c85a5ab543ae7483ad264c98e29": "c78b7933d2676434bd0bf9c713df62e3",
".git/objects/3a/c6dabccc762773b2df08225aeb5d1594f4474b": "e1db030aaee9d5a5ed436b372c9562c4",
".git/objects/3a/fbaf2f7592ceb2f283e90c31cd052fb2dac76f": "0ed84c7a2577aa8e9ba0c34fbdfcdfd4",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/98/1258f212602e619a7051495141bdb0a7290b40": "b7d3646326c1863065bd0939fa0d1ee9",
".git/objects/53/ee8abed5ce8244699c65e6eda2b4215e7bb56d": "ca9b997e3a096143715db7d1ddc535ce",
".git/objects/3f/0e96e4b15107fd11e2bb2de71f8c49096daf57": "5350b20b196b3a3a29179021b2e6877f",
".git/objects/6c/b9467e301484b103daa6c977b43ea5ce44eec9": "1502c3593e21bfa4d977b19d0d1e69c4",
".git/objects/99/935b703b07c242049f8829de38e327aab3b19d": "0c2833b15a14d691e6587e15adebeb01",
".git/objects/55/f18c2ad8aa97fa6e1264f059e8f1e319ab602d": "194c9010e71501726806a0da351f760a",
".git/objects/97/a120764ac440f96a75ebc714d35a1b7ececc06": "74d326de2fe1d69527cb068b7d69b3a3",
".git/objects/90/47862ec4db478abae19a4d83bce04c5042bd56": "9c2895fcb1393a42f0684c2a555b4b1a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/9798376f11028ec52f02582c36aa2039d8cac2": "3bf55950f83ecd688f3e6be5a2e826bb",
".git/objects/a9/834def0604f515360dfff29b667aecc66a2071": "99c3e74b816a3a36315742f48a19027f",
".git/objects/a9/d10e11dfa16ceba628e5dbc9dc28cfc48b17f2": "23fdffc12f30b6fa74990bbc72951c59",
".git/objects/af/b6f3cfedc21fecab890c65d8d4dd373cba0c19": "9e1e35d38dd7f5bf500141485b2bd3ad",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/7b37e0adee147fe781a96e044724762d9c63cb": "c07a898d69980abca44e36c32f02c312",
".git/objects/db/0a95174204865637c8045ee9a8059056259803": "78c160bd5cf7f17673d7c4feabf71f83",
".git/objects/a6/f900a0551518119d4f00ba049ac1abc0be6287": "52c719d60fefaf042dd27feb4bba36de",
".git/objects/a6/82c48824fe3a1523792d77a117f44f230bdecf": "e4fad19e995ef047e2bd991feb4927bf",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/53e3f31a37faedb5c40396368b9c712b31412a": "578556ca860da3a93c9e80872c53e234",
".git/objects/b9/0c59e83d4b120be718fe0bfb187944ab0f3edb": "d4cfdea53e9c8c28b65f5be759dfeca4",
".git/objects/a1/42f54deac2f6279b99813d402e951cb55ce9da": "de70f9cc12598c1e313b04635b5c2920",
".git/objects/a1/7960c786d57c8aa3106ab9e736e2a98e6d2f2b": "c223edacd7099c7b9673f11380e4cb6e",
".git/objects/ef/6026813ebc70999a65d5a21c0b874c46d39a51": "b118a198f4ccf4d4b0054bb3f2428a42",
".git/objects/ef/374a68ea087c2c9f576aa2ce0c942a131665e4": "6aad50a7dc66eced56f06a3edc1bf68c",
".git/objects/f9/8e83023fce213f9cda86df4fb6d85a8c4ab152": "45f25d33a0e099a2443c2c813b41dd28",
".git/objects/c5/369b18f39d51ef71cff4074b9682979cd9385c": "618bd4684a9fd86641282a53f346979b",
".git/objects/c2/2580f5d1a401c4069018a8e2bfa252ec46d7cb": "f7fffe129b5b14017d4f8ab3acfde388",
".git/objects/f6/060a0c23dc82ecb2bd6909cbe59363aefa15b9": "ada679c65e41d49b81f0e3429f29652e",
".git/objects/e9/2add62e2f36c0ea4ee90df599efe2991b660a2": "e773ac16dba4548ed764c8424d7aadd5",
".git/objects/f8/834aefeaea8e1916a5c39df55f35dfa3ccd6e3": "5ac3b9be331c633076509afa86d3b7c5",
".git/objects/f8/03ebc9aed59ddf124b9dc8336166a74c37885e": "59b056faebb31e537405fa5d0ca2dd11",
".git/objects/46/1034643c6b7a397c4fea3c0c866b7e7c190832": "813e2666ca365994d2f9bb550037d765",
".git/objects/2c/d8c3e35f893117500936a0dfddd610c82a79e9": "5d24bbcc6240500384e809628d84ac97",
".git/objects/2d/12ad923e83dbce66c3ba21e3b60543cdc1b7e6": "9eeb8dda2ca6bb7ce11f7b5dea3c9687",
".git/objects/41/08c88c5835c05779f2925564b4ae50c752c8df": "c6f1e7130eec46761f8aa56a012dc1b8",
".git/objects/83/b23974665576210a4f07588b69804feecf5cae": "902e172c38150f5c1408550633b0cd29",
".git/objects/1b/f78bdc2d07a036f24fdd9894b7a403f3a4f682": "db562ec9560a4b3da159a37a47cc7d3a",
".git/objects/77/1d3c44f3d9c2687119233dada177569813c16b": "7ef7d1763fd5e414beeb0200ecf92cad",
".git/objects/70/d7726133957d911b72de3d662d43bb64a2c466": "6d8c9ef3e9117e44bdbbcdfcf3de6114",
".git/objects/84/63997b46918ad039ffa35c9688d64bda33c985": "3f51f4ffc9f263333ea69e979d32e298",
".git/objects/4a/819c0160e2c79cc5a4719e32cd21ba0482cfbc": "01f564d8986ede7417d307d9c4b5a090",
".git/objects/23/58a1d6d4682587bf51f4bb0c6aea36e069ea5a": "db00386e855da76910d83ab6ecba6739",
".git/objects/23/54d471a56b3ad4f1b4bd892691a7695421e50e": "8f1932a3bcf1dad424e8cda6cece8af2",
".git/objects/8d/c2eb553dffae8e2cf18a65c2be5483411d7139": "676367a188b0a8ea18fe2cdca8238b45",
".git/objects/15/244013b20d3c7a75b779e5f85233ad618a4f93": "82948cca53eded718206fce5de4a2ba1",
".git/objects/12/2b319d4f3983b1faa7c90023a0ac579e8e55e0": "0e1944c37c58239949a62f85a1d7a1d1",
".git/objects/12/c540938f5ecf9ba9ea8299fbf9e01f006a612a": "98a4c5328fb90b8a097a67507bb20b6b",
".git/objects/1d/daa7e88bab8f1e9dc1d06aaabd510a6a82f6f1": "08b2542d06f5c41df384958d0c4aa2e9",
".git/objects/1d/f9b030d5f3ea5275c4ec495ba1d3613f2c515c": "a32dc84c2a6d868012749f869112da2c",
".git/objects/71/c97a33ccd56f51efa4e535033052bb117e3ab3": "97303a3f5fd1ead7a28286d8083d6eb1",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/82/ed4644ccbce5a6b2dc316fa22f13860d1baf27": "53592682b0d12fc4dec54750bfe38d83",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/40/01c600407acfab9fb2075d93c8015cf311cd31": "d856344e749305c9e234f7118957b904",
".git/objects/47/56542d08f32006fd13546d7bd23d9d952a846f": "f595b54bfb8d84fb29aabcff4ad97ddb",
".git/objects/8e/3592139fe2bbb6fb09204ee3f2c0d1cc5dee56": "a2f7863be21bb647db8b58141a1c308f",
".git/objects/22/758d64e938e2709edec63766dd3995ed45dd6d": "a6036935c90b07cd33ef3f136710d676",
".git/objects/25/c5acf510c0c088ef566a5e67eaaf62e094e073": "299b7e378c69b69f660fdcb8dd61b1e4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "29bdbe8cdd902b9deb88cb3b416366ed",
".git/logs/refs/heads/main": "03045c19e6aad752522c6b8307c31bb6",
".git/logs/refs/remotes/origin/main": "817ef0fccd0b2cf73ca33d99d29a5668",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2d4ed7a9e1e22d9a8a3dd499d0b1df73",
".git/refs/remotes/origin/main": "2d4ed7a9e1e22d9a8a3dd499d0b1df73",
".git/index": "7006ac1d0da23e2657dd12bb4c1dcb93",
".git/COMMIT_EDITMSG": "f535d8e6d6568ce7eef9cc825ac5098a",
"assets/AssetManifest.json": "52c7e73cf271f2a2d80433c21731bfed",
"assets/NOTICES": "0e7f562ad4c36064f3b4bdd1ef014ae4",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "864e5bb0cfaf1dc89b923e0ddfb9c0f5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4c9a321d1a1326c8a90b14c411f8d84a",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/awadh_logo3.png": "fe345a43215d073ad22791dedd50fee3",
"assets/assets/images/deshraj_sir.png": "1d713a72fc2dc881c000490b81b9197c",
"assets/assets/images/login.png": "b56ef485cbc7f4f4f5269dd2abff6124",
"assets/assets/images/wall1.webp": "f022b112de7f5954e8c7d8cc0a9371be",
"assets/assets/images/login_bg.jpg": "5cbdc3443f0a2aadb0970a05bf5661dd",
"assets/assets/images/cloud.gif": "e186139f660889e5a793f3546a6eee7a",
"assets/assets/images/partially_sunny.png": "933bba089226de09852fc771a4944e04",
"assets/assets/images/bbg.webp": "76b0d954388b44441f73855a50310649",
"assets/assets/images/afternoon.jpeg": "3ed49643f174d744297b180e98e8e179",
"assets/assets/images/ASIDE.gif": "ace30db8797a876fa29f3cdf5deac29c",
"assets/assets/images/evening.jpeg": "c5c8b817f22106c3c6b48bae50e7113e",
"assets/assets/images/sct_logo.jpeg": "057c783fe9caf58410247563e7ef82c0",
"assets/assets/images/farmer_query_bg.jpg": "13c024a39806bf7d3ba1667ebf4bd251",
"assets/assets/images/tarantarancow.jpeg": "641d237ae8c286c08baeb31b0dc21591",
"assets/assets/images/weather_bg.jpg": "2b0d80f8f31276de0f4c77b34e77ecf5",
"assets/assets/images/mission.jpeg": "dd3abcff7d1bc1f2b9e85527c0382239",
"assets/assets/images/contact_background.jpg": "3721750cbc376a9e696f0707bafd08a8",
"assets/assets/images/bg.webp": "dd71ad412878f484a4357807c738b4fa",
"assets/assets/images/awadh_logo.jpeg": "b7f6b0ac4dbc70106a236c57cccd04c5",
"assets/assets/images/new.mp4": "32954fb2f08f8db6388181165256bb0a",
"assets/assets/images/logo1.jpeg": "dbf3b369aae67ee9d76dd8e77dcbcf72",
"assets/assets/images/background.jpeg": "bd6c32e97b2cbcd553ec611b45df8b05",
"assets/assets/images/tarantarancow1.jpeg": "66d5cf06f4a8d8c41ddd674995209e4e",
"assets/assets/images/wall2.jpeg": "df52e691381c5fa9c73e558eb04a248b",
"assets/assets/images/night.jpeg": "42cb0d564ef5f5573e748c2cd75ee70c",
"assets/assets/images/awadh_logo_only.jpeg": "e0398ebc6696db87de1cd3cf06e278dc",
"assets/assets/images/mooofarmlogo.png": "7ac4a67caf59d13ad901313d78d86e7d",
"assets/assets/images/weather.png": "efde235bf2fb575cd8fa8fbc3e364c02",
"assets/assets/images/contact.jpg": "0edce5eee13cbb266e82a6b0e9fb63e9",
"assets/assets/images/awadh_fam.jpeg": "01837cbf9851dd808c98e223897de70f",
"assets/assets/images/bg.avif": "52c4ceb5d509a433d2d1940cda760b12",
"assets/assets/images/moon.png": "287210aa9707238a0eb05f20c6bf798c",
"assets/assets/images/rain.svg": "a979287eb27da406d0efa94957509732",
"assets/assets/images/bbg.jpeg": "359c553b77753a1259adf94ccbcfb53d",
"assets/assets/images/science_tech_logo.png": "296486d162cc230c3c84832635fc11b0",
"assets/assets/images/cow_banner1.jpeg": "57803bd7699b9c2fa5570ca5c0c47ac5",
"assets/assets/images/mooofarm_banner.jpeg": "8d328885cfd6bc694152e5d71473c727",
"assets/assets/images/cloud9.jpg": "aade817f75625b733520c62dd8ee53e2",
"assets/assets/images/cloudy.jpeg": "225e831e41a8af9b90805f6168d90a51",
"assets/assets/images/logo2.jpeg": "dc596b4f8728af0929d7708b0d720e56",
"assets/assets/images/gateway_img.png": "a386ecc8e2800cd30a514777fb88d97d",
"assets/assets/images/sunny.png": "058eeb479d826e718512b2b51bd15737",
"assets/assets/images/sunny.jpg": "1a74a7ee0fc470fd4d7a2dfef12a0fe3",
"assets/assets/images/img1.jpeg": "4f23bc60249afa8b3076f2d15c6d279c",
"assets/assets/images/cloud.png": "cc30f032ccb235d8dbd8bbaf9e872e2c",
"assets/assets/images/farmer_background.jpg": "9b324993069911d7d4dcefa375da56eb",
"assets/assets/images/sun.svg": "ad4d571881cc7691cccc23b365c9e1ca",
"assets/assets/images/new.jpg": "00c99a91f38f7fd787f22907cf24c3b9",
"assets/assets/images/imgr1.png": "c180461063bf1ee165c15cdde7dd22ca",
"assets/assets/images/awadh_logo2.jpeg": "8c36cb4a40dc386dd0fd91291e22edc7",
"assets/assets/images/3F3I.gif": "b3b48a35785465ed53f20d332f191a5c",
"assets/assets/images/query.jpg": "c02d5a47dfdc41dad54b93ab244a8f24",
"assets/assets/images/awadhlogo.png": "6d6b64421d1b4a04c1d5c30a14e66161",
"assets/assets/images/morning.jpeg": "4b8fce17d870e99dda4105f9a1153497",
"assets/assets/images/farmer_input.jpg": "06390c79634e5e54397660e6022e2d4f",
"assets/assets/images/rainy.jpg": "c38487711cf2d73917e229df099bcf40",
"assets/assets/images/iitropar_logo.png": "5a6eb829762e36a3f3daddc2e0255ad6",
"assets/assets/images/gps.jpeg": "b7defc003367d18be72b85143161f72d",
"assets/assets/images/mist.png": "2b13d77fbadc07dd4613e578b04c71f5",
"assets/assets/images/J2Z.gif": "b021a531a53dbd3f472b6eee2925e4e5",
"assets/assets/images/weather1.jpeg": "fe21802e177e05a1515991ad2455b117",
"assets/assets/images/night.jpg": "1b7ce17b56f86712de94104973a153e0",
"assets/assets/images/cloudy.svg": "e09852110b8fdfda106739bba6e12362",
"assets/assets/images/awadh_banner.jpeg": "3f415f6af78bac905ae82a84f13b600d",
"assets/assets/images/bg.jpeg": "f93e44bd47fc59be41955d710e638676",
"assets/assets/images/weather_data.jpg": "b5ffc294db755d8c978ef6400c2fb4b8",
"assets/assets/images/menu.svg": "c159867d8385f4b4a739e3d0b1928f88",
"assets/assets/images/sunset.png": "897a651ef098d6bc365ab49221fc457f",
"assets/assets/images/moon.svg": "6e9b080c03c4abe29181cd23b101e11a",
"assets/assets/images/bg.jpg": "b4ec29e383e8663c9e9fd06ec2383247",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
