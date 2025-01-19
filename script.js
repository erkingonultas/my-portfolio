/// SLIDE LOGIC
document.addEventListener("DOMContentLoaded", () => {
    const totalSlides = 8;
    let currentSlide = 1;
    let isAnimating = false;
    let scrollAllowed = true;
    let lastScrollTime = 0;

    /// arkaplan foto bul. ekran görüntüsü bul.
    const slideTitles = [
        "CalorimeterAI",
        "LydianAI",
        "LinguaNova",
        "APOLLO",
        "Schuldenex",
        "Calorimeter",
        "TIMPLE",
        "FLIPSTER",
    ];

    const slideDescriptions = [
        "Having a dietian was never this effortless.",
        "Bring your ideas to life by simply telling them.",
        "Practice your speech skills in your way.",
        "A music player you can finally trully own.",
        "Customer service app for a German law office.",
        "Track your calories and set goals.",
        "A social media project for music enthusiasts.",
        "A mobile game project for car enthusiasts.",
    ];

    function createSlide(slideNumber, direction) {
        const slide = document.createElement("div");
        slide.className = "slide"

        const slideBgImg = document.createElement("div");
        slideBgImg.className = "slide-bg-img";

        const img = document.createElement("img");
        img.src = `./assets/bgs/img${slideNumber}.jpg`;
        img.alt = "";

        slideBgImg.appendChild(img);
        slide.appendChild(slideBgImg);

        if (direction === "down") {
            slideBgImg.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
        } else {
            slideBgImg.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
        }

        return slide;
    }

    function createMainImageWrapper(slideNumber, direction) {
        const wrapper = document.createElement("div");
        wrapper.className = "slide-main-img-wrapper";

        const img = document.createElement("img");
        img.src = `./assets/ss/img${slideNumber}.jpg`;
        img.alt = "";

        wrapper.appendChild(img);

        if (direction === "down") {
            wrapper.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
        } else {
            wrapper.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
        }

        return wrapper;
    }

    function createTextElements(slideNumber, direction) {
        const newTitle = document.createElement("h1");
        newTitle.textContent = slideTitles[slideNumber - 1];

        gsap.set(newTitle, {
            y: direction === "down" ? 50 : -50,
        });


        const newDescription = document.createElement("p");
        newDescription.textContent = slideDescriptions[slideNumber - 1];

        gsap.set(newDescription, {
            y: direction === "down" ? 20 : -20,
        });

        const newCounter = document.createElement("p");
        newCounter.textContent = slideNumber;

        gsap.set(newCounter, {
            y: direction === "down" ? 18 : -18,
        });

        return { newTitle, newDescription, newCounter };
    }

    function animateSlide(direction) {
        if (isAnimating || !scrollAllowed) return;

        isAnimating = true;
        scrollAllowed = false;

        const slider = document.querySelector(".slider");
        const currentSlideElement = slider.querySelector(".slide");
        const mainImageContainer = document.querySelector(".slide-main-img");
        const currentMainWrapper = mainImageContainer.querySelector(".slide-main-img-wrapper");

        const titleContainer = document.querySelector(".slide-title");
        const descriptionContainer = document.querySelector(".slide-description");
        const counterContainer = document.querySelector(".count");

        const currentTitle = titleContainer.querySelector("h1");
        const currentDescription = descriptionContainer.querySelector("p");
        const currentCounter = counterContainer.querySelector("p");

        if (direction === "down") {
            currentSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
        } else {
            currentSlide = currentSlide === totalSlides ? 1 : currentSlide - 1;
        }

        const newSlide = createSlide(currentSlide, direction);
        const newMainWrapper = createMainImageWrapper(currentSlide, direction);
        const { newTitle, newDescription, newCounter } = createTextElements(currentSlide, direction);

        slider.appendChild(newSlide);
        mainImageContainer.appendChild(newMainWrapper);
        titleContainer.appendChild(newTitle);
        descriptionContainer.appendChild(newDescription);
        counterContainer.appendChild(newCounter);

        gsap.set(newMainWrapper.querySelector("img"), {
            y: direction === "down" ? "-50%" : "50%",
        });

        const tl = gsap.timeline({
            onComplete: () => {
                [
                    currentSlideElement,
                    currentMainWrapper,
                    currentTitle,
                    currentDescription,
                    currentCounter
                ].forEach((el) => el?.remove());

                isAnimating = false;
                setTimeout(() => {
                    scrollAllowed = true;
                    lastScrollTime = Date.now();
                }, 100);
            }
        });

        tl.to(
            newSlide.querySelector(".slide-bg-img"),
            {
                clipPath:
                    direction === "down"
                        ? "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
                        : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1.25,
                ease: CustomEase.create("", "0.87, 0,0.13,1"),
            },
            0
        )
            .to(
                newSlide.querySelector("img"),
                {
                    scale: 1.5,
                    duration: 1.25,
                    ease: CustomEase.create("", ".87,0,0.13,1"),
                },
                0
            )
            .to(
                newMainWrapper,
                {
                    clipPath:
                        direction === "down"
                            ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                            : "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                    duration: 1.25,
                    ease: CustomEase.create("", "0.87, 0,0.13,1"),
                },
                0
            )
            .to(
                currentMainWrapper.querySelector("img"),
                {
                    y: direction === "down" ? "50%" : "-50%",
                    duration: 1.25,
                    ease: CustomEase.create("", "0.87, 0,0.13,1"),
                },
                0
            )
            .to(
                newMainWrapper.querySelector("img"),
                {
                    y: "0%",
                    duration: 1.25,
                    ease: CustomEase.create("", "0.87, 0,0.13,1"),
                },
                0
            )
            .to(
                currentTitle,
                {
                    y: direction === "down" ? -50 : 50,
                    duration: 1.25,
                    ease: CustomEase.create("", "0.87, 0,0.13,1"),
                },
                0
            )
            .to(
                newTitle,
                {
                    y: 0,
                    duration: 1.25,
                    ease: CustomEase.create("", "0.87, 0,0.13,1"),
                },
                0
            )
            .to(
                currentDescription,
                {
                    y: direction === "down" ? -20 : 20,
                    duration: 1.25,
                    ease: CustomEase.create("", "0.87, 0,0.13,1"),
                },
                0
            )
            .to(
                newDescription,
                {
                    y: 0,
                    duration: 1.25,
                    ease: CustomEase.create("", "0.87, 0,0.13,1"),
                },
                0
            )
            .to(
                currentCounter,
                {
                    y: direction === "down" ? -18 : 18,
                    duration: 1.25,
                    ease: CustomEase.create("", "0.87, 0,0.13,1"),
                },
                0
            )
            .to(
                newCounter,
                {
                    y: 0,
                    duration: 1.25,
                    ease: CustomEase.create("", "0.87, 0,0.13,1"),
                },
                0
            );
    }

    function handleScroll(direction) {
        const now = Date.now();
        if (isAnimating || !scrollAllowed) return;
        if (now - lastScrollTime < 500) return;
        lastScrollTime = now;
        animateSlide(direction);
    }

    window.addEventListener("wheel",
        (e) => {
            e.preventDefault();
            const direction = e.deltaY > 0 ? "down" : "up";
            if (direction === "down" || currentSlide > 1) {   
                handleScroll(direction);
            }
        },
        {
            passive: false,
        }
    );

    let touchStartY = 0;
    let isTouchActive = false; 

    window.addEventListener("touchstart",
        (e) => {
            touchStartY = e.touches[0].clientY;
            isTouchActive = true
        },
        {
            passive: false,
        }
    );  

    window.addEventListener("touchmove",
        (e) => {
            e.preventDefault();
            if(!isTouchActive || isAnimating || !scrollAllowed) return;
            const touchCurrentY = e.touches[0].clientY;
            const difference = touchStartY - touchCurrentY;
            if (Math.abs(difference) > 10) {
                isTouchActive = false;
                const direction = difference > 0 ? "down" : "up";
                handleScroll(direction);
            }
        },
        {passive: false}
    );

    window.addEventListener("touchend",
        () => {
            isTouchActive = false
        }
    );
});
/// SLIDE LOGIC END

