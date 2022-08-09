import Navbar from "./navbar";

function About() {
    return ( 
        <div className="aboutBg mb-5"> 
            <Navbar/>
            <h1 className="text-center my-5">About Page</h1>
            <div className="container">
                <div className="row bg-light rounded">
                    <div className="col-md-6 text-center">
                    <img className="w-50 ms-3 rounded-circle mt-3" alt="Can not be found" src="https://media-exp1.licdn.com/dms/image/C5603AQE7kvJHG9ckbQ/profile-displayphoto-shrink_400_400/0/1644400138023?e=1665014400&v=beta&t=npTDBNyumjVBnfSeLP-hwc78bKSmlU82YVvWLgLjH4Q"></img>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center about-info"> 
                        <p className="me-3">I am Yağız Esmerligil. I graduated from Başkent University, Computer Engineering Programme in June 2020 with a degree of 3.28 gpa. Generally, I have some information and experiences about Data Analysis. In one of my interships, I have used some methods of Numpy and Pandas libraries of Python programming Language. So, I have learnt some properties of Python programming language. With these methods and a software called "Microsoft Power BI", I have done some data analyses and data visualizations on a big dataset. I contributed to some projects during my university education.

Nowadays, I am trying to improve myself on a special area. I am interested in Frontend Development.I’m currently learning Frontend Developing Languages, Libraries and Frameworks from a course I have attended before. So, I am trying to find a job about Frontend Development.</p>
                    </div>
                    <hr className="mt-5"></hr>
                    <div className="col-md-6 my-1 text-center">
                        <img className="w-50 ms-3 rounded-pill" alt="Can not be found" src="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg"></img>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center about-info">
                        <p className="me-3">Dear Patient,In my patient register application; you can go to the Contact page and fill up a form about you and your disease. Then, your datas will be brought our database. Finally, we will call and inform you about best appropriate hospitals and doctors for your disease</p>
                    </div>
                    <hr className="mt-5"></hr>
                </div>
            </div>
        </div>
     );
}

export default About;