import { StartFunc as DCGenerate } from "./DCGenerate/EntryFile.js";

const StartFunc = (row, $element, field) => {
    if (field === 'operate') {

        Swal.fire({
            title: "Generate DC",
            text: "Do you want to Generate DC ?",
            icon: "question",
            confirmButtonText: "Yes",
            showDenyButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                DCGenerate({ inrowData: row });

            };
        });
    }
};

export { StartFunc };