/// SCROLL BUTTON LOGIC
document.getElementById('owner').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});
document.getElementById('scrollButton').addEventListener('click', function () {
    window.scrollTo({
        top: window.innerHeight, 
        behavior: 'smooth' 
    });
});
/// SCROLL BUTTON LOGIC END

/// LANDING HEADER LOGIC
const textContainer = document.getElementById("textContainer");

let easeFactor = 0.02;
let scene, camera, renderer, planeMesh;
let mousePosition = {x: 0.5, y: 0.5};
let targetMousePosition = {x: 0.5, y: 0.5};
let prevPosition = {x: 0.5, y: 0.5};

const vertexShader = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragmentShader = `
    varying vec2 vUv;
    uniform sampler2D u_texture;
    uniform vec2 u_mouse;
    uniform vec2 u_prevMouse;

    void main() {
        vec2 gridUV = floor(vUv * vec2(40.0, 40.0)) / vec2(40.0, 40.0);
        vec2 centerOfPixel = gridUV + vec2(1.0 / 40.0, 1.0 / 40.0);

        vec2 mouseDirection = u_mouse - u_prevMouse;

        vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
        float pixelDistanceToMouse = length(pixelToMouseDirection); // Fixed typo here
        float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);

        vec2 uvOffset = strength * -mouseDirection * 0.3;
        vec2 uv = vUv - uvOffset;

        vec4 color = texture2D(u_texture, uv);
        gl_FragColor = color;
    }
`;


