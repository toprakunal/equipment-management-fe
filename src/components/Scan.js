

const Scan = (props) => {

    const onNewScanResult = (decodedText, decodedResult) => {
        // handle decoded results here
    };

    return (
        <div >
            <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
            />
        </div>
    );
};

export default Scan; 