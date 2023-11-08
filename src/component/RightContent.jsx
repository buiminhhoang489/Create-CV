import React from 'react'

export default function Education() {
  return (
    <div>
        <div className='right_content'>
    <img src="data:image/jpeg;base64,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"></img>
    <h2 style={{borderBottom:'2px solid black'}}>Thông tin cá nhân </h2>
-Địa chỉ:63/24/68, phường Tân kiểng, đường Lâm Văn Bền, quận 7<br></br>
-Điện thoại: 0987290245.<br></br>
-email: buiminhhoang489@gmail.com.<br></br>
-Ngày sinh:28-09-1998

    </div>  
    </div>

  )
}