function createTextTexture(text, font, size, color, fontWeight = "100") {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const canvasWidth = window.innerWidth * 2;
    const canvasHeight = window.innerHeight * 2;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // make it transparent
    // ctx.fillStyle = color || "#ffffff";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

    const fontSize = size || Math.floor(canvasWidth * 2);
    ctx.fillStyle = "#1a1a1a";
    ctx.font = `${fontWeight} ${fontSize}px "${font || "TWK Lausanne"}"`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const textMetrics = ctx.measureText(text);
    const textWidth = textMetrics.width;

    const scaleFactor = Math.min(1, (canvasWidth * 1) / textWidth);
    const aspectCorrection = canvasWidth / canvasHeight;

    ctx.setTransform(
        scaleFactor,
        0,
        0,
        scaleFactor / aspectCorrection,
        canvasWidth / 2,
        canvasHeight / 2,      
    );

    ctx.strokeStyle = "#1a1a1a";
    ctx.lineWidth = fontSize * 0.005;
    for(let i = 0; i < 3; i++) {
        ctx.strokeText(text, 0, 0);
    }

    ctx.fillText(text, 0, 0);
    
    return new THREE.CanvasTexture(canvas);
}

function intializeScene(texture) {
    scene = new THREE.Scene();

    const aspectRatio = window.innerWidth / window.innerHeight;
    camera = new THREE.OrthographicCamera(
        -1,
        1,
        1 / aspectRatio,
        -1 / aspectRatio,
        0.1,
        1000
    );
    camera.position.z = 1;

    let shaderUniforms = {
        u_mouse: {type: "v2", value: new THREE.Vector2()},
        u_prevMouse: {type: "v2", value: new THREE.Vector2()},
        u_texture: {type: "t", value: texture},
    };

    planeMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.ShaderMaterial({
            uniforms: shaderUniforms,
            vertexShader,
            fragmentShader,
        })
    );

    scene.add(planeMesh);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // Set clear color to fully transparent
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    textContainer.appendChild(renderer.domElement);
}

function reloadTexture() {
    const newTexture = createTextTexture(
        "WELCOME TO MY PORTFOLIO",
        "TWK Lausanne",
        null,
        "#ffffff",
        "100",
    );

    planeMesh.material.uniforms.u_texture.value = newTexture;
}

intializeScene(
    createTextTexture("WELCOME TO MY PORTFOLIO",
        "TWK Lausanne",
        null,
        "#ffffff",
        "100")
);

