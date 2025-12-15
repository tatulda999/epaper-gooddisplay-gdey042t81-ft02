
namespace ePaper {
    pins.digitalWritePin(DigitalPin.P0, 1);
    pins.spiPins(DigitalPin.P15, DigitalPin.P14, DigitalPin.P13);
    pins.spiFormat(8, 3);
    pins.spiFrequency(1000000);
}