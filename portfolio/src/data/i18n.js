// translate var -> true = fr, false = en 
export const authorName = "Nicolas De Wagner";

export const navLink = [
    {
        fr: [
                {
                    id: 1,
                    title: 'Accueil',
                    pathway: '/',
                },
                {
                    id: 2,
                    title: 'Projets',
                    pathway: '/works',
                },
                {
                    id: 3,
                    title: 'A propos',
                    pathway: '/about',
                },
                {
                    id: 4,
                    title: 'Articles',
                    pathway: '/blog',
                },
                {
                    id: 5,
                    title: 'Contact',
                    pathway: '/contact',
                }
        ],
        en: [
                {
                    id: 1,
                    title: 'Home',
                    pathway: '/',
                },
                {
                    id: 2,
                    title: 'Works',
                    pathway: '/works',
                },
                {
                    id: 3,
                    title: 'About',
                    pathway: '/about',
                },
                {
                    id: 4,
                    title: 'Blog',
                    pathway: '/blog',
                },
                {
                    id: 5,
                    title: 'Contact',
                    pathway: '/contact',
                }
        ],
    }
]

export const mainContent = [
    {
        fr: [
                {
                    id: 1,
                    message: 'Mettre l\'ordinaire au premier plan.',
                }
        ],
        en: [
                {
                    id: 1,
                    message: 'Put the ordinary in the foreground.',
                }
        ],
    }
]

export const previewProject = [
    {
        fr: [
                {
                    id: 1,
                    button: 'Voir le projet',
                }
        ],
        en: [
                {
                    id: 1,
                    button: 'See the project',
                }
        ],
    }
]

export const about = [
    {
        fr: [
                {
                    id: 1,
                    title1: 'A propos',
                    title2: 'je suis un photographe basé à Lille',
                    message: [
                        'Je m\'appelle '+ authorName +', et je suis un photographe basé à Lille.', 
                        'J\'ai créé ce site pour présenter mes projets photographiques. Mon objectif est de partager ma passion pour la photographie',
                        'Sur ce site, vous pourrez découvrir mes différents projets photographiques, qui sont principalement axés sur l\'environnement urbain. Actuellement vous y découvrirez, « Street view » qui est motivé par le travail de Doug Rickard et Jon Rafman, « Confinement » qui raconte mon confinement ou encore « Street » qui présente, sans vraie structure encore, mes photographies de rue prisent à travers le monde.',
                        'N\'hésitez pas à me contacter si vous avez des questions ou si vous souhaitez en savoir plus sur mes projets.'
                    ]
                }
        ],
        en: [
                {
                    id: 1,
                    title1: 'About',
                    title2: 'I am a photographer based in Lille',
                    message: [
                        'My name is '+ authorName +', and I am a photographer based in Lille.',
                        'I created this site to present my photographic projects. My goal is to share my passion for photography',
                        'On this site, you can discover my different photographic projects, which are mainly focused on urban environments. Currently you will discover, "Street view" which is motivated by the work of Doug Rickard and Jon Rafman, "Confinement" which tells my confinement or "Street" which presents, without real structure yet, my street photography taken around the world.',
                        'Do not hesitate to contact me if you have any questions or if you want to know more about my projects.'
                    ]
                }
        ],
    }
]

export const footer = [
    {
        fr: [
                {
                    id: 1,
                    message: "Pour être tenu au courant des projets à venir",
                    placerHolder: "Votre adresse email",
                    button: "S'inscrire",
                    copyright: '© 2022 - Développé par ' + authorName,
                    contextTitle: "Contexte de ce portfolio",
                    contextMessage: "Cette application a été développée par moi-même, "+ authorName +", développeur web. Elle a été réalisée dans le but de présenter mon travail photographique ainsi que mes compétences en ReactJs. Je me suis fortement inspiré du site du photographe André D.Wagner, dont j'apprécie le travail. Je vous invite à visiter son site en cliquant sur le lien.",
                }
        ],
        en: [
                {
                    id: 1,
                    message: "To be informed of upcoming projects",
                    placerHolder: "Your email address",
                    button: "Subscribe",
                    copyright: '© 2022 - Developed by ' + authorName,
                    contextTitle: "Context of this portfolio",
                    contextMessage: "This application was developed by myself, "+ authorName +", web developpeur. It was made in order to both present my photographic work and my skills in ReactJs. I was strongly inspired by the website of the photographer André D.Wagner, whose work I appreciate. I invite you to visit his site by clicking on the link.",
                }
        ],
    }
]

