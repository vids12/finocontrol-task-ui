import "./TrainerDetail.css";

export function TrainerDetail() {
    return (
        <div className="trainer-detail">
            <div className="photo-box"></div>
            <div>
                <h4>NAME OF TRAINER</h4>
                <p className="designation">Designation</p>
            </div>
            <div className="line"></div>
            <p>Write all the details about the trainer here</p>
        </div>
    );
}