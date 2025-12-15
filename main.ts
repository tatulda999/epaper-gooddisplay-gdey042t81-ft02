//% weight=100 color=#008080 icon="\uf043" block="ePaper"
namespace ePaper {

/**
 * Test function
*/
//% blockId= ePaperTest
//% block="test $i"
//$ i.min=0 i.max=9
export function test(i: number): number {
    return i + 1
}

}

pins.digitalWritePin(DigitalPin.P0, 1);
pins.spiPins(DigitalPin.P15, DigitalPin.P14, DigitalPin.P13);
pins.spiFormat(8, 3);
pins.spiFrequency(10000000);
