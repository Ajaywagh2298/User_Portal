import '../CSS/TableComponents.css';
const TableComponents = () =>{
return(
    <div className={'container container-box'}>
        <div className={'card'}>
            <div className={'box1 card-header d-flex'}>
                <p className={'add-title text-md-start'}>
                    Team Members
                </p>&nbsp;&nbsp;
                <button className={'add-btn btn btn-primary align-items-center justify-content-center'}> Add Members&nbsp;<i className="fas fa-plus"/></button>
            </div>
            <div className={'card-body'}>

            </div>
        </div>
    </div>
)
}

export default TableComponents;