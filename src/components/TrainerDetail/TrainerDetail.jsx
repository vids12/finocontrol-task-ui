import "./TrainerDetail.css";

export function TrainerDetail() {
    return (
        <div className="trainer-detail">
            <img className="photo-box" src="https://images.unsplash.com/photo-1608975321561-176c1b187d24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="ph" />
            <div>
                <h4>NAME OF TRAINER</h4>
                <p className="designation">Designation</p>
            </div>
            <div className="line"></div>
            <p>Write all the details about the trainer here</p>
        </div>
    );
}