"use client";
import { Input, Select, SelectItem, Textarea } from "@heroui/react";
import { useState, useMemo } from "react";
import { supabase } from "/src/lib/supabase";
import { AnimatedLogo } from "@/components/animated-logo";
import { animate } from "motion";

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
  // const [universityValue, setUniversityValue] = useState(new Set([]));
  const [universityValue, setUniversityValue] = useState("");
  const [educationLevelValue, setEducationLevelValue] = useState(new Set([]));
  const [academicYearValue, setAcademicYearValue] = useState(new Set([]));
  const [departmentValue, setDepartmentValue] = useState(new Set([]));
  const [instituteIdValue, setInstituteIdValue] = useState("");
  const [facebookValue, setFacebookValue] = useState("");
  const [linkedinValue, setLinkedinValue] = useState("");
  const [isIeeeMemberValue, setIsIeeeMemberValue] = useState("");
  const [ieeeMembershipIdValue, setIeeeMembershipIdValue] = useState("");
  const [whatDoYouKnowAboutSpaveValue, setWhatDoYouKnowAboutSpaveValue] =
    useState("");
  const [whyParticipateValue, setWhyParticipateValue] = useState("");
  const [expectationValue, setExpectationValue] = useState("");

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

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isNameCapital = useMemo(() => {
    return (name) => {
      if (name === "") return false;
      return name.match(/^[A-Z. ]+$/) ? false : true;
    };
  });

  const isPhoneInvalid = useMemo(() => {
    if (phoneValue === "") return false;
    return phoneValue.match(/^(01|\+8801)[3-9][0-9]{8}$/) ? false : true;
  });

  const [bloodGroupTouched, setBloodGroupTouched] = useState(false);
  const [genderTouched, setGenderTouched] = useState(false);
  const [universityTouched, setUniversityTouched] = useState(false);
  const [educationLevelTouched, setEducationLevelTouched] = useState(false);
  const [academicYearTouched, setAcademicYearTouched] = useState(false);
  const [instituteIdTouched, setInstituteIdTouched] = useState(false);
  const [departmentTouched, setDepartmentTouched] = useState(false);
  const [isIeeeMemberTouched, setIsIeeeMemberTouched] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [uploading, setUploading] = useState(false);

  const isFormValid = () => {
    return (
      !isNameInvalid(firstNameValue) &&
      !isNameInvalid(lastNameValue) &&
      isEmailInvalid &&
      !isPhoneInvalid &&
      !isAiubIdInvalid &&
      departmentValue.size > 0 &&
      academicYearValue.size > 0 &&
      !isCompletedCreditsInvalid &&
      bloodGroupValue.size > 0 &&
      genderValue.size > 0 &&
      positionValue.size > 0 &&
      !isCurrentCgpaInvalid
    );
  };

  const submitForm = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    animate(window.scrollY, 0, {
      duration: 0.6,
      ease: "easeInOut",
      onUpdate: (latest) => {
        window.scrollTo(0, latest);
      },
    });
    setUploading(true);

    try {
      const formData = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        phone: phoneValue,
        bloodGroup: Array.from(bloodGroupValue)[0],
        gender: Array.from(genderValue)[0],
        university: universityValue,
        instituteId: instituteIdValue,
        department: Array.from(departmentValue)[0],
        academicYear: Array.from(academicYearValue)[0],
        educationLevel: Array.from(educationLevelValue)[0],
        // currentCgpa: currentCgpaValue,
        // completedCredits: completedCreditsValue,
        // address: addressValue,
        facebook: facebookValue,
        linkedin: linkedinValue,
        // position: Array.from(positionValue)[0],
        // tool: toolValue,
        // portfolio: portfolioValue,
        isIeeeMember: Array.from(isIeeeMemberValue)[0],
        ieeeMembershipId: ieeeMembershipIdValue,
        // affiliationWithOtherOrg: affiliationWithOtherOrgValue,
        // previousVolunteeringExperience: previousVolunteeringExperience,
        // qualification: qualificationValue,
        // whyJoinIeee: whyJoinIeee,
        // resume: resumeUrl,
        // photo: photoUrl,
        whatDoYouKnowAboutSpave: whatDoYouKnowAboutSpaveValue,
        whyParticipateValue: whyParticipateValue,
        expectationValue: expectationValue,
        year: 2025,
      }; // console.log(formData);
      const { error } = await supabase.from("spave-phase-1").insert(formData);
      setUploading(false);
      setIsFormSubmitted(true);
    } catch (error) {
      // console.error(error);
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
              id="spave8-phase-1-registration-form"
              className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl my-6 sm:my-8 "
              onSubmit={submitForm}
            >
              <img
                src="/form_cover.ai_F[1]-01.png"
                alt="Cover-Photo"
                className="rounded-t-md"
              />
              <div className="text-4xl w-full text-center pt-8 pb-1 bg-gradient-to-r from-[#a602c6] to-[#3b0766] bg-clip-text text-transparent font-bold">
                SPAVe 8.0: Phase-1 Registration
              </div>
              <p className="text-medium text-justify w-full text-wrap py-4 px-6 md:px-12 text-gray-600">
                The introduction of the Student Professional Awareness
                Experience (SPAx) program by IEEE-USA in 2014 initiated a
                transformative approach to student development, emphasizing
                engagement, exploration, and experiential learning in
                professional realms. The adaptable "x" component of SPAx allows
                for tailored initiatives to meet evolving needs, a concept
                embraced by the IEEE AIUB Student Branch in their creation of
                the "IEEE Student Professional Awareness Venture" with "Ve"
                replacing the "x." This innovative venture aims to equip future
                engineering leaders with essential skills and insights,
                fostering successful career trajectories. By prioritizing
                non-technical proficiencies and facilitating networking
                opportunities, the initiative prepares students for diverse job
                prospects, enabling them to contribute meaningfully to society.
                The venture underscores the importance of professional
                awareness, highlighting the complementary role of non-technical
                competencies alongside technical expertise in engineering
                careers, thus nurturing well-rounded professionals poised for
                success.
              </p>
              <div className="px-4 py-6 sm:p-8 grid place-items-center">
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
                      <SelectItem key={"NSU"} value={"NSU"}>
                        {"NORTH SOUTH UNIVERSITY (NSU)"}
                      </SelectItem>
                      <SelectItem key={"IUB"} value={"IUB"}>
                        {"INDEPENDENT UNIVERSITY, BANGLADESH (IUB)"}
                      </SelectItem>
                      <SelectItem key={"AUST"} value={"AUST"}>
                        {
                          "AHSANULLAH UNIVERSITY OF SCIENCE AND TECHNOLOGY (AUST)"
                        }
                      </SelectItem>
                    </Select> */}
                    </div>
                  </div>

                  <div className="mt-2 w-full grid grid-cols-2 gap-2">
                    <Select
                      label="Education Level"
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
                        departmentTouched && departmentValue.size == 0
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
                      <SelectItem key={"CE"} value={"CE"}>
                        {"CE"}
                      </SelectItem>
                      <SelectItem key={"MPE"} value={"MPE"}>
                        {"MPE"}
                      </SelectItem>
                      <SelectItem key={"SWE"} value={"SWE"}>
                        {"SWE"}
                      </SelectItem>
                      <SelectItem key={"ICE"} value={"ICE"}>
                        {"ICE"}
                      </SelectItem>
                      <SelectItem key={"Architecture"} value={"Architecture"}>
                        {"Architecture"}
                      </SelectItem>
                      <SelectItem key={"others"} value={"others"}>
                        {"others"}
                      </SelectItem>
                    </Select>

                    <Input
                      isRequired
                      isClearable
                      value={instituteIdValue}
                      type="text"
                      label="Institute ID"
                      variant="bordered"
                      errorMessage={
                        instituteIdTouched && instituteIdValue.size == 0
                          ? "You must provide Institute ID"
                          : ""
                      }
                      isInvalid={
                        instituteIdTouched && instituteIdValue.size == 0
                          ? true
                          : false
                      }
                      className="w-full"
                      onValueChange={setInstituteIdValue}
                      onClose={() => setInstituteIdTouched(true)}
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
                        // isRequired
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
                        maxLength={2500}
                        isInvalid={false}
                        value={whatDoYouKnowAboutSpaveValue}
                        variant="bordered"
                        label="What do you know about SPAVe. (Max 1200 characters)"
                        placeholder="Enter your description"
                        minRows={3}
                        classNames={{
                          base: "w-full",
                          input: "resize-y",
                        }}
                        onValueChange={setWhatDoYouKnowAboutSpaveValue}
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <div className="mt-2">
                      <Textarea
                        maxLength={1200}
                        isInvalid={false}
                        value={whyParticipateValue}
                        variant="bordered"
                        label="Why do you want to participate in SPAVe 8.0? (Max 1200 characters)"
                        placeholder="Enter your description"
                        defaultValue=""
                        errorMessage={
                          whyParticipateValue.length >= 1200
                            ? "The description should be at max 1200 Characters."
                            : ""
                        }
                        minRows={3}
                        classNames={{
                          base: "w-full",
                          input: "resize-y ",
                        }}
                        onValueChange={setWhyParticipateValue}
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <div className="mt-2">
                      <Textarea
                        maxLength={2500}
                        isInvalid={false}
                        value={expectationValue}
                        variant="bordered"
                        label="What are you expecting from SPAVe 8.0?"
                        placeholder="Enter your description"
                        defaultValue=""
                        errorMessage={
                          expectationValue.length >= 2500
                            ? "The description should be at max 2500 Characters."
                            : ""
                        }
                        minRows={3}
                        classNames={{
                          base: "w-full",
                          input: "resize-y",
                        }}
                        onValueChange={setExpectationValue}
                      />
                    </div>
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
                  className="rounded-md bg-fuchsia-900 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
