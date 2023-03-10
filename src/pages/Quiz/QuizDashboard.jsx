
const Category = [
    {
        id: 1,
        type: 'programming'
    },
    {
        id: 2,
        type: 'html'
    },
    {
        id: 3,
        type: 'react'
    }
]

function QuizDashboard () {

    return (
        <div>
            {
                Category.map((item) =>{
                    return(
                        <div>{item.type}</div>

                    );
                })
            }
        </div>
    );
}

export default QuizDashboard;