function animateScene() {
    requestAnimationFrame(animateScene);

    mousePosition.x += (targetMousePosition.x - mousePosition.x) * easeFactor;
    mousePosition.y += (targetMousePosition.y - mousePosition.y) * easeFactor;

    planeMesh.material.uniforms.u_mouse.value.set(
        mousePosition.x,
        1.0 - mousePosition.y
    );

    planeMesh.material.uniforms.u_prevMouse.value.set(
        prevPosition.x,
        1.0 - prevPosition.y
    );

    renderer.render(scene, camera);
}

animateScene();

textContainer.addEventListener("mousemove", handleMouseMove);
textContainer.addEventListener("mouseenter", handleMouseEnter);
textContainer.addEventListener("mouseleave", handleMouseLeave);

function handleMouseMove(event) {
    easeFactor = 0.04;
    let rect = textContainer.getBoundingClientRect();
    prevPosition = { ...targetMousePosition};

    targetMousePosition.x = (event.clientX - rect.left) / rect.width;
    targetMousePosition.y = (event.clientY - rect.top) / rect.height;
}

function handleMouseEnter(event) {
    easeFactor = 0.02;
    let rect = textContainer.getBoundingClientRect();

    mousePosition.x = targetMousePosition.x = (event.clientX - rect.left) / rect.width;
    mousePosition.y = targetMousePosition.y = (event.clientY - rect.top) / rect.height;
}

function handleMouseLeave() {
    easeFactor = 0.02;
    targetMousePosition = {...prevPosition};
}

window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
    const aspectRatio = window.innerWidth / window.innerHeight;
    camera.left = -1;
    camera.right = 1;
    camera.top = 1 / aspectRatio;
    camera.bottom = -1 / aspectRatio;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    reloadTexture();
}
/// LANDING HEADER LOGIC END

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('bm');
    const sentences = document.querySelectorAll('.sentence');
    const sentenceContainer = document.querySelector('.sentence-container');
    let currentIndex = 0;

    // Create navigation dots
    const navigation = document.createElement('div');
    navigation.className = 'navigation';
    sentences.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'nav-dot';
        dot.addEventListener('click', () => goToSentence(index));
        navigation.appendChild(dot);
    });
    modal.appendChild(navigation);

    function updateActiveDot() {
        document.querySelectorAll('.nav-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSentence(index) {
        currentIndex = index;
        sentenceContainer.style.transform = `translateY(-${index * 12}vh)`;
        updateFocus();
        updateActiveDot();
    }

    function updateFocus() {
        sentences.forEach((sentence, index) => {
            sentence.classList.toggle('focus', index === currentIndex);
        });
    }

    openModalBtn.onclick = () => {
        modal.style.visibility = "visible";
        modal.style.opacity = "1";
        goToSentence(0);
    };


    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.visibility = "hidden";
            modal.style.opacity = "0";
        }
    };

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === "block") {
            if (e.key === 'ArrowDown' && currentIndex < sentences.length - 1) {
                goToSentence(currentIndex + 1);
            } else if (e.key === 'ArrowUp' && currentIndex > 0) {
                goToSentence(currentIndex - 1);
            }
        }
    });

    // Add touch/mouse wheel navigation
    let touchStartY = 0;
    let touchEndY = 0;

    modal.addEventListener('touchstart', (e) => {
        touchStartY = e.changedTouches[0].screenY;
    }, false);

    modal.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, false);

    modal.addEventListener('wheel', (e) => {
        if (e.deltaY > 0 && currentIndex < sentences.length - 1) {
            goToSentence(currentIndex + 1);
        } else if (e.deltaY < 0 && currentIndex > 0) {
            goToSentence(currentIndex - 1);
        }
    }, { passive: true });

    function handleSwipe() {
        if (touchEndY < touchStartY && currentIndex < sentences.length - 1) {
            goToSentence(currentIndex + 1);
        } else if (touchEndY > touchStartY && currentIndex > 0) {
            goToSentence(currentIndex - 1);
        }
    }
});
