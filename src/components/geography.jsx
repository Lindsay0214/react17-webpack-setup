import React from 'react'

function Geography() {
    return (
        <div>
            <div className="grid grid-cols-2 m-10">
                <h2 className='text-2xl'>地理圖案</h2>
                <div className="grid grid-cols-2">
                    <select>
                        <option>適合年齡...</option>
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Hamster</option>
                        <option>Parrot</option>
                        <option>Spider</option>
                        <option>Goldfish</option>
                    </select>
                    <select>
                        <option>網站類型...</option>
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Hamster</option>
                        <option>Parrot</option>
                        <option>Spider</option>
                        <option>Goldfish</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 m-10 pt-10">
                <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" className="hover:opacity-75 w-full h-auto rounded-lg" alt="" />
                <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" className="hover:opacity-75 w-full h-auto rounded-lg" alt="" />
                <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" className="hover:opacity-75 w-full h-auto rounded-lg" alt="" />
                <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" className="hover:opacity-75 w-full h-auto rounded-lg" alt="" />
            </div>
            <div className="grid grid-cols-4 gap-4 m-10 pt-10">
                <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" className="hover:opacity-75 w-full h-auto rounded-lg" alt="" />
                <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" className="hover:opacity-75 w-full h-auto rounded-lg" alt="" />
                <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" className="hover:opacity-75 w-full h-auto rounded-lg" alt="" />
                <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" className="hover:opacity-75 w-full h-auto rounded-lg" alt="" />
            </div>
        </div>
    )
}

export default Geography;
