function onMouseDown(id) {
  var squareColor = document.getElementById(id);

  if (squareColor.style.backgroundColor === "aqua") {
    squareColor.style.background = "#EEEEEE";
    squareColor.style.color = "black";
  } else {
    squareColor.style.background = "aqua";
    squareColor.style.color = "black";
  }

  checkForBingo(id)
}


function onMouseOver(id) {
  var squareColor = document.getElementById(id);
  squareColor.style.borderColor = "aqua";
  squareColor.style.borderStyle = "solid";
  squareColor.style.color = "black";

}

function onMouseOut(id) {
  var squareColor = document.getElementById(id);
  squareColor.style.borderColor = "white";
  squareColor.style.borderStyle = "solid";
  squareColor.style.color = "black";
}

function checkForBingo(id) {

  switch (id) {
    case "1":
      if (document.getElementById(1).style.backgroundColor === "aqua" && document.getElementById(2).style.backgroundColor === "aqua" && document.getElementById(3).style.backgroundColor === "aqua" && document.getElementById(4).style.backgroundColor === "aqua" && document.getElementById(5).style.backgroundColor === "aqua" ||
        document.getElementById(1).style.backgroundColor === "aqua" && document.getElementById(6).style.backgroundColor === "aqua" && document.getElementById(11).style.backgroundColor === "aqua" && document.getElementById(16).style.backgroundColor === "aqua" && document.getElementById(21).style.backgroundColor === "aqua" ||
        document.getElementById(1).style.backgroundColor === "aqua" && document.getElementById(7).style.backgroundColor === "aqua" && document.getElementById(13).style.backgroundColor === "aqua" && document.getElementById(19).style.backgroundColor === "aqua" && document.getElementById(25).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
      break;
    case "2":
      if (document.getElementById(1).style.backgroundColor === "aqua" && document.getElementById(2).style.backgroundColor === "aqua" && document.getElementById(3).style.backgroundColor === "aqua" && document.getElementById(4).style.backgroundColor === "aqua" && document.getElementById(5).style.backgroundColor === "aqua" ||
        document.getElementById(2).style.backgroundColor === "aqua" && document.getElementById(7).style.backgroundColor === "aqua" && document.getElementById(12).style.backgroundColor === "aqua" && document.getElementById(17).style.backgroundColor === "aqua" && document.getElementById(22).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
      break;
    case "3":
      if (document.getElementById(1).style.backgroundColor === "aqua" && document.getElementById(2).style.backgroundColor === "aqua" && document.getElementById(3).style.backgroundColor === "aqua" && document.getElementById(4).style.backgroundColor === "aqua" && document.getElementById(5).style.backgroundColor === "aqua" ||
        document.getElementById(3).style.backgroundColor === "aqua" && document.getElementById(8).style.backgroundColor === "aqua" && document.getElementById(13).style.backgroundColor === "aqua" && document.getElementById(18).style.backgroundColor === "aqua" && document.getElementById(23).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
      break;
    case "4":
      if (document.getElementById(1).style.backgroundColor === "aqua" && document.getElementById(2).style.backgroundColor === "aqua" && document.getElementById(3).style.backgroundColor === "aqua" && document.getElementById(4).style.backgroundColor === "aqua" && document.getElementById(5).style.backgroundColor === "aqua" ||
        document.getElementById(4).style.backgroundColor === "aqua" && document.getElementById(9).style.backgroundColor === "aqua" && document.getElementById(14).style.backgroundColor === "aqua" && document.getElementById(19).style.backgroundColor === "aqua" && document.getElementById(24).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
      break;
    case "5":
      if (document.getElementById(1).style.backgroundColor === "aqua" && document.getElementById(2).style.backgroundColor === "aqua" && document.getElementById(3).style.backgroundColor === "aqua" && document.getElementById(4).style.backgroundColor === "aqua" && document.getElementById(5).style.backgroundColor === "aqua" ||
        document.getElementById(5).style.backgroundColor === "aqua" && document.getElementById(10).style.backgroundColor === "aqua" && document.getElementById(15).style.backgroundColor === "aqua" && document.getElementById(20).style.backgroundColor === "aqua" && document.getElementById(25).style.backgroundColor === "aqua" ||
        document.getElementById(5).style.backgroundColor === "aqua" && document.getElementById(9).style.backgroundColor === "aqua" && document.getElementById(13).style.backgroundColor === "aqua" && document.getElementById(17).style.backgroundColor === "aqua" && document.getElementById(21).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
      break;
    case "6":
      if (document.getElementById(1).style.backgroundColor === "aqua" && document.getElementById(6).style.backgroundColor === "aqua" && document.getElementById(11).style.backgroundColor === "aqua" && document.getElementById(16).style.backgroundColor === "aqua" && document.getElementById(21).style.backgroundColor === "aqua" ||
        document.getElementById(6).style.backgroundColor === "aqua" && document.getElementById(7).style.backgroundColor === "aqua" && document.getElementById(8).style.backgroundColor === "aqua" && document.getElementById(9).style.backgroundColor === "aqua" && document.getElementById(10).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
      break;
    case "7":
      if (document.getElementById(2).style.backgroundColor === "aqua" && document.getElementById(7).style.backgroundColor === "aqua" && document.getElementById(12).style.backgroundColor === "aqua" && document.getElementById(17).style.backgroundColor === "aqua" && document.getElementById(22).style.backgroundColor === "aqua" ||
        document.getElementById(6).style.backgroundColor === "aqua" && document.getElementById(7).style.backgroundColor === "aqua" && document.getElementById(8).style.backgroundColor === "aqua" && document.getElementById(9).style.backgroundColor === "aqua" && document.getElementById(10).style.backgroundColor === "aqua" ||
        document.getElementById(1).style.backgroundColor === "aqua" && document.getElementById(7).style.backgroundColor === "aqua" && document.getElementById(13).style.backgroundColor === "aqua" && document.getElementById(19).style.backgroundColor === "aqua" && document.getElementById(25).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
    case "8":
      if (document.getElementById(3).style.backgroundColor === "aqua" && document.getElementById(8).style.backgroundColor === "aqua" && document.getElementById(13).style.backgroundColor === "aqua" && document.getElementById(18).style.backgroundColor === "aqua" && document.getElementById(23).style.backgroundColor === "aqua" ||
        document.getElementById(6).style.backgroundColor === "aqua" && document.getElementById(7).style.backgroundColor === "aqua" && document.getElementById(8).style.backgroundColor === "aqua" && document.getElementById(9).style.backgroundColor === "aqua" && document.getElementById(10).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
      break;
    case "9":
      if (document.getElementById(4).style.backgroundColor === "aqua" && document.getElementById(9).style.backgroundColor === "aqua" && document.getElementById(14).style.backgroundColor === "aqua" && document.getElementById(19).style.backgroundColor === "aqua" && document.getElementById(24).style.backgroundColor === "aqua" ||
        document.getElementById(6).style.backgroundColor === "aqua" && document.getElementById(7).style.backgroundColor === "aqua" && document.getElementById(8).style.backgroundColor === "aqua" && document.getElementById(9).style.backgroundColor === "aqua" && document.getElementById(10).style.backgroundColor === "aqua" ||
        document.getElementById(5).style.backgroundColor === "aqua" && document.getElementById(9).style.backgroundColor === "aqua" && document.getElementById(13).style.backgroundColor === "aqua" && document.getElementById(17).style.backgroundColor === "aqua" && document.getElementById(21).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
      break;
    case "10":
      if (document.getElementById(5).style.backgroundColor === "aqua" && document.getElementById(10).style.backgroundColor === "aqua" && document.getElementById(15).style.backgroundColor === "aqua" && document.getElementById(20).style.backgroundColor === "aqua" && document.getElementById(25).style.backgroundColor === "aqua" ||
        document.getElementById(6).style.backgroundColor === "aqua" && document.getElementById(7).style.backgroundColor === "aqua" && document.getElementById(8).style.backgroundColor === "aqua" && document.getElementById(9).style.backgroundColor === "aqua" && document.getElementById(10).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
      break;
    case "11":
      if (document.getElementById(1).style.backgroundColor === "aqua" && document.getElementById(6).style.backgroundColor === "aqua" && document.getElementById(11).style.backgroundColor === "aqua" && document.getElementById(16).style.backgroundColor === "aqua" && document.getElementById(21).style.backgroundColor === "aqua" ||
        document.getElementById(11).style.backgroundColor === "aqua" && document.getElementById(12).style.backgroundColor === "aqua" && document.getElementById(13).style.backgroundColor === "aqua" && document.getElementById(14).style.backgroundColor === "aqua" && document.getElementById(15).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
      break;
    case "12":
      if (document.getElementById(2).style.backgroundColor === "aqua" && document.getElementById(7).style.backgroundColor === "aqua" && document.getElementById(12).style.backgroundColor === "aqua" && document.getElementById(17).style.backgroundColor === "aqua" && document.getElementById(22).style.backgroundColor === "aqua" ||
        document.getElementById(11).style.backgroundColor === "aqua" && document.getElementById(12).style.backgroundColor === "aqua" && document.getElementById(13).style.backgroundColor === "aqua" && document.getElementById(14).style.backgroundColor === "aqua" && document.getElementById(15).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
      break;
    case "13":
      if (document.getElementById(3).style.backgroundColor === "aqua" && document.getElementById(8).style.backgroundColor === "aqua" && document.getElementById(13).style.backgroundColor === "aqua" && document.getElementById(18).style.backgroundColor === "aqua" && document.getElementById(23).style.backgroundColor === "aqua" ||
        document.getElementById(11).style.backgroundColor === "aqua" && document.getElementById(12).style.backgroundColor === "aqua" && document.getElementById(13).style.backgroundColor === "aqua" && document.getElementById(14).style.backgroundColor === "aqua" && document.getElementById(15).style.backgroundColor === "aqua" ||
        document.getElementById(1).style.backgroundColor === "aqua" && document.getElementById(7).style.backgroundColor === "aqua" && document.getElementById(13).style.backgroundColor === "aqua" && document.getElementById(19).style.backgroundColor === "aqua" && document.getElementById(25).style.backgroundColor === "aqua" ||
        document.getElementById(5).style.backgroundColor === "aqua" && document.getElementById(9).style.backgroundColor === "aqua" && document.getElementById(13).style.backgroundColor === "aqua" && document.getElementById(17).style.backgroundColor === "aqua" && document.getElementById(21).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
      break;
    case "14":
      if (document.getElementById(4).style.backgroundColor === "aqua" && document.getElementById(9).style.backgroundColor === "aqua" && document.getElementById(14).style.backgroundColor === "aqua" && document.getElementById(19).style.backgroundColor === "aqua" && document.getElementById(24).style.backgroundColor === "aqua" ||
        document.getElementById(11).style.backgroundColor === "aqua" && document.getElementById(12).style.backgroundColor === "aqua" && document.getElementById(13).style.backgroundColor === "aqua" && document.getElementById(14).style.backgroundColor === "aqua" && document.getElementById(15).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
      break;
    case "15":
      if (document.getElementById(5).style.backgroundColor === "aqua" && document.getElementById(10).style.backgroundColor === "aqua" && document.getElementById(15).style.backgroundColor === "aqua" && document.getElementById(20).style.backgroundColor === "aqua" && document.getElementById(25).style.backgroundColor === "aqua" ||
        document.getElementById(11).style.backgroundColor === "aqua" && document.getElementById(12).style.backgroundColor === "aqua" && document.getElementById(13).style.backgroundColor === "aqua" && document.getElementById(14).style.backgroundColor === "aqua" && document.getElementById(15).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
      break;
    case "16":
      if (document.getElementById(1).style.backgroundColor === "aqua" && document.getElementById(6).style.backgroundColor === "aqua" && document.getElementById(11).style.backgroundColor === "aqua" && document.getElementById(16).style.backgroundColor === "aqua" && document.getElementById(21).style.backgroundColor === "aqua" ||
        document.getElementById(16).style.backgroundColor === "aqua" && document.getElementById(17).style.backgroundColor === "aqua" && document.getElementById(18).style.backgroundColor === "aqua" && document.getElementById(19).style.backgroundColor === "aqua" && document.getElementById(20).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
      break;
    case "17":
      if (document.getElementById(2).style.backgroundColor === "aqua" && document.getElementById(7).style.backgroundColor === "aqua" && document.getElementById(12).style.backgroundColor === "aqua" && document.getElementById(17).style.backgroundColor === "aqua" && document.getElementById(22).style.backgroundColor === "aqua" ||
        document.getElementById(16).style.backgroundColor === "aqua" && document.getElementById(17).style.backgroundColor === "aqua" && document.getElementById(18).style.backgroundColor === "aqua" && document.getElementById(19).style.backgroundColor === "aqua" && document.getElementById(20).style.backgroundColor === "aqua" ||
        document.getElementById(5).style.backgroundColor === "aqua" && document.getElementById(9).style.backgroundColor === "aqua" && document.getElementById(13).style.backgroundColor === "aqua" && document.getElementById(17).style.backgroundColor === "aqua" && document.getElementById(21).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
      break;
    case "18":
      if (document.getElementById(3).style.backgroundColor === "aqua" && document.getElementById(8).style.backgroundColor === "aqua" && document.getElementById(13).style.backgroundColor === "aqua" && document.getElementById(18).style.backgroundColor === "aqua" && document.getElementById(23).style.backgroundColor === "aqua" ||
        document.getElementById(16).style.backgroundColor === "aqua" && document.getElementById(17).style.backgroundColor === "aqua" && document.getElementById(18).style.backgroundColor === "aqua" && document.getElementById(19).style.backgroundColor === "aqua" && document.getElementById(20).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
      break;
    case "19":
      if (document.getElementById(4).style.backgroundColor === "aqua" && document.getElementById(9).style.backgroundColor === "aqua" && document.getElementById(14).style.backgroundColor === "aqua" && document.getElementById(19).style.backgroundColor === "aqua" && document.getElementById(24).style.backgroundColor === "aqua" ||
        document.getElementById(16).style.backgroundColor === "aqua" && document.getElementById(17).style.backgroundColor === "aqua" && document.getElementById(18).style.backgroundColor === "aqua" && document.getElementById(19).style.backgroundColor === "aqua" && document.getElementById(20).style.backgroundColor === "aqua" ||
        document.getElementById(1).style.backgroundColor === "aqua" && document.getElementById(7).style.backgroundColor === "aqua" && document.getElementById(13).style.backgroundColor === "aqua" && document.getElementById(19).style.backgroundColor === "aqua" && document.getElementById(25).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
      break;
    case "20":
      if (document.getElementById(5).style.backgroundColor === "aqua" && document.getElementById(10).style.backgroundColor === "aqua" && document.getElementById(15).style.backgroundColor === "aqua" && document.getElementById(20).style.backgroundColor === "aqua" && document.getElementById(25).style.backgroundColor === "aqua" ||
        document.getElementById(16).style.backgroundColor === "aqua" && document.getElementById(17).style.backgroundColor === "aqua" && document.getElementById(18).style.backgroundColor === "aqua" && document.getElementById(19).style.backgroundColor === "aqua" && document.getElementById(20).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
      break;
    case "21":
      if (document.getElementById(1).style.backgroundColor === "aqua" && document.getElementById(6).style.backgroundColor === "aqua" && document.getElementById(11).style.backgroundColor === "aqua" && document.getElementById(16).style.backgroundColor === "aqua" && document.getElementById(21).style.backgroundColor === "aqua" ||
        document.getElementById(21).style.backgroundColor === "aqua" && document.getElementById(22).style.backgroundColor === "aqua" && document.getElementById(23).style.backgroundColor === "aqua" && document.getElementById(24).style.backgroundColor === "aqua" && document.getElementById(25).style.backgroundColor === "aqua" ||
        document.getElementById(21).style.backgroundColor === "aqua" && document.getElementById(17).style.backgroundColor === "aqua" && document.getElementById(13).style.backgroundColor === "aqua" && document.getElementById(9).style.backgroundColor === "aqua" && document.getElementById(5).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
    case "22":
      if (document.getElementById(2).style.backgroundColor === "aqua" && document.getElementById(7).style.backgroundColor === "aqua" && document.getElementById(12).style.backgroundColor === "aqua" && document.getElementById(17).style.backgroundColor === "aqua" && document.getElementById(22).style.backgroundColor === "aqua" ||
        document.getElementById(21).style.backgroundColor === "aqua" && document.getElementById(22).style.backgroundColor === "aqua" && document.getElementById(23).style.backgroundColor === "aqua" && document.getElementById(24).style.backgroundColor === "aqua" && document.getElementById(25).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
      break;
    case "23":
      if (document.getElementById(3).style.backgroundColor === "aqua" && document.getElementById(8).style.backgroundColor === "aqua" && document.getElementById(13).style.backgroundColor === "aqua" && document.getElementById(18).style.backgroundColor === "aqua" && document.getElementById(23).style.backgroundColor === "aqua" ||
        document.getElementById(21).style.backgroundColor === "aqua" && document.getElementById(22).style.backgroundColor === "aqua" && document.getElementById(23).style.backgroundColor === "aqua" && document.getElementById(24).style.backgroundColor === "aqua" && document.getElementById(25).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
      break;
    case "24":
      if (document.getElementById(24).style.backgroundColor === "aqua" && document.getElementById(9).style.backgroundColor === "aqua" && document.getElementById(14).style.backgroundColor === "aqua" && document.getElementById(19).style.backgroundColor === "aqua" && document.getElementById(24).style.backgroundColor === "aqua" ||
        document.getElementById(21).style.backgroundColor === "aqua" && document.getElementById(22).style.backgroundColor === "aqua" && document.getElementById(23).style.backgroundColor === "aqua" && document.getElementById(24).style.backgroundColor === "aqua" && document.getElementById(25).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
      break;
    case "25":
      if (document.getElementById(5).style.backgroundColor === "aqua" && document.getElementById(10).style.backgroundColor === "aqua" && document.getElementById(15).style.backgroundColor === "aqua" && document.getElementById(20).style.backgroundColor === "aqua" && document.getElementById(25).style.backgroundColor === "aqua" ||
        document.getElementById(21).style.backgroundColor === "aqua" && document.getElementById(22).style.backgroundColor === "aqua" && document.getElementById(23).style.backgroundColor === "aqua" && document.getElementById(24).style.backgroundColor === "aqua" && document.getElementById(25).style.backgroundColor === "aqua" ||
        document.getElementById(1).style.backgroundColor === "aqua" && document.getElementById(7).style.backgroundColor === "aqua" && document.getElementById(13).style.backgroundColor === "aqua" && document.getElementById(19).style.backgroundColor === "aqua" && document.getElementById(25).style.backgroundColor === "aqua") {
        window.alert("BINGO!");
      }
      break;
  }
}

function bingoSquareText() {
  var bingoSquareText = new Array();
  bingoSquareText[0] = "IBM Cloud";
  bingoSquareText[1] = "IBM Cloud Satellite";
  bingoSquareText[2] = "IBM Cloud 柔らか層本";
  bingoSquareText[3] = "Subscription";
  bingoSquareText[4] = "IBM Technology Day";
  bingoSquareText[5] = "IBM Cloud Service Description";
  bingoSquareText[6] = "Reserved Virtual Server";
  bingoSquareText[7] = "IBM Cloud Catalog";
  bingoSquareText[8] = "IBM Cloud Code Engine";
  bingoSquareText[9] = "IBM Cloud for Financial Services";
  bingoSquareText[10] = "IBM Cloud Internet Services";
  bingoSquareText[11] = "VMware vCenter Server on IBM Cloud(VCS)";
  bingoSquareText[12] = "Multi Zone Region";
  bingoSquareText[13] = "PAYG";
  bingoSquareText[14] = "Transient Virtual Server";
  bingoSquareText[15] = "IBM Power Systems Virtual Server ";
  bingoSquareText[16] = "Dizzion DaaS on IBM Cloud";
  bingoSquareText[17] = "IBM Cloud Object Storage";
  bingoSquareText[18] = "IBM Cloud Kubernetes Service";
  bingoSquareText[19] = "Hyper Protect Crypto Services";
  bingoSquareText[20] = "ROKS";
  bingoSquareText[21] = "IBM Cloud Databases";
  bingoSquareText[22] = "Premium Support";
  bingoSquareText[23] = "Mass Data Migration";
  bingoSquareText[24] = "IBM Cloud blog";
  bingoSquareText[25] = "Cross Region";
  bingoSquareText[26] = "コスト見積もりツール";
  bingoSquareText[27] = "Smart Tier";
  bingoSquareText[28] = "Auto Scale";
  bingoSquareText[29] = "Regional";
  
/*
  bingoSquareText[0] = "IBM Cloud";
  bingoSquareText[1] = "IBM Cloud Satellite";
  bingoSquareText[2] = "IBM Cloud 柔らか層本";
  bingoSquareText[3] = "Subscription";
  bingoSquareText[4] = "IBM Technology Day";
  bingoSquareText[5] = "IBM Cloud Service Description";
  bingoSquareText[6] = "Reserved Virtual Server";
  bingoSquareText[7] = "IBM Cloud Catalog";
  bingoSquareText[8] = "IBM Cloud Code Engine";
  bingoSquareText[9] = "IBM Cloud for Financial Services";
  bingoSquareText[10] = "IBM Cloud Internet Services";
  bingoSquareText[11] = "VMware vCenter Server on IBM Cloud(VCS)";
  bingoSquareText[12] = "Multi Zone Region";
  bingoSquareText[13] = "PAYG";
  bingoSquareText[14] = "Tier3";
  bingoSquareText[15] = "Transient Virtual Server";
  bingoSquareText[16] = "IBM Power Systems Virtual Server ";
  bingoSquareText[17] = "Dizzion DaaS on IBM Cloud";
  bingoSquareText[18] = "IBM Cloud Log Analysis with LogDNA";
  bingoSquareText[19] = "IBM Cloud docs";
  bingoSquareText[20] = "Single Zone Region";
  bingoSquareText[21] = "IBM Cloud Object Storage";
  bingoSquareText[22] = "IBM Cloud Kubernetes Service";
  bingoSquareText[23] = "Hyper Protect Crypto Services";
  bingoSquareText[24] = "ROKS";
  bingoSquareText[25] = "IBM Cloud Databases";
  bingoSquareText[26] = "IBM Cloud Lite Account";
  bingoSquareText[27] = "IBM Cloud Load Balancer";
  bingoSquareText[28] = "Premium Support";
  bingoSquareText[29] = "Hybrid Cloud Build Team";
  bingoSquareText[30] = "VMware vSphere on IBM Cloud(VSS)";
  bingoSquareText[31] = "Mass Data Migration";
  bingoSquareText[32] = "Anniversary Billing Date(ABD)";
  bingoSquareText[33] = "IBM Cloud Block Storage";
  bingoSquareText[34] = "IBM Cloud blog";
  bingoSquareText[35] = "VMware HCX";
  bingoSquareText[36] = "Cross Region";
  bingoSquareText[37] = "IBM Cloud Identity and Access Management(IAM)";
  bingoSquareText[38] = "コスト見積もりツール";
  bingoSquareText[39] = "Smart Tier";
  bingoSquareText[40] = "IBM Cloud Data Shield";
  bingoSquareText[41] = "IBM Cloud Container Registry";
  bingoSquareText[42] = "Auto Scale";
  bingoSquareText[43] = "Public Network";
  bingoSquareText[44] = "IBM Aspera";
  bingoSquareText[45] = "Regional";
  bingoSquareText[46] = "Advanced Support";
  bingoSquareText[47] = "IBM Cloud Security Guidebook";
  bingoSquareText[48] = "SOC2";
*/
  
  for (i = 1; i < 26; i++) {
    if (i == 13) {
      document.getElementById(i).innerHTML = "Free";
      document.getElementById(i).style.background = "aqua";
    } else {
    var x = Math.floor((Math.random() * bingoSquareText.length));
    document.getElementById(i).innerHTML = bingoSquareText[x];
      if (x > -1) {
      bingoSquareText.splice(x, 1);
      }
    }
  }
}
