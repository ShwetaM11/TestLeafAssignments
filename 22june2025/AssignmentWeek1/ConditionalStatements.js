function launchBrowser(browserName) {
  if (browserName.toLowerCase() == "chrome") {
    console.log("Chrome browser is launching")

  }else if(browserName.toLowerCase() == "firefox"){
    console.log("Firefox browser is launching")

  }else if(browserName.toLowerCase() == "safari"){
    console.log("Safari browser is launching")

  }else {
    console.log("Launching browser: " + browserName)
  }
}


function runTests(testType) {
  switch (testType.toLowerCase()) {
    case "smoke":
      console.log("Smoke test suit is running.")
      break;
    case "sanity":
      console.log("Sanity test suit is running.")
      break;
    case "regression":
      console.log("Regression test suit is running.")
      break;
    default:
      console.log("Invalid test running")
  }
}


launchBrowser("safari")     
runTests("sany")     