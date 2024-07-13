import React from 'react'

function MainPage() {
    return (
        <div>
            <section id="features" class="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20">

            <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">

                <h2 class="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Miauw</h2>

                <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Nosotros somos una compañia que busca el bienestar de todos los gatitos.
                    Nos dedicamos a rescatar gatos de la calle y brindarles un nuevo hogar.
                    Si estas interesado en adoptar un gatito, no dudes en contactarnos.
                    Te mostraremos los beneficios de adoptar un gatitos y algunos de nuestros pequeños que pudes adoptar.
                </p>

            </div>

            <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

                <div
                    class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                    <div class="flex h-[180px] flex-col justify-between rounded-md p-6">

                        <div class="space-y-2">
                            <h3 class="font-bold">Menos Estrés</h3>
                            <p class="text-sm text-muted-foreground">El ronroneo de los gatos disminuye el estrés de las personas, manteniendote mucho más tranquilo.</p>
                        </div>
                    </div>
                </div>

                <div
                    class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                    <div class="flex h-[180px] flex-col justify-between rounded-md p-6">

                        <div class="space-y-2">
                            <h3 class="font-bold">Gran companía</h3>
                            <p class="text-sm">Les encanta estar acompañados, por lo que siempre buscarán estar contigo.</p>
                        </div>
                    </div>
                </div>

                <div
                    class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                    <div class="flex h-[180px] flex-col justify-between rounded-md p-6">

                        <div class="space-y-2">
                            <h3 class="font-bold">Felicidad total</h3>
                            <p class="text-sm text-muted-foreground">Son muy ocurridos, por lo que siempre te sacarán una sonrisa con lo que hagan.</p>
                        </div>
                    </div>
                </div>

                <div
                    class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                    <div class="flex h-[180px] flex-col justify-between rounded-md p-6">

                        <div class="space-y-2">
                            <h3 class="font-bold">Son Limpios</h3>
                            <p class="text-sm text-muted-foreground">Ellos mismos se encargan de su higiene, por lo que no tendrás que preocuparte por eso.</p>
                        </div>
                    </div>
                </div>

                <div
                    class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                    <div class="flex h-[180px] flex-col justify-between rounded-md p-6">

                        <div class="space-y-2">
                            <h3 class="font-bold">Son independientes</h3>
                            <p class="text-sm text-muted-foreground">Ellos mismos pueden pasearse solos, dormirán lo necesario pero sin interrumpirte de tus actividades.</p>
                        </div>
                    </div>
                </div>

                <div
                    class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                    <div class="flex h-[180px] flex-col justify-between rounded-md p-6">

                        <div class="space-y-2">
                            <h3 class="font-bold">Son Tiernos</h3>
                            <p class="text-sm text-muted-foreground">Hay muchas razas a tu gusto, incluso si son mestizos, su apariencia siempre será tierna y esponjosa para ti.</p>
                        </div>
                    </div>
                </div>

            </div>

            </section>
        </div>
      )
}

export default MainPage