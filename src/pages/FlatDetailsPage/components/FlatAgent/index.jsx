import React from 'react'

export const FlatAgent = () => {
    return (
        <>
            <div class="infotab4">
            <div class="infotab4-1">
                <div class="subtext-house">
                    <i class="bi bi-house-fill" style={{color:"rgb(216, 35, 42)"}}></i>

                </div>
                <div class="subtext-1">
                    <strong>Save Property</strong><br/>
                    Don't want to share your details with the agent right now?
                </div>
                <div class="subtext-2">
                    <button type="button" class="btn btn-danger" style={{backgroundColor:'rgb(216, 35, 42)'}}>Save Property For Later</button>
                </div>
            </div>


            <div class="infotab4-2">
                <div class="smallcard-1">
                    <img src="images/hoamloan.jpg"/>
                </div>
                <div class="smallcard-2">
                    <div class="smalltitle"> Puneet Gupta <i class="bi bi-info-circle"></i></div>
                    <div><i class="bi bi-patch-check-fill"></i>Certified Agent </div>
                    <span class="">+91 -99XXXXXX27 </span><br/>
                    <button type="button" class="btn btn-danger" style={{backgroundColor:"rgb(216, 35, 42)"}}>Contact Agent</button>

                </div>

            </div>


        </div>
        </>
    )
}
