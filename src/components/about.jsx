import React from 'react'

function About() {
    return (
        <div>
            <div className="grid grid-cols-3 gap-4 m-10">
                <div className="m-2">
                <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" className="hover:opacity-75 w-full h-auto rounded-lg" alt="" />
                </div>
                <div className="col-span-2">
                    <h2 className="text-2xl">專案理念</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repudiandae officia consequuntur possimus accusamus deserunt molestiae veniam fuga, quasi voluptatibus ex ullam praesentium similique consectetur eligendi dolorem et dolores quia?</p>
                </div>

                <div className="col-span-2 mt-6">
                    <h2 className="text-2xl">專案理念</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repudiandae officia consequuntur possimus accusamus deserunt molestiae veniam fuga, quasi voluptatibus ex ullam praesentium similique consectetur eligendi dolorem et dolores quia?</p>
                </div>
                <div className="m-2 mt-6">
                <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" className="hover:opacity-75 w-full h-auto rounded-lg" alt="" />
                </div>
            </div>
            <div className="grid place-content-center text-xl">
                <h2 className="grid place-content-center">團隊成員</h2>
                <div className="grid grid-cols-4 gap-4 m-10">
                    <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" className="hover:opacity-75 w-full h-auto rounded-lg" alt="" />
                    <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" className="hover:opacity-75 w-full h-auto rounded-lg" alt="" />
                    <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" className="hover:opacity-75 w-full h-auto rounded-lg" alt="" />
                    <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" className="hover:opacity-75 w-full h-auto rounded-lg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About;
