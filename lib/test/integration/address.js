/* Import (test) modules. */
import { expect } from 'chai'

import { OP } from '@nexajs/script'

/* Import class. */
import { Address } from '../../index.js'

/* Import (individual) modules. */
import {
    decodeAddress,
    encodeAddress,
    getSender,
    listUnspent,
    watchAddress,
} from '../../index.js'

// const NEXA_TEST_ADDRESS = 'nexa:nqtsq5g57qupnngwws0rlvsevggu6zxqc0tmk7d3v5ulpfh6'
const NEXA_TEST_ADDRESS = 'nexa:nqtsq5g5sjkqk7wzd9wwh9423rr0tda7m027ryljkfy84cjz'
const SAMPLE_INPUT = {
    outpoint: 'dd4456006ddfcf16607c7caa297e9654f0aa65c2b758db06d6cc2ec790d20992',
    amount: 160.72,
    scriptSig: {
        asm: '210218264068bc8be1517fb289818a6bc4264a49eba9ee1114aaa040521a1c7c7834 c856ef6c3ab5555d4614e76c464ff2d8b5abf7440b86f512eb439b98f14f783b329241dd1ce649d6f6595b9cc2a60d7dad95283689793758787e35aba00d34c0[ALL]',
        hex: '22210218264068bc8be1517fb289818a6bc4264a49eba9ee1114aaa040521a1c7c783440c856ef6c3ab5555d4614e76c464ff2d8b5abf7440b86f512eb439b98f14f783b329241dd1ce649d6f6595b9cc2a60d7dad95283689793758787e35aba00d34c0'
    },
    sequence: 4294967294
}

// const PREFIX_VERIFY = 'nexa'

// const TYPE_VERIFY = 'TEMPLATE'

// const HASH_VERIFY = new Uint8Array([
//    0,  81,  20, 132, 172,
//    11, 121, 194, 105,  92, 235,
//   150, 170, 136, 198, 245, 183,
//   190, 219, 213, 225, 147, 242
// ])


describe( 'Address Test Suite', () => {
    before( () => {
        console.info( `  ↳ targeting all JavaScript methods provided by the 'Address' class.` )
    } )

    describe( 'List Unspent', () => {
        it( 'it should retrieve the UTXOs for an address', async () => {
            const unspent = await listUnspent(NEXA_TEST_ADDRESS)
                .catch(err => console.error(err))
            // console.log('UNSPENT', unspent)

            expect(unspent).to.be.an('array')
            expect(unspent[0].txid).to.have.lengthOf(64)
            // expect(unspent[0].satoshis).to.be.an.instanceof(BigInt)
            expect(typeof unspent[0].satoshis).to.equal('bigint')
        } )

    } )

    describe( 'List Unspent Tokens', () => {
        it( 'it should retrieve the UTXOs for an address', async () => {
            const unspent = (await listUnspent(NEXA_TEST_ADDRESS)
                .catch(err => console.error(err)))
                .filter(_utxo => _utxo.hasToken === true)
            // console.log('UNSPENT TOKENS', unspent)

            expect(unspent).to.be.an('array')
            expect(unspent[0].tokenidHex).to.have.lengthOf(64)
            // expect(unspent[0].tokens).to.be.an.instanceof(BigInt)
            expect(typeof unspent[0].tokens).to.equal('bigint')
        } )

    } )

    describe( 'Subscribe to Address', () => {
        it( 'it should subscribe to an address', async () => {
            // const myHandler = (updatedInfo) => {
            //     console.log('HANDLER', updatedInfo)
            // }
            // const myAddress = 'nexa:nqtsq5g5ynxl8rwp5pzh47muagnn795pckdgtjrtatyzv2p5'
            // const cleanup = watchAddress(myAddress, myHandler)
            // console.log('CLEANUP', cleanup)
            // cleanup() // Execute to cancel (and cleanup) an Address subscription.

            // expect(unspent).to.be.an('array')
            // expect(unspent[0].tokenidHex).to.have.lengthOf(64)
        } )

    } )

} )
