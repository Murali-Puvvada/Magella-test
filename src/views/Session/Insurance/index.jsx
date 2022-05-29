/* eslint-disable quotes */
/* eslint-disable import/order */
import React from "react";
import Page from "Components/Page";
import styles from "./insurance.module.css";
import PageHeader from "Components/Page/PageHeader";
import CompanyLogo from "Components/CompanyLogo";
import Download from "Components/Icon/icons/Download";
import CheckMark from "Components/Icon/icons/CheckMark";


import copy from "../copy.json"
import session from "Data/session.json";
import {insurance,parameters} from "Data/homeinsurance.json"

import Headline from "Components/Headline";
import Icon from "Components/Icon";
import Close from "Components/Icon/icons/Close";
import InfoCircle from "Components/Icon/icons/InfoCircle";


export default function InsurancePage({ insuranceId, insurances, session }) {
    let saker = [];
    let familj = [];
    let resan = [];
    let ovrigt = [];
    let hem = [];
    return (
    <div className={styles.container}>
     <Page title={copy.pageTitle["sv"]}
     breadcrumbs={[
         { name: "Session", url: "/session" },
         { name: session.freeText, url: "/session" },
         {name: insurance.insuranceName, url:"/session"}
     ]}
     >
         <div className={styles.smallcontainer}>
             <div className={styles.headerflex}>
                <div><CompanyLogo className={styles.logo} company={insurance.insuranceCompany}></CompanyLogo></div>
                <div className={styles.alignItems}>
                 <p>{insurance.insuranceName}</p>
                 <p>{insurance.insuranceObjectAddress}</p>
                 <span><InfoCircle/>This insurance is signed by another person</span>
                </div>
                <div className={styles.btnmain}>
                 <button><span><Download color={"#279a84"}/></span>Transfer power of attorney</button>
                 <button><span><Download color={"#279a84"}/></span>Export as PDF</button>
                </div>
            </div>
            <hr></hr>
            <div className={styles.insdata}>
                <div className={styles.maindata}>
                     <div>
                     <p>Cost per month  </p>
                     <h2>{Math.round(insurance.premiumAmountYear/12)} kr </h2>
                     </div>
                    <div>
                     <p>Cost per Year  </p>
                     <h2>{insurance.premiumAmountYear} kr </h2>
                    </div>
                    <div>
                     <p>Contract Period</p>
                     <h2>{insurance.paidUntil}</h2>
                    </div>
                 </div>
            </div>
            <hr/>
            <div className={styles.grid}>
                <div className={styles.instable}>
                    <table>
                        <tbody>
                            <tr><h3>Insurance</h3></tr>
                            <tr>
                         <td><h6>Insurance Holder</h6></td>
                        <td className={styles.test}><h5>{insurance.insuranceHolderName}</h5></td>
                     </tr>
                            <tr>
                        <td><h6>Insurance Number</h6></td>
                        <td><h5>{insurance.insuranceNumber}</h5></td>
                     </tr>
                            <tr>
                        <td><h6>Insurance Company</h6></td>
                        <td><h5>{insurance.insuranceCompany}</h5></td>
                     </tr>
                            <tr>
                        <td><h6>Insurance Name</h6></td>
                         <td><h5>{insurance.insuranceName}</h5></td>
                     </tr>
                            <tr>
                        <td><h6>Contract Period</h6></td>
                      <td><h5>{insurance.paidUntil}</h5></td>
                    </tr>
                            <tr>
                     <td><h6>Living Area </h6></td>
                     <td><h5>{insurance.livingArea = null || "Not Specified"}</h5></td>
                 </tr>
                            <tr>
                     <td><h6>Supplement</h6></td>
                     <td><h5>{insurance.insuranceSubType}</h5></td>
                 </tr>
                        </tbody>
                    </table>



             <table>
                 <tbody>
                    <tr><h3>Cost</h3></tr>
                    <tr>
                     <td><h6>Cost per month</h6></td>
                     <td><h5>{Math.round(insurance.premiumAmountYear/12)} kr</h5></td>
                 </tr>
                    <tr>
                     <td><h6>Cost per year</h6></td>
                     <td><h5>{insurance.premiumAmountYear}</h5></td>
                 </tr>
                    <tr>
                     <td><h6>Payment Frequency</h6></td>
                     <td><h5>{insurance.premiumFrequency}</h5></td>
                 </tr>
                    <tr>
                     <td><h6>Payment Method</h6></td>
                     <td><h5>{insurance.paymentMethod}</h5></td>
                 </tr>
                 </tbody>
             </table>
            </div>

         {parameters.filter(parameter => {
             if(parameter.parameterGroup.match("Du och din familj")){
                 familj.push(parameter)
             }
             else if (parameter.parameterGroup.match("Dina saker")){
                 saker.push(parameter)
             }else if(parameter.parameterGroup.match("På resan")){
                 resan.push(parameter)
             }else if(parameter.parameterGroup.match("Övrigt")){
                 ovrigt.push(parameter)
             }else if(parameter.parameterGroup.match("Ditt hem")){
                 hem.push(parameter)
             }else {
                 console.log("Parameter Group Not specified")
             }
         })
         }

         <div className={styles.extent}>
            <table>
                <tbody>
                    <div className={styles.extentflex}>
                  <tr className={styles.extenthead}>
                      <h2>Extent</h2>
                      <a>Terms and Conditions &#8594; </a>
                  </tr>

                  <button className={styles.btncompare}>
                      <img src={require("Components/Icon/horizontal-arrow.png").default}/>
                      Compare
                  </button>
              </div>
                    <tr  colSpan={3}><h3>Du och din familj</h3></tr>
                    {familj.map( (display) => (
                           <tr className={styles.tableborder}>
                               <td><span>+</span> {display.parameterDisplayName}</td>
                               <td>{display.value === "true" ? CheckMark({color:"Green"}): Close({color:"Red"})}</td>
                           </tr>
                           ) )}
                    <tr colSpan={2}><h3>Dina saker</h3></tr>
                    {saker.map( (display) => (
                    <tr className={styles.tableborder}>
                        <td><span>+</span> {display.parameterDisplayName}</td>
                        <td>{display.value === "true" ? CheckMark({color:"Green"}): Close({color:"Red"})}</td>
                    </tr>
                ) )}
                    <tr colSpan={2}><h3>På resan</h3></tr>
                    {resan.map( (display) => (
                    <tr >

                        <td className={styles.tableborder}><span>+</span> {display.parameterDisplayName} </td>
                        <td>{display.value === "true" ? CheckMark({color:"Green"}): Close({color:"Red"})}</td>

                    </tr>
                ) )}
                    <tr colSpan={2}><h3>Övrigt</h3></tr>
                    {ovrigt.map( (display) => (
                    <tr className={styles.tableborder}>
                        <td><span>+</span> {display.parameterDisplayName}</td>
                        <td>{display.value === "true" ? CheckMark({color:"Green"}):Close({color:"Red"})}</td>
                    </tr>
                ) )}
                    <tr colSpan={2}><h3>Ditt hem</h3></tr>
                    {hem.map( (display) => (
                    <tr >

                        <td><span>+</span> {display.parameterDisplayName}</td>
                        <td style={{width:"16px"}}>{display.value === "true" ? "✔":Close({color:"Red"})}</td>
                    </tr>
                ) )}
                </tbody>


            </table>


                </div>
            </div>
          </div>
         </Page>






    </div>
  );
}
