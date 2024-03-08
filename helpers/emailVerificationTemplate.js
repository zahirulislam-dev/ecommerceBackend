function emailVerificationTemplate(token){
    return `<div><img alt=""src=https://i.ibb.co/jgrPvpd/OREBI.png style=width:100px><h1 style="font-family:'DM Sans',sans-serif">OREBI eCOMMERCE</h1><p style="font-family:'DM Sans',sans-serif">Please verify Your Email Address</p>${token}<button style="font-family:'DM Sans',sans-serif;background:#262626;padding:20px;color:#fff;border:none">Click For Verification</button></div>`
}

module.exports = emailVerificationTemplate;