let navBar=()=>{
    return `
     <header>
      <a class="nLogo f1" href="jobs.html">
        <img
          src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
          alt=""
        />
      </a>
      <nav class="navbar">
        <ul>
          <li>
            <a href="#">jobs</a>
            <ul>
              <li><a href="#">Search Jobs</a></li>
              <li><a href="#">Creating Free Jobs Alert</a></li>
              <li><a href="#">Register Now</a></li>
            </ul>
          </li>
          <li>
            <a href="#">recruiters</a>
            <ul>
              <li><a href="#">Browse All Recruiters</a></li>
              <li><a href="#">Recruiter Connection</a></li>
              <li><a href="#">Go to NaukriRecruiter</a></li>
            </ul>
          </li>
          <li>
            <a href="#">companies</a>
            <ul>
              <li><a href="#">Browse All Companies</a></li>
              <li><a href="#">About Companies</a></li>
              <li><a href="#">Interview Questions</a></li>
              <li><a href="#">Write Company Review</a></li>
              <li><a href="#">Write Interview Advice</a></li>
              <li><a href="#">Company Reviews</a></li>
              <li><a href="#">Company Salaries</a></li>
            </ul>
          </li>
          <li>
            <a href="#">tools</a>
            <ul>
              <li><a href="#">Career Dashboard</a></li>
              <li><a href="#">Your next career move</a></li>
              <li><a href="#">Skills Trends</a></li>
              <li><a href="#">Naukri Lab</a></li>
            </ul>
          </li>
          <li><a href="services1.html">services</a></li>
          <li><a href="#">more</a></li>
          <li><a href="#"></a></li>
          <li>
            <i
              class="material-icons"
              style="font-size: 36px; color: #666; margin-top: 8px"
              >notifications_none</i
            >
          </li>
          <li  id="reed" style="width:20px;background-color:red;height:20px;margin-left:-20px;margin-top:7px;border-radius: 50%;font-size: 12px;text-align: center;color:azure;;">01</li>
          <li>
            <a href="#">for employers</a>
            <ul>
              <li><a href="#">Buy Online</a></li>
              <li><a href="#">Employer Login</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>`;
}
export {navBar}
