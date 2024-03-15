
import AddItemButton from "@/Components/Admin/AddItemButton.jsx";
export default function Filter(props) {
    const { pageProperties } = props;
    return (
        <div className="row p-4">
            <div className="col-sm-12">
                <div className="statistics-details d-flex align-items-center justify-content-between">
                    <AddItemButton title={pageProperties[0].title} url={pageProperties[0].url} />
                </div>
            </div>
        </div>
    )
}
