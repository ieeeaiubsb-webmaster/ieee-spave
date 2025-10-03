"use client";
import { Input, Select, SelectItem, Textarea } from "@heroui/react";
import { useState, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import { animate } from "motion";
import { AnimatedLogo } from "@/components/animated-logo";

function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl shadow-2xl max-w-lg mx-auto my-12 px-4">
      <AnimatedLogo />
      <p className="mt-6 text-white/80 text-sm animate-pulse">
        Processing your registration...
      </p>
    </div>
  );
}

function ThankYouMessage() {
  return (
    <div className="animate-fade-in-up max-w-lg mx-auto my-12 px-4">
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl shadow-2xl p-8 md:p-12 text-center">
        <div className="mb-6 animate-scale-in flex justify-center">
          <AnimatedLogo />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 animate-fade-in-up animation-delay-200">
          Thank you for registering!
        </h1>
        <p className="text-purple-200/80 text-sm md:text-base animate-fade-in-up animation-delay-400">
          We've received your registration and will be in touch soon.
        </p>
      </div>
    </div>
  );
}

export default function Page() {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [bloodGroupValue, setBloodGroupValue] = useState(new Set([]));
  const [genderValue, setGenderValue] = useState(new Set([]));
  const [universityValue, setUniversityValue] = useState("");
  const [educationLevelValue, setEducationLevelValue] = useState(new Set([]));
  const [academicYearValue, setAcademicYearValue] = useState(new Set([]));
  const [departmentValue, setDepartmentValue] = useState(new Set([]));
  const [instituteIdValue, setInstituteIdValue] = useState("");
  const [facebookValue, setFacebookValue] = useState("");
  const [linkedinValue, setLinkedinValue] = useState("");
  const [isIeeeMemberValue, setIsIeeeMemberValue] = useState("");
  const [ieeeMembershipIdValue, setIeeeMembershipIdValue] = useState("");
  const [volunteering_experience, setvolunteering_experience] = useState("");

  const [resumeValue, setResumeValue] = useState(null);
  const [resumeUrl, setResumeUrl] = useState("");
  const [photoValue, setPhotoValue] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [opinion, setOpinion] = useState("");

  const [isCvValid, setIsCvValid] = useState(false);
  const [isPhotoValid, setIsPhotoValid] = useState(false);
  const [isPhotoTounched, setIsPhotoTounched] = useState(false);
  const [isCvTounched, setIsCvTounched] = useState(false);
  const [isIdTouch, setIsIdTouch] = useState(false);

  const [bloodGroupTouched, setBloodGroupTouched] = useState(false);
  const [genderTouched, setGenderTouched] = useState(false);
  const [universityTouched, setUniversityTouched] = useState(false);
  const [educationLevelTouched, setEducationLevelTouched] = useState(false);
  const [academicYearTouched, setAcademicYearTouched] = useState(false);
  const [departmentTouched, setDepartmentTouched] = useState(false);
  const [isIeeeMemberTouched, setIsIeeeMemberTouched] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [addressValue, setaddressValue] = useState("");
  const [uploading, setUploading] = useState(false);

  const handelCvSubmit = (e) => {
    setIsCvTounched(true);
    setResumeValue(null);
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      setIsCvValid(false);
      return;
    }

    const fileExtension = selectedFile.name.split(".").pop().toLowerCase();
    const allowedExtensions = ["pdf"];
    const fileSize = selectedFile.size;
    const maxSize = 2 * 1024 * 1024; // 2 MB

    if (!allowedExtensions.includes(fileExtension)) {
      setIsCvValid(false);
      e.target.value = "";
      return;
    }

    if (fileSize > maxSize) {
      setIsCvValid(false);
      e.target.value = "";
      return;
    }
    setIsCvValid(true);
    setResumeValue(selectedFile);
  };

  const handlePhotoSubmit = (e) => {
    setIsPhotoTounched(true);
    setPhotoValue(null);
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      setIsPhotoValid(false);
      return;
    }

    const fileExtension = selectedFile.name.split(".").pop().toLowerCase();
    const allowedExtensions = ["png", "jpg", "jpeg"];
    const fileSize = selectedFile.size;
    const maxSize = 2 * 1024 * 1024; // 2 MB

    if (!allowedExtensions.includes(fileExtension)) {
      setIsPhotoValid(false);
      //invalid file type
      e.target.value = "";
      return;
    }

    if (fileSize > maxSize) {
      setIsPhotoValid(false);
      //file size exceeded
      e.target.value = "";
      return;
    }
    setIsPhotoValid(true);
    setPhotoValue(selectedFile);
  };

  const isNameInvalid = useMemo(() => {
    return (name) => {
      if (name === "") return false;
      return name.match(/^[A-Za-z. ]+$/) ? false : true;
    };
  });

  const isEmailInvalid = useMemo(() => {
    if (emailValue === "") return false;
    return emailValue.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)
      ? false
      : true;
  });

  const isPhoneInvalid = useMemo(() => {
    if (phoneValue === "") return false;
    return phoneValue.match(/^(01|\+8801)[3-9][0-9]{8}$/) ? false : true;
  });

  const submitForm = async (e) => {
    e.preventDefault();
    animate(window.scrollY, 0, {
      duration: 0.6,
      ease: "easeInOut",
      onUpdate: (latest) => {
        window.scrollTo(0, latest);
      },
    });
    if (!photoValue) {
      alert("Please upload your Photo");
      return;
    }

    if (!resumeValue) {
      alert("Please upload your CV/Resume");
      return;
    }

    setUploading(true);
    await new Promise((resolve) => setTimeout(resolve, 10)); // 10ms

    try {
      // Create unique filenames
      const photoFileName = `${firstNameValue}_${lastNameValue}_${instituteIdValue}_${Date.now()}.${photoValue.name
        .split(".")
        .pop()}`;
      const photoPath = `images/${photoFileName}`;

      const resumeFileName = `${firstNameValue}_${lastNameValue}_${instituteIdValue}_${Date.now()}.${resumeValue.name
        .split(".")
        .pop()}`;
      const resumePath = `resumes/${resumeFileName}`;

      // Upload photo to Supabase Storage
      const { data: photoData, error: photoError } = await supabase.storage
        .from("ambassador-files")
        .upload(photoPath, photoValue, {
          cacheControl: "3600",
          upsert: false,
        });

      if (photoError)
        throw new Error(`Photo upload failed: ${photoError.message}`);

      // Get signed URL for photo, signed url for 1 month
      const { data: photoUrlData, error: photoUrlError } =
        await supabase.storage
          .from("ambassador-files")
          .createSignedUrl(photoPath, 60 * 60 * 24 * 30); // 30 days

      if (photoUrlError)
        throw new Error(`Getting photo URL failed: ${photoUrlError.message}`);

      const photoSignedUrl = photoUrlData.signedUrl;
      setPhotoUrl(photoUrlData.signedUrl);

      // Upload resume to Supabase Storage
      const { data: resumeData, error: resumeError } = await supabase.storage
        .from("ambassador-files")
        .upload(resumePath, resumeValue, {
          cacheControl: "3600",
          upsert: false,
        });

      if (resumeError)
        throw new Error(`Resume upload failed: ${resumeError.message}`);

      // Get signed URL for resume
      const { data: resumeUrlData, error: resumeUrlError } =
        await supabase.storage
          .from("ambassador-files")
          .createSignedUrl(resumePath, 60 * 60 * 24 * 30); // 30 days

      if (resumeUrlError)
        throw new Error(`Getting resume URL failed: ${resumeUrlError.message}`);

      const resumeSignedUrl = resumeUrlData.signedUrl;
      setResumeUrl(resumeUrlData.signedUrl);

      // Prod
      const data = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        phone: phoneValue,
        address: addressValue,
        bloodGroup: Array.from(bloodGroupValue)[0],
        gender: Array.from(genderValue)[0],
        universityName: universityValue,
        educationLevel: Array.from(educationLevelValue)[0],
        instituteId: instituteIdValue,
        department: Array.from(departmentValue)[0],
        academicYear: Array.from(academicYearValue)[0],
        facebook: facebookValue,
        linkedIn: linkedinValue,
        isIeeeMember: Array.from(isIeeeMemberValue)[0],
        ieeeMembershipId: ieeeMembershipIdValue,
        volunteering_experience: volunteering_experience,
        opinion: opinion,
        resume: resumeSignedUrl,
        photo: photoSignedUrl,
        // affiliationWithOtherOrg: affiliationWithOtherOrgValue,
        // previousVolunteeringExperience: previousVolunteeringExperience,
      };

      // console.log(data);
      const { error } = await supabase
        .from("spave_ambassadors")
        .insert(data)
        .single();
      setIsFormSubmitted(true);
      setUploading(false);
    } catch (error) {
      // console.error("Error uploading files or submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
      setUploading(false);
    }
  };
  return (
    <>
      <div className="overflow-y-hidden grid place-items-center bg-gray-200">
        <div className="lg:max-w-2xl max-w-screen-sm w-full mt-10 px-2">
          {uploading ? (
            <LoadingState />
          ) : isFormSubmitted ? (
            <ThankYouMessage />
          ) : (
            <form
              id="ambassodor-form"
              className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl my-6 sm:my-8 "
              onSubmit={submitForm}
            >
              {/* <img
              src="Registration-Phase_01-Form-Cover.png"
              alt="Cover-Photo"
              className="rounded-t-md"
            /> */}
              <div className="text-4xl w-full text-center pt-8 pb-1 bg-gradient-to-r from-[#a602c6] to-[#3b0766] bg-clip-text text-transparent font-bold">
                SPAVE 8.0: <br />
                Call for Ambassadors
              </div>
              <div className="text-medium text-justify w-full text-wrap py-4 px-6 md:px-12 text-gray-600">
                The <b> IEEE-USA </b>branded{" "}
                <b> Student Professional Awareness Activities (SPAA </b>) are
                oriented to enhance engineering students' leadership, career,
                and professional development skills.{" "}
                <b> Student Professional Awareness Experience, SPAx </b> builds
                on the enduring legacy of Student Professional Awareness
                Conferences and Ventures to address the highly dynamic world we
                live in today. <br />
                The “x” in <b> SPAx </b> is a variable that can be shaped as per
                requirement. Replacing it with "Ve"; the{" "}
                <b> IEEE AIUB Student Branch </b>
                will be organizing the{" "}
                <b> IEEE Student Professional Awareness Venture (SPAVe) </b> for
                the seventh time, aiming to enlighten and train the minds of
                future leaders in the hope of securing a lifelong career in
                engineering. It is a design tool for planning a process in a
                concurrent engineering environment. Being a trademark in both
                membership development and organizing professional & technical
                activities, it has successfully organized{" "}
                <b> Student Professional Awareness Venture (SPAVe) </b> under
                the <b> IEEE SPAx </b> program of IEEE-USA for the first time in
                the history of <b> IEEE Bangladesh Section </b> in 2016 and
                later IEEE SPAVe 2.0 in 2017, followed by IEEE SPAVe 3.0 in
                2018, IEEE SPAVe 4.0 in 2019, IEEE SPAVe 5.0 in 2021 and SPAVe
                6.0 in 2023, IEEE SPAVe 7.0 in 2024. Following last year’s
                success and immense response along with previous years,{" "}
                <b> IEEE AIUB Student Branch </b> has taken the bold initiative
                to conduct the 8th rendition of the flagship event in 2025 as ‘
                <b> IEEE SPAVe 8.0’ </b>. In our continual quest to provide an
                even better experience and value to the student members of IEEE,
                a new effort was made to listen and understand the program from
                the student’s perspective. This professional venture will
                include a series of professional and career-based workshops
                focused on professional development, conducting plenary talks on
                timely topics, allowing students to understand the ever-changing
                professional world, and developing skills that would not be
                taught in classrooms needed to pursue a career as an exemplary
                individual. To make this venture a success, the{" "}
                <b> IEEE AIUB Student Branch </b> is holding the Ambassadors
                Program. <br />
                <br />
                <b> Key Responsibilities: </b>
                <ul className="list-decimal list-inside">
                  <li>
                    Promote <b> SPAVe 8.0 </b> in Student Branches and
                    Universities.
                  </li>
                  <li>
                    Maintain good communication & interactions with the
                    organizing committee.
                  </li>
                  <li>
                    Carry out all assigned tasks provided by the organizing
                    committee.
                  </li>
                  <li>
                    Lead the participants of the Ambassador's own SB or
                    University every step of the way to <b>SPAVe 8.0.</b>
                  </li>
                  <li>
                    Make active participation in <b>SPAVe 8.0</b> & lead the
                    participants from the represented university
                  </li>
                </ul>
                <br />
                <b>Ambassador's Outcome: </b>
                <ul className="list-decimal list-inside">
                  <li>Building a solid network.</li>
                  <li>
                    Successful Ambassadors will receive officially recognized
                    certificates for the flagship event.
                  </li>
                  <li>
                    The Ambassador succeeding in bringing the most participants
                    from his/her student branch will receive the Honorary
                    Mention.
                  </li>
                  <li>
                    Will receive special facilities in flagship events &
                    workshops organized by <b>IEEE AIUB SB.</b>
                  </li>
                </ul>
                <b>
                  <br />
                  Application Deadline:{" "}
                  <span className="text-red-600">
                    4<sup>th</sup>October, 2025 (Sataurday)
                  </span>
                </b>
              </div>
              <div className="px-2 py-6 sm:p-8 grid place-items-center">
                <div className="max-w-md w-full">
                  <div className="">
                    {/* <label
                  htmlFor="Name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  About
                </label> */}
                    <div className="mt-2 w-full grid grid-cols-2 gap-2">
                      <Input
                        isRequired
                        isClearable
                        value={firstNameValue}
                        type="text"
                        label="First Name"
                        variant="bordered"
                        isInvalid={isNameInvalid(firstNameValue)}
                        color={
                          isNameInvalid(firstNameValue) ? "danger" : "content"
                        }
                        errorMessage={
                          isNameInvalid(firstNameValue) &&
                          "Please enter a valid name"
                        }
                        onValueChange={setFirstNameValue}
                        className="w-full pb-0"
                      />
                      <Input
                        isRequired
                        isClearable
                        value={lastNameValue}
                        type="text"
                        label="Last Name"
                        variant="bordered"
                        isInvalid={isNameInvalid(lastNameValue)}
                        color={
                          isNameInvalid(lastNameValue) ? "danger" : "content"
                        }
                        errorMessage={
                          isNameInvalid(lastNameValue) &&
                          "Please enter a valid name"
                        }
                        onValueChange={setLastNameValue}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <div className="mt-2">
                      <Input
                        isRequired
                        isClearable
                        value={emailValue}
                        type="email"
                        label="Email"
                        variant="bordered"
                        isInvalid={isEmailInvalid}
                        color={isEmailInvalid ? "danger" : "content"}
                        errorMessage={
                          isEmailInvalid && "Please enter a valid email"
                        }
                        onValueChange={setEmailValue}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <div className="mt-2">
                      <Input
                        isRequired
                        isClearable
                        value={phoneValue}
                        type="text"
                        label="Phone"
                        variant="bordered"
                        isInvalid={isPhoneInvalid}
                        color={isPhoneInvalid ? "danger" : "content"}
                        errorMessage={
                          isPhoneInvalid && "Please enter a valid phone number"
                        }
                        onValueChange={setPhoneValue}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <div className="mt-2">
                      <Input
                        isRequired
                        isClearable
                        value={addressValue}
                        type="text"
                        label="Address"
                        variant="bordered"
                        onValueChange={setaddressValue}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="mt-2 w-full grid grid-cols-2 gap-2">
                    <Select
                      isRequired
                      label="Blood Group"
                      variant="bordered"
                      placeholder="Select a Blood Group"
                      errorMessage={
                        bloodGroupTouched && bloodGroupValue.size == 0
                          ? "You must select a Blood Group"
                          : ""
                      }
                      isInvalid={
                        bloodGroupTouched && bloodGroupValue.size == 0
                          ? true
                          : false
                      }
                      selectedKeys={bloodGroupValue}
                      className="w-full"
                      onSelectionChange={setBloodGroupValue}
                      onClose={() => setBloodGroupTouched(true)}
                    >
                      <SelectItem key={"A+"} value={"A+"}>
                        {"A Positive (A+)"}
                      </SelectItem>
                      <SelectItem key={"A-"} value={"A-"}>
                        {"A Negative (A-)"}
                      </SelectItem>
                      <SelectItem key={"B+"} value={"B+"}>
                        {"B Positive (B+)"}
                      </SelectItem>
                      <SelectItem key={"B-"} value={"B-"}>
                        {"B Negative (B-)"}
                      </SelectItem>
                      <SelectItem key={"AB+"} value={"AB+"}>
                        {"AB Positive (AB+)"}
                      </SelectItem>
                      <SelectItem key={"AB-"} value={"AB-"}>
                        {"AB Negative (AB-)"}
                      </SelectItem>
                      <SelectItem key={"O+"} value={"O+"}>
                        {"O Positive (O+)"}
                      </SelectItem>
                      <SelectItem key={"O-"} value={"O-"}>
                        {"O Negative (O-)"}
                      </SelectItem>
                    </Select>

                    <Select
                      isRequired
                      label="Gender"
                      variant="bordered"
                      placeholder="Select a Gender"
                      errorMessage={
                        genderTouched && genderValue.size == 0
                          ? "You must select a Gender"
                          : ""
                      }
                      isInvalid={
                        genderTouched && genderValue.size == 0 ? true : false
                      }
                      selectedKeys={genderValue}
                      className="w-full"
                      onSelectionChange={setGenderValue}
                      onClose={() => setGenderTouched(true)}
                    >
                      <SelectItem key={"Male"} value={"Male"}>
                        {"Male"}
                      </SelectItem>
                      <SelectItem key={"Female"} value={"Female"}>
                        {"Female"}
                      </SelectItem>
                    </Select>
                  </div>

                  <div className="col-span-full">
                    <div className="mt-2">
                      <Input
                        isRequired
                        isClearable
                        value={universityValue}
                        type="text"
                        label="University Name"
                        variant="bordered"
                        // isInvalid={isNameCapital(universityValue)}
                        // color={
                        //   isNameCapital(universityValue) ? "danger" : "content"
                        // }
                        // errorMessage={
                        //   isNameCapital(universityValue) &&
                        //   "Please enter name in Capital Letters"
                        // }
                        onValueChange={setUniversityValue}
                        className="w-full"
                      />
                      {/* <Select
                      isRequired
                      label="University"
                      variant="bordered"
                      placeholder="Select an University"
                      errorMessage={
                        universityValue.size == 0 && universityTouched
                          ? "You must select an University"
                          : ""
                      }
                      isInvalid={
                        universityTouched && universityValue.size == 0
                          ? true
                          : false
                      }
                      selectedKeys={universityValue}
                      className="w-full"
                      onSelectionChange={setUniversityValue}
                      onClose={() => setUniversityTouched(true)}
                    >
                      <SelectItem key={"AIUB"} value={"AIUB"}>
                        {"AMERICAN INTERNATIONAL UNIVERSITY-BANGLADESH (AIUB)"}
                      </SelectItem>
                      <SelectItem key={"AUST"} value={"AUST"}>
                        {
                          "AHSANULLAH UNIVERSITY OF SCIENCE AND TECHNOLOGY (AUST)"
                        }
                      </SelectItem>
                      <SelectItem key={"BAUET"} value={"BAUET"}>
                        {
                          "BANGLADESH ARMY UNIVERSITY OF ENGINEERING AND TECHNOLOGY (BAUET)"
                        }
                      </SelectItem>

                      <SelectItem key={"BRAC"} value={"BRAC"}>
                        {"BRAC UNIVERSITY"}
                      </SelectItem>
                      <SelectItem key={"BUP"} value={"BUP"}>
                        {"BANGLADESH UNIVERSITY OF PROFESSIONALS (BUP)"}
                      </SelectItem>
                      <SelectItem key={"BUET"} value={"BUET"}>
                        {
                          "BANGLADESH UNIVERSITY OF ENGINEERING AND TECHNOLOGY (BUET)"
                        }
                      </SelectItem>
                      <SelectItem key={"CU"} value={"CU"}>
                        {"CHITTAGONG UNIVERSITY (CU)"}
                      </SelectItem>
                      <SelectItem key={"CUET"} value={"CUET"}>
                        {
                          "CHITTAGONG UNIVERSITY OF ENGINEERING AND TECHNOLOGY (CUET)"
                        }
                      </SelectItem>
                      <SelectItem key={"DIU"} value={"DIU"}>
                        {"Daffodil International University (DIU)"}
                      </SelectItem>
                      <SelectItem key={"DIU"} value={"DIU"}>
                        {"DHAKA INTERNATIONAL UNIVERSITY (DIU)"}
                      </SelectItem>
                      <SelectItem key={"DU"} value={"DU"}>
                        {"DHAKA UNIVERSITY (DU)"}
                      </SelectItem>
                      <SelectItem key={"EU"} value={"EU"}>
                        {"EASTERN UNIVERSITY (EU)"}
                      </SelectItem>
                      <SelectItem key={"EWU"} value={"EWU"}>
                        {"East West University (EWU)"}
                      </SelectItem>
                      <SelectItem key={"HSTU"} value={"HSTU"}>
                        {
                          "HAJEE MOHAMMAD DANESH SCIENCE AND TECHNOLOGY UNIVERSITY (HSTU)"
                        }
                      </SelectItem>
                      <SelectItem key={"IU"} value={"IU"}>
                        {"ISLAMIC UNIVERSITY (IU)"}
                      </SelectItem>
                      <SelectItem key={"IUB"} value={"IUB"}>
                        {"INDEPENDENT UNIVERSITY, BANGLADESH (IUB)"}
                      </SelectItem>
                      <SelectItem key={"IUT"} value={"IUT"}>
                        {"ISLAMIC UNIVERSITY OF TECHNOLOGY (IUT)"}
                      </SelectItem>
                      <SelectItem key={"NSU"} value={"NSU"}>
                        {"NORTH SOUTH UNIVERSITY (NSU)"}
                      </SelectItem>
                      <SelectItem key={"PUST"} value={"PUST"}>
                        {"PABNA UNIVERSITY OF SCIENCE AND TECHNOLOGY (PUST)"}
                      </SelectItem>
                      <SelectItem key={"RU"} value={"RU"}>
                        {"RAJSHAHI UNIVERSITY (RU)"}
                      </SelectItem>
                      <SelectItem key={"RUET"} value={"RUET"}>
                        {
                          "RAJSHAHI UNIVERSITY OF ENGINEERING AND TECHNOLOGY (RUET)"
                        }
                      </SelectItem>
                      <SelectItem key={"SU"} value={"SU"}>
                        {"STAMFORD UNIVERSITY BANGLADESH (SU)"}
                      </SelectItem>
                      <SelectItem key={"UAP"} value={"UAP"}>
                        {"UNIVERSITY OF ASIA PACIFIC (UAP)"}
                      </SelectItem>
                      <SelectItem key={"ULAB"} value={"ULAB"}>
                        {"University of Liberal Arts Bangladesh (ULAB)"}
                      </SelectItem>
                    </Select> */}
                    </div>
                  </div>

                  <div className="mt-2 w-full grid grid-cols-2 gap-2">
                    <Select
                      isRequired
                      label="Education  Level"
                      variant="bordered"
                      placeholder="Select an Education Level"
                      errorMessage={
                        educationLevelValue.size == 0 && educationLevelTouched
                          ? "You must select an Education Level"
                          : ""
                      }
                      isInvalid={
                        educationLevelTouched && educationLevelValue.size == 0
                          ? true
                          : false
                      }
                      selectedKeys={educationLevelValue}
                      className="w-full"
                      onSelectionChange={setEducationLevelValue}
                      onClose={() => setEducationLevelTouched(true)}
                    >
                      <SelectItem key={"Undergraduate"} value={"Undergraduate"}>
                        {"Undergraduate"}
                      </SelectItem>
                      <SelectItem key={"Graduate"} value={"Graduate"}>
                        {"Graduate"}
                      </SelectItem>
                    </Select>

                    <Select
                      isRequired
                      label="Academic Year"
                      variant="bordered"
                      placeholder="Select an Academic Year"
                      errorMessage={
                        academicYearTouched && academicYearValue.size == 0
                          ? "You must select an academic year"
                          : ""
                      }
                      isInvalid={
                        academicYearTouched && academicYearValue.size == 0
                          ? true
                          : false
                      }
                      selectedKeys={academicYearValue}
                      className="max-w-xs"
                      onSelectionChange={setAcademicYearValue}
                      onClose={() => setAcademicYearTouched(true)}
                    >
                      <SelectItem key={"1st"} value={"1st"}>
                        {"1st"}
                      </SelectItem>
                      <SelectItem key={"2nd"} value={"2nd"}>
                        {"2nd"}
                      </SelectItem>
                      <SelectItem key={"3rd"} value={"3rd"}>
                        {"3rd"}
                      </SelectItem>
                      <SelectItem key={"4th"} value={"4th"}>
                        {"4th"}
                      </SelectItem>
                    </Select>
                  </div>

                  <div className="mt-2 w-full grid grid-cols-2 gap-2">
                    <Select
                      isRequired
                      label="Department"
                      variant="bordered"
                      placeholder="Select a Department"
                      errorMessage={
                        departmentValue.size == 0 && departmentTouched
                          ? "You must select a department"
                          : ""
                      }
                      isInvalid={
                        departmentTouched && departmentValue.size == 0
                          ? true
                          : false
                      }
                      selectedKeys={departmentValue}
                      className="w-full"
                      onSelectionChange={setDepartmentValue}
                      onClose={() => setDepartmentTouched(true)}
                    >
                      <SelectItem key={"CSE"} value={"CSE"}>
                        {"CSE"}
                      </SelectItem>
                      <SelectItem key={"EEE"} value={"EEE"}>
                        {"EEE"}
                      </SelectItem>
                      <SelectItem key={"IPE"} value={"IPE"}>
                        {"IPE"}
                      </SelectItem>
                      <SelectItem key={"CoE"} value={"CoE"}>
                        {"CoE"}
                      </SelectItem>
                      <SelectItem key={"others"} value={"others"}>
                        {"Others"}
                      </SelectItem>
                    </Select>

                    <Input
                      isRequired
                      isClearable
                      value={instituteIdValue}
                      type="text"
                      label="Institute ID"
                      variant="bordered"
                      isInvalid={isIdTouch && instituteIdValue.length == 0}
                      color={
                        isIdTouch && instituteIdValue.length == 0
                          ? "danger"
                          : "content"
                      }
                      errorMessage={
                        !isIdTouch || instituteIdValue.length > 0
                          ? ""
                          : "Please enter a valid ID"
                      }
                      onValueChange={setInstituteIdValue}
                      className="w-full"
                      onClose={setIsIdTouch}
                    />
                  </div>

                  <div className="col-span-full">
                    <div className="mt-2">
                      <Input
                        isRequired
                        isClearable
                        value={facebookValue}
                        type="text"
                        label="Facebook"
                        variant="bordered"
                        onValueChange={setFacebookValue}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <div className="mt-2">
                      <Input
                        isRequired
                        isClearable
                        value={linkedinValue}
                        type="text"
                        label="Linkedin"
                        variant="bordered"
                        onValueChange={setLinkedinValue}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="mt-2 w-full grid grid-cols-1 md:grid-cols-2 gap-2">
                    <Select
                      isRequired
                      label="Are You an IEEE Member?"
                      variant="bordered"
                      placeholder="Yes/No"
                      errorMessage={
                        isIeeeMemberTouched && isIeeeMemberValue.size == 0
                          ? "You must select an option"
                          : ""
                      }
                      isInvalid={
                        isIeeeMemberTouched && isIeeeMemberValue.size == 0
                          ? true
                          : false
                      }
                      selectedKeys={isIeeeMemberValue}
                      className="w-full"
                      onSelectionChange={setIsIeeeMemberValue}
                      onClose={() => setIsIeeeMemberTouched(true)}
                    >
                      <SelectItem key={"Yes"} value={"Yes"}>
                        {"Yes"}
                      </SelectItem>
                      <SelectItem key={"No"} value={"No"}>
                        {"No"}
                      </SelectItem>
                    </Select>

                    <Input
                      isDisabled={
                        isIeeeMemberValue.size == 0 ||
                        Array.from(isIeeeMemberValue)[0] == "No"
                      }
                      isRequired={Array.from(isIeeeMemberValue)[0] == "Yes"}
                      isClearable
                      value={ieeeMembershipIdValue}
                      type="text"
                      label="IEEE Membership ID"
                      variant="bordered"
                      onValueChange={setIeeeMembershipIdValue}
                      className="w-full"
                    />
                  </div>

                  <div className="col-span-full">
                    <div className="mt-2">
                      <Textarea
                        isRequired
                        maxLength={1200}
                        isInvalid={false}
                        value={volunteering_experience}
                        variant="bordered"
                        label="Describe your previous volunteering experience (Max 1200 characters)"
                        placeholder="Enter your description"
                        defaultValue=""
                        errorMessage={
                          volunteering_experience.length >= 1200
                            ? "The description should be at max 1200 Characters."
                            : ""
                        }
                        minRows={3}
                        classNames={{
                          base: "w-full",
                          input: "resize-y ",
                        }}
                        onValueChange={setvolunteering_experience}
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <div className="mt-2">
                      <Textarea
                        isRequired
                        maxLength={2500}
                        isInvalid={false}
                        value={opinion}
                        variant="bordered"
                        label="What qualifies you, in your opinion, for ' SPAVE 8.0 ' as  an ambassador?                      "
                        placeholder="Enter your description"
                        defaultValue=""
                        errorMessage={
                          opinion.length >= 2500
                            ? "The description should be at max 2500 Characters."
                            : ""
                        }
                        minRows={3}
                        classNames={{
                          base: "w-full",
                          input: "resize-y",
                        }}
                        onValueChange={setOpinion}
                      />
                    </div>
                  </div>

                  <div className="mt-2 w-full grid grid-cols-2 gap-2">
                    <label
                      htmlFor="photoUpload"
                      className="bg-white text-black text-base rounded w-full h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
                    >
                      <input
                        type="file"
                        id="photoUpload"
                        className="hidden"
                        onChange={(e) => handlePhotoSubmit(e)}
                        accept="image/png, image/jpeg, image/jpg"
                      />
                      {photoValue ? (
                        <div className="relative rounded-sm overflow-clip w-full p-2 gap-2 grid place-items-center">
                          {/* {console.log(photoValue)} */}
                          <img
                            className=" rounded-md overflow-clip object-cover max-h-[150px]"
                            src={URL.createObjectURL(photoValue)}
                          />
                          <div className="text-center text-gray-600 text-xs px-2 text-wrap">
                            {photoValue.name}
                          </div>
                        </div>
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 mb-2 fill-black"
                            viewBox="0 0 32 32"
                          >
                            <path
                              d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                              data-original="#000000"
                            />
                            <path
                              d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                              data-original="#000000"
                            />
                          </svg>
                          <p className="text-gray-600">Upload a Photo</p>
                          <p className="text-xs text-gray-400 mt-2 text-center">
                            PNG, JPG, JPEG are allowed. Maximum file size 2MB.
                          </p>
                          {isPhotoTounched && !isPhotoValid && (
                            <p className="text-xs text-red-500 mt-2 mx-2 text-center">
                              Invalid File.
                            </p>
                          )}
                        </>
                      )}
                    </label>

                    <label
                      htmlFor="resumeUpload"
                      className="bg-white text-black text-base rounded w-full h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
                    >
                      <input
                        type="file"
                        id="resumeUpload"
                        className="hidden"
                        onChange={(e) => handelCvSubmit(e)}
                        accept=".pdf"
                      />
                      {resumeValue ? (
                        <div className="relative rounded-sm overflow-clip w-full p-2 gap-2 flex flex-col justify-center items-center">
                          {/* {console.log(resumeValue)} */}
                          <svg
                            height="80"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                          >
                            <path
                              fill="#4b5563"
                              d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                            />
                          </svg>
                          <div className="text-center text-gray-600 text-xs text-clip px-2 max-w-[200px] overf">
                            {resumeValue.name}
                          </div>
                        </div>
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 mb-2 fill-black"
                            viewBox="0 0 32 32"
                          >
                            <path
                              d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                              data-original="#000000"
                            />
                            <path
                              d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                              data-original="#000000"
                            />
                          </svg>
                          <p className="text-gray-600">Upload CV/Resume</p>
                          <p className="text-xs text-gray-400 mt-2 text-center">
                            PDF is Allowed. Maximum file size 2MB.
                          </p>
                          {isCvTounched && !isCvValid && (
                            <p className="text-xs text-red-500 mt-2 mx-2 text-center">
                              Invalid File.
                            </p>
                          )}
                        </>
                      )}
                    </label>
                  </div>

                  <div className="col-span-full">
                    <div className="mt-2"></div>
                  </div>

                  <div className="col-span-full">
                    <div className="mt-2"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                {/* <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button> */}
                <button
                  type="submit"
                  disabled={uploading}
                  className={`rounded-md px-8 py-3 text-sm font-semibold text-white shadow-sm ${
                    uploading
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-fuchsia-900 hover:bg-fuchsia-800"
                  } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600`}
                >
                  {uploading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
