import Image from "next/image";

const about = () => {
  return (
    <div>
      <div>
        <div className="relative -z-10 h-[35vh] md:h-[45vh]">
          <Image
            src={"/aboutpic.jpg"}
            layout="fill"
            objectFit="cover"
            alt="Pic of clothes"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 z-10 hidden max-h-[5vh]"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,64L48,80C96,96,192,128,288,154.7C384,181,480,203,576,197.3C672,192,768,160,864,176C960,192,1056,256,1152,282.7C1248,309,1344,299,1392,293.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="mx-auto w-3/4 md:w-4/6 lg:w-1/2">
          <div className="text-center">
            <p className="mt-8 mb-3 text-4xl font-bold md:mt-10 md:mb-5 md:text-5xl lg:mb-7 lg:mt-12 lg:text-7xl">
              ABOUT US
            </p>
            <hr className="mx-auto mb-3 w-1/4 border border-red-700 md:mb-5 lg:mb-7" />
            <p className="mb-16 text-lg lg:text-xl">
              Biowear is company for providing you with the best science clothes
              you will ever need for any purpose. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. A impedit eligendi tempore itaque
              commodi! Omnis sed saepe natus harum, laudantium magnam
              cupiditate. Iusto, necessitatibus Dignissimos dolorum doloribus
              porro quibusdam molestiae nulla consequatur eligendi velit,
              assumenda pariatur, vel itaque voluptatibus. Cumque, impedit?
            </p>
          </div>
          <div className="text-center">
            <p className="mb-3 text-3xl font-bold md:mb-5 md:text-4xl lg:mb-7 lg:text-5xl">
              What we do
            </p>
            <hr className="mx-auto mb-3 w-1/4 border border-red-700 md:mb-5 lg:mb-7" />
            <p className="mb-16 text-lg lg:text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
              voluptate tempore, quidem cumque corrupti incidunt doloribus
              exercitationem illo corporis iure nobis quis dicta ducimus
              voluptates dolor qui! Corporis omnis quos blanditiis, explicabo
              excepturi exercitationem nostrum saepe libero, provident ipsa
              sapiente accusantium reiciendis modi eos odio ratione et!
              Delectus, repellat quia!
            </p>
          </div>
          <div className="text-center">
            <p className="mb-3 text-4xl font-bold md:mb-5 lg:mb-7 lg:text-5xl">
              Why Choose us
            </p>
            <hr className="mx-auto mb-3 w-1/4 border border-red-700 md:mb-5 lg:mb-7" />
            <p className="mb-16 text-lg lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aut
              hic distinctio pariatur enim est aliquam quo a excepturi, ea,
              dolores ab modi odit facilis libero fugit beatae? Similique a ut
              minus, repudiandae assumenda aperiam facilis voluptas, deleniti
              autem quos quas enim. Libero molestiae cum odit, nisi fugit
              repellat totam! Eum debitis fuga molestias reprehenderit magni
              quia sequi adipisci ullam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