export const contact = [
    {
        fr: [
                {
                    id: 1,
                    title: 'Contactez-moi',
                    text: 'Vous pouvez me contacter via le formulaire ci-contre',
                    lastName: 'Nom',
                    firstName: 'Prénom',
                    email: 'Email',
                    message: 'Méssage',
                    button: 'Envoyer',
                }
        ],
        en: [
                {
                    id: 1,
                    title: 'Contact',
                    text: 'You can contact me via the form below',
                    lastName: 'Last name',
                    firstName: 'First name',
                    email: 'Email',
                    message: 'Message',
                    button: 'Send',
                }
        ],
    }
]

export const projects = [
    {
        fr: [
                {
                    id: 1,
                    streetview: 'Street view est une série photographique qui a démarré pendant le confinement. Le but premier était de repérer des lieux à photographier une fois notre liberté de déplacement retrouvée. Mais lors de mes visites virtuelles, j\ai commencé à capturer les scènes qui me marquaient et étant inspiré par le travail de Doug Rickard et Jon Rafman, j\'ai commencé à créer des images à partir de ces scènes.',
                },
                {
                    id: 2,
                    confinement: 'Cette série photographique a été réalisée pendant le premier confinement lié à la pandémie de COVID-19. À travers celle-ci, j\'ai souhaité témoigner de cette période singulière de notre histoire en donnant un aperçu très personnel du confinement.'
                },
                {
                    id: 3,
                    street: 'Du béton, du béton et encore du béton.'
                },
                {
                    id: 4,
                    canaries: 'Série de photographique réalisée lors d\'un voyage sur l\'île de Tenerife aux Canaries.'
                }
        ],
        en: [
                {
                    id: 1,
                    streetview: 'Street view is a photographic series that started during the lockdown. The main goal was to identify places to photograph once our freedom of movement was restored. But during my virtual visits, I started to capture the scenes that marked me and being inspired by the work of Doug Rickard and Jon Rafman, I started to create images from these scenes.',
                },
                {
                    id: 2,
                    confinement: 'This photographic series was taken during the first lockdown related to the COVID-19 pandemic. Through it, I aimed to document this unique period in our history by providing a very personal insight into the lockdown.'
                },
                {
                    id: 3,
                    street: 'Concrete, concrete and concrete again.'
                },
                {
                    id: 4,
                    canaries: 'Photographic series made during a trip to the island of Tenerife in the Canary Islands.'
                }
        ],
    }
]

export const notFound = [
    {
        fr: [
                {
                    id: 1,
                    title: '404',
                    subTitle: 'Page introuvable',
                    message: 'Oups! Vous semblez être perdu.',
                    button: 'Retour à l\'accueil',
                }
        ],
        en: [
                {
                    id: 1,
                    title: '404',
                    subTitle: 'Page not found',
                    message: 'Oops! You seem to be lost.',
                    button: 'Back to home',
                }
        ],
    }
]

export const blog = [
    {
        fr: [
                {
                    id: 1,
                    title: 'Blog',
                    message: 'Je suis en train de travailler sur ce blog. Il sera bientôt disponible.',
                    button: 'Lire l\'article',
                }
        ],
        en: [
                {
                    id: 1,
                    title: 'Blog',
                    message: 'I am working on this blog. It will be available soon.',
                    button: 'Read the article',
                }
        ],
    }
]