<template>
    <v-app id="inspire">
        <!-- navbar -->
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#"><img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH8AfwMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAMFBgcCAf/EAD4QAAEDAgIGBwcCBQMFAAAAAAECAwQAEQUhBgcSEzGhIiNBUXGBkRQyQmFicrEVUoKiwuHwstHiFjRTksH/xAAbAQACAwEBAQAAAAAAAAAAAAAAAwIFBgEEB//EADERAAEDAwIEBAUEAwEAAAAAAAEAAgMEESEFQRITMVEicYGRFGGhscFCUtHwMuHxJP/aAAwDAQACEQMRAD8ArrnVwm0DJTh2vL/LVSgXeSvooy7ySmdNLTw+IWPj/l6I8EtQzBITLC928hfcam5twQpOFwupSN3IWOy9xXGG7QhhuEzUlJExOrQ693JsPH/LUuTNmpb8kBDUxMRSurgADi6b+VLGX+SWMvSk9ZHadHEdEmhmHEIbhxCYbVsOJUOw3qZFxZTIuLJyYnZfJHBXSFRjPhUWdExU1NEwrBS3VcG0386XJ27pb+yHJJNzTExEo6uCs9rht5f5elnL/JLOX+SSbuwikZqbVl4UdH+aOjrrmaraeKRwR0RXYx4brrBi66a6yG432oO0K47wvBXDh90LTUxFSesYZe7bbJpTMEhLZgkIWmJiJd6uI03wK+kRS25cSlty4lMJTtKCR2m1MJtlTJsE/NUN6lA4ITalxjF1FgxdexusYdZ7bbSfGh+HBy47DgUNTExEO9ZEbXxKDsmljDyEsYdZDUxMRJ6uCnvcVfypfV/kl9XocC5sONMTETNITu2U8EJzpcY6uS2d15Ac2HyDwUM6JRcIkFwh1HaUSeJNzTExPwlhL4B4KGyahILtUHjCacTu3FI/abVJpuLqQNxdPR+sjutdo6QqD8OBUXYcCmWkbxxKO8ipuNhdSJsE5MXtvqtwTkKjGLNXGCwXUJI3pWeCASa5IfDZcecWTC1ba1KPEm9MAsLKQFgnIi9iQg9l7HzqLxdq48XavJCN28tPZfKutNxdDTcXTkTppdZ/cm48ag/BBUX7FDpBUoJHE5Uy9sqZO6fmqG+CE8GxsioRjF1GMYuvIaNuQm/BOZrrzZqHmwTby946tXea60WFlICwXNyOFdXUe/geLR4ypL+HyEMJG0XCnIDv8KQ2qgc7ga4E9l521UDncIeLoAGxuOI4U9ehETQFKQ6OC00uM4IS49wuIq9h9JPDgak8XaVJ4uE803unnlkZNjLz4VAm4AUCbgBCXvnTU1Ep6qEVdrirDwpfV/klnL15BgS561NwYzshSBdQbTew7zXZJWR2LzZEkrIhd5svJkKVAdDUyO7HcI2glxNjbvojkZILsNwiOVkguw3C6l9NDTw+JNj41yPBLUMxdqZYXu3kq7Ac6m4XBCk4XCJS0ETVqPuoG3SifAAoE+CyEUoqUVHiTc04C2E21kQz1cV1ztV0RS3ZeAluy4BC0xMRyMGxVxtLjeGTVNqF0qDCiCDwztSTUQg2Lh7pBqoAbF491p2iryMc0OaYfO11Sort+OQt+LGs5WtNNWcY73CzlY009UXN73CyZ1pbDq2XRZxpRQofMGxrUghwuN1qGuDgHDoU+OsgkHi2q48KX0eonD0NTExFSJIcZ2Ug7arbVKYwg3KW1ljdC5kgDieFNTL2RE0hKm2k+6hOfjS4xe5UGd1ourGAWMHfmqFlSnbJuPgTl+b1n9Yl4pRGNvys/q8vHMGdh90PrTg7USHiCU5tLLSz8lZjmOdM0WXxOj75U9Il4Xuj759lQ2usiOoPvIO0KvD4Xgq8OHAoXwpiYi3JKVR9gA7wgBR+VKDCHXSwwh10JTkxEy+g20z3JufGlMyS5LZkkpYbDViOIxoaAbvupQbdxOZ9L12WQRxuedlyaQRRuf2C0/T+f+l6OpZiq2HXlobat2BOZ5C3nWa0uLnVHE7oMn1Wc02ET1F39BkqG1XSt2qXEWrJ2zqAflkfyPSvZrLOLhcNsL2awy/C8eShNYED2LSV5aRZuUkPJ8TkrmCfOvbpk3Nph8sL16ZLzKcDtj+FCQlDelB4LBBr2SDF17n9LodSSlRSeINqmOikOi8oXURCQFPgq91PSNQkPhUJDYJpRW+6dgbS3FWSO8ngKkLNGVIWaM7LW8XWNGtCy2yqzjMdLDahxKzlf1JNZanHxdbc9Cb+iysLfi6vxdCb+iT4GkuhBUmxcfjBQ+Tqc/8AUmhv/krvkD9D/wBQ0/CVnkfoVlEFYDyb+6sWIrUSDC1DxhNuo2HFI7jXWm4upA3C4rq6nYqN4+gdgNzUXmzSouNgvH17x5avnlQwWbZDRYK2asoHtGOOzFjoxGuj9ysvxtetVmry8MAZ+4/RVery8MQYN/wutZsov4sxHSq7cduxH1qzPK1c0hnDEXblc0iO0ZdufsorB8QGFY5hrhVZtpYS79qsj/vXqni50Lx36L1VMXOgeN9lbtaMDe4ZGnJHSju7Cz9Kv7hPrVVo0tpHRnf8Kq0iThlLO4+oWbJUULChxSb1oSLhaE5T05ID22n3VgKFQjOLKMfSyHqamiWuhEcX2rOwKWcvt2SzlwCltBoPt+k0UKHVsXfX/Dw5lNebUZeVTOO5wvJqUvLpj88Kwa052cHDkHtL6+aU/wBVeDRYsOk9P5Xi0eL/ACl9Ai9V04O4dJgrPSju7aR9Kv8AkDStZitI2Qb49knWIuGQP7j7f6VK0mg/pmkE2MkWSl3bR9qukPzbyq5pJedA13yVxRy82na75W9sIObmpDo4OJB86ZHi4T2YwhqYpomN1bLzvbbZT40t+SAoOyQENTFNatq+iJw7RgS3hsF9Sn1k/tGQ5Jv51mdUeZangG2FmNTkMtTwjbCzuVKXirsx5R6brxdHyBOQ9Kv2sEIaB0Asr+Ngha1vYWQEhW9dWo8FU5uBZPaLALW4ZGkmhCULN3Ho27Uo/wDkTlf/ANhestJekrr9jf0Ky0g+FrLjoDf0WQ2PBQIUMiD2GtUtVjZFK62ElXa2qx8KWMP80sYehaYmImX1aWmR8KbnxpceSXJbM3Kv2q6Bu4UvEFjN5YaQfpTx5nlVJrMt3tjG2VR6xLeRsY2z7qn6Vz/1LSGdIBugObtv7U5D8E+dWtFFyqdrd+p8yrWhi5VO1vr7ozQGd7FpNHSTZuSCyrxOaeYA86VqcXMpndxlK1OLmUxO4ypjWnB2JMLEEpycSWXD8xcp5FXpXk0WW7HR9sryaNLh0fqqanrIRHa2q/lVsfC/zVv0d5oamJiJf6uMyz2npKpbfE4lLbkkpuLHclymYzXvvLS2nxJtUnvDGl52XXvEbS87LVNNpCMI0RVFYsneJTFaH02z/lBrM6c0z1fG7bKzOnsM1UHHbJWWxHA08CfdsQa0r2lwWneLhMVNSWiarJ+01Mw5Ss0EPNi/Yclc7etUOsxZbJ6Kg1mKzmyDfCqmmED9O0jmtJTZC175HgrM87jyqzoJebTtdv09lZ0EvNp2ncY9v9KPh9IuNHgtOXjT5MWK9L9iuIre3ISkjIZmpPNmrrj4VzIWVuLWLm5yFq60WFkNGFrTh/6Y0KsLJeYjWHzdV/yNZYD4yu+RP0CywHxdZ8ifp/xZDa2V71q1q1206th1DzRs42oLSe4g3FcIDhYrjmhwLTutY0qbRjuhi5LA2jukym7fLMj0uKy9E74as4Hd7LL0bjT1Ya7vYrLISgXSkm6Vi1aWQYv2Wmk6X7LhprafDav3WNdLvDddLvDdey17chZ7BkKGCzUMFgrHq5ge16QpfUm6IjZc/iPRT+SfKq/VZuCn4R1dhV2qy8EHCP1f0ozWhP32KR4KFdGO3trH1K4chzpWjxcMRk7/AIStHitG6Q749lS6t1cLyhCm9DJ36fpLDcJ2UOqLK/BWQ52rx6hFzadzfVeLUIuZTOG4yrNrUgnZg4ikHIlhZ8c0/wD31qu0WX/KM+ar9Gly6P1VBaXu3Eq7jerxwuLK8IuLI1xO4Eh391gnzpTTxENSwb2CI0RgHEdIoTBG0hK9659qc/zYedLrpuVTucOvT3SK6XlU7juce6tutOfsx4eHJOa1l5fgnIcyfSqrRYrudL6Ks0eK7nSHbHus6q/V+lQhanq3mJmaOrhu9IxnFNkHtQrMfkjyrNatGY6gSDfPqFmdVj5dRxjcXWb4lFVhmKyYp4x3ikfMdh9LVoYniWIPG4WghkEsQf3CeUkIdckj3Si6T3k/4KhckBq4DezVHU9PWo6tYQi4C5McFjKcKrnsQm4H9RrN6vKXziMbfcrNarLxz8A/Ss6xiacSxWXNJuHnSpOXw8E8gKv4IxFE1g2Cv6eLlRNZ2CDpqclQhegkEFJsoG4PcaFywPVa3iaRpHoOp1Au67HDyQOxxOZHqCKy0JNLXcO17ehWWhvS1ljsbehWRggi44GtUtUnFvOLQELNwOAqIaAbhcDQDcK+6q4H/e4iscSGGzzV/T6VR61L/jGPP+FR6zLlsY8/4Va00n/qOkktxJu20rcI8E5HnerGgh5VO0bnPurDT4uVTNB6nPuoOvYvalQhW3VrP9mx9UVZsiW0UjP4k3UOW1VZq0XHBx/tVVq8XFAHj9P2K61mQfZ8balpFkS2ukfrTkeRTUdIl44Cz9p+6NIl4oSw7H7qqF5wthsnod1WfCAbqz4Re65bbW84hpoXWtQSkd5JsKkSALldLg0EnoFrOkzicA0LVGYNlBlMVv5kixPptGstSNNTWcbu5P8AfosvSNNTWBzu91knCtUtSlXEJUISrqFpmq+cHsKkQVm6o7u0kfSrP8hXrWc1mLhkbIN/uFndXi4ZRIN/wqHj8E4bjc2JayW3SUW/aekORFXlNLzYWv7hXVLJzYWv/vZR5NgTT16FrmHgaNaEBxYAdZjl1Q73FZ29SBWVl/8AXW2HQn6BZWUmqrLDc29Fkdyc1EknMk9prVLVeSVcQlQhEQJaoE6PMR7zDiXMu2xuR6XqMjBIwsO6XLGJGFh3C0zWHETiGjImM9L2dSXknvQcjyN/Ks3pbzHUlh3x7LO6XIY6ngO+FldaZaZWLQGD7dpMwpQuiMkvq8RkOZB8q8Gpy8umPzwq/U5eXTEd8f32UxrTnbcqHhyCLNJLzn3HIcr+teTRYrMdL3x7Ly6PF4XSeiotXSukqEJUISoQrJq/nexaSMoJsiUksq8eKeYt51X6nFzKYncZ/lV2qRcynJHUZUnrRgbrEIk9A6LyN0vL4k8OR5V59GlvG6Ptn3Xn0eW7HRnbKrWjkD9TxyFEIuhboLg+gZnkKsaqXlQOf8lYVcvKgc/5fdXjWjiG6w6Lh6DnIXtrA/an+5HpVLo0XFI6Q7flU+kRcUrpO33KzWtEtClXEJUIXtCFq+hryMa0PER832ELiO3PZbL+UisvqDDBV8Y3yP75rL17DBVFw8wsqdZXHdWw8LONKKFjuINjWoDg4Bw3WnDg8Bw3ytI1XQN1hsqeoWVIc2EH6U/3J9Kz2szcUjYht+VntXl4pRGNh91RdIZ/6njk2Ze6VukI+xOSeQq6pYuTC1nyV1SRcqBrPko6nr0JUISoQlQhdsurYebfaNnGlhafEG4/FBaHAtO6i5oeC07rVdL2m8a0MVMZAVstplN+AFz/AClVZigcaes4D8wszQuMFWGHyUDqsgbcqZiKxk2kMoPzOauVvWvbrU1mNiG+V7tZks1sfqfwobTyd7dpLI2TduOAwnPLLM8yfSvZpsXLpm33yvXpsPLph88qvV7l70qEJUISoQrvqunBrEZcFSrJfbDiB9SePI8qp9Yi4o2vG35VNrEV2Nk7YUZrBgmHpK8ttPRlIS8kAcVcCPUc69Oly8ymAO2F6NLl4qYA/pwrxiZGjWg5aQbOtxw0kjiXFZX9STVLCPi6256Xv6BU0Q+LrLnc39FkYAAsK1S1RSriEqEJUISoQlQhalq5lpnaOLhPdIx1qaIOd0KzH5I8qzWqxmOoEg3/AAs1qkfLqOMb59UdhURvRPRZ8rsVMBx5Z/cfh5BIpU8hrKoW3sEiaR1ZUD52CyFa1uLU46racWSpSu8k3NaoAAWHRasANFh0C5oXUqEJUISoQj8Cn/pmMQ5hVZDTo2/sOSuRNJqIudC6PuEiqi5sLmfJatj2CIxTEsIlEAiI+VOZ/Ba/+pKfU1mKWqMMcje4+vRZinqTCyRv7h/foq1rTn3MHDkHvfcF/wCFP5VVjo0NuKT0Vjo0Q8Unp/Kz+rxXqVCEqEJUISoQvaEK2atJpj48qKT0JTRFvqTmOW1VXq8XHBxdj98Kq1eLigD+x+6ses6cY+CMxEZGU70vtTmedqr9Gi4pi/8AaF4dJi4pi/8AaPusvrSLRpUISoQlQhKhCRFxY8DkaELadEZxxHRyDIWbubvdrPepJ2b8qyFfFyqhzfVZGsi5U7mhZbpbOOIaRTXvgQ5ukfanL8gnzrS0UXKp2t9fdaOhi5dO0d8+6iK9S9aVCEqEL//Z"
                    alt="logo" height="70px"></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>

                    <b-nav-item-dropdown text="TOP WEAR" right>
                        <b-dropdown-item href="#">KURTAS</b-dropdown-item>
                        <b-dropdown-item href="#">SETS & DRESSES</b-dropdown-item>
                        <b-dropdown-item href="#">FOLKSONG</b-dropdown-item>
                        <b-dropdown-item href="#">PLUS SIZES</b-dropdown-item>
                        <b-dropdown-item href="#">TOPS</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="BOTTOM WEAR" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="COSMETICS" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="FOOTWEAR" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="WISHFUL" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="PLUS SIZES" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="STORIES BY W" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="SALE" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>

                    <h4>acc</h4>

                    <h4>cart</h4>

                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <!--  -->

        <!-- sidebar -->
        <v-main class="grey lighten-3">
            <v-container class="pa-2 ma-2">
                <v-row>
                    <v-col cols="2">
                        <v-sheet rounded="lg">

                            <v-card class="mx-auto" max-width="500">
                                <v-toolbar dark>
                                    <v-toolbar-title color="black">FILTERS</v-toolbar-title>
                                </v-toolbar>
                                <v-list>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Cateory</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options1" :aria-describedby="ariaDescribedby" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Price</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options2" :aria-describedby="ariaDescribedby" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Discount</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options3" :aria-describedby="ariaDescribedby" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Colour</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options4" :aria-describedby="ariaDescribedby" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Size</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options5" :aria-describedby="ariaDescribedby" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Neck Type</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options6" :aria-describedby="ariaDescribedby" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Sleeve</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options7" :aria-describedby="ariaDescribedby" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Occasion</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options8" :aria-describedby="ariaDescribedby" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Length</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options9" :aria-describedby="ariaDescribedby" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Fastening/Closure</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options10" :aria-describedby="ariaDescribedby" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Pattern</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options11" :aria-describedby="ariaDescribedby" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Ornamentation</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options12" :aria-describedby="ariaDescribedby" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Fabric Family</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options13" :aria-describedby="ariaDescribedby" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Closure</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options14" :aria-describedby="ariaDescribedby" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                </v-list>
                            </v-card>
                        </v-sheet>
                    </v-col>
                    <!-- side bar ends ere -->


 <!-- main view -->
    <v-col cols="10">
         <v-sheet rounded="lg">
             <div class="col mt-2">
                  <div class="col-md-10 p-2 product-list">
                        <div class="row">
                            <div class="col-md-10 p-2">
                                <div class="error_message" style="display:none;"></div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                <div class="slide-box" data-v-62a35744=""><!----> <!---->
                    <div class="product-box" data-v-62a35744=""><!----> 
                        <a href="/product-fern-green-a-line-printed-kurta-22few17326-118119.html"
                                                        class="view-detail" data-v-62a35744="">
                                                        View Detail
                                                    </a> <a
                                                        href="/product-fern-green-a-line-printed-kurta-22few17326-118119.html"
                                                        data-v-62a35744="" class="">
                                                        <div class="w-100 min-height-pdp" data-v-62a35744=""><!---->
                                                            <img src="https://wforwoman.gumlet.io/product/22FEW17326-118119/300/22FEW17326-118119_1.JPG"
                                                                alt="Fern Green A-line Printed Kurta"
                                                                title="Fern Green A-line Printed Kurta"
                                                                data-v-62a35744=""></div>
                                                    </a> <!----> <!----></div>
                                                <p data-v-62a35744=""><a
                                                        href="/product-fern-green-a-line-printed-kurta-22few17326-118119.html"
                                                        data-v-62a35744="" class="">Fern Green A-line Printed Kurta</a>
                                                </p>
                                                <div class="price" style="display:none;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="old-price" data-v-62a35744="">Rs.
                                                            2599</span> <span class="price" data-v-62a35744="">Rs.
                                                            2599</span> <span class="discount_percent font-bold"
                                                            style="display:;" data-v-62a35744="">
                                                            -
                                                            0%
                                                        </span></p>
                                                </div>
                                                <div class="price" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="price" data-v-62a35744="">Rs.
                                                            2599</span></p>
                                                </div>
                                                <div class="size" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744="">
                                                        Size -
                                                        <span data-v-62a35744="">6</span><span
                                                            data-v-62a35744="">8</span><span
                                                            data-v-62a35744="">10</span><span
                                                            data-v-62a35744="">12</span><span
                                                            data-v-62a35744="">14</span><span
                                                            data-v-62a35744="">16</span><span
                                                            data-v-62a35744="">18</span><span
                                                            data-v-62a35744="">20</span><span
                                                            data-v-62a35744="">22</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                                            <div class="slide-box" data-v-62a35744=""><!----> <!---->
                                                <div class="product-box" data-v-62a35744=""><!----> <a
                                                        href="/product-smoke-grey-a-line-kurta-22few17277-116731.html"
                                                        class="view-detail" data-v-62a35744="">
                                                        View Detail
                                                    </a> <a
                                                        href="/product-smoke-grey-a-line-kurta-22few17277-116731.html"
                                                        data-v-62a35744="" class="">
                                                        <div class="w-100 min-height-pdp" data-v-62a35744=""><!---->
                                                            <img src="https://wforwoman.gumlet.io/product/22FEW17277-116731/300/22FEW17277-116731_1.JPG"
                                                                alt="Smoke Grey A-line Kurta"
                                                                title="Smoke Grey A-line Kurta" data-v-62a35744="">
                                                        </div>
                                                    </a> <!----> <a
                                                        href="/product-smoke-grey-a-line-kurta-22few17277-116731.html"
                                                        class="hopeistrending" data-v-62a35744=""></a> <!----></div>
                                                <p data-v-62a35744=""><a
                                                        href="/product-smoke-grey-a-line-kurta-22few17277-116731.html"
                                                        data-v-62a35744="" class="">Smoke Grey A-line Kurta</a></p>
                                                <div class="price" style="display:none;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="old-price" data-v-62a35744="">Rs.
                                                            2399</span> <span class="price" data-v-62a35744="">Rs.
                                                            2399</span> <span class="discount_percent font-bold"
                                                            style="display:;" data-v-62a35744="">
                                                            -
                                                            0%
                                                        </span></p>
                                                </div>
                                                <div class="price" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="price" data-v-62a35744="">Rs.
                                                            2399</span></p>
                                                </div>
                                                <div class="size" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744="">
                                                        Size -
                                                        <span data-v-62a35744="">6</span><span
                                                            data-v-62a35744="">8</span><span
                                                            data-v-62a35744="">10</span><span
                                                            data-v-62a35744="">12</span><span
                                                            data-v-62a35744="">14</span><span
                                                            data-v-62a35744="">16</span><span
                                                            data-v-62a35744="">18</span><span
                                                            data-v-62a35744="">20</span><span
                                                            data-v-62a35744="">22</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                                            <div class="slide-box" data-v-62a35744=""><!----> <!---->
                                                <div class="product-box" data-v-62a35744=""><!----> <a
                                                        href="/product-tuscany-pink-a-line-kurta-22few17276-116746.html"
                                                        class="view-detail" data-v-62a35744="">
                                                        View Detail
                                                    </a> <a
                                                        href="/product-tuscany-pink-a-line-kurta-22few17276-116746.html"
                                                        data-v-62a35744="" class="">
                                                        <div class="w-100 min-height-pdp" data-v-62a35744=""><!---->
                                                            <img src="https://wforwoman.gumlet.io/product/22FEW17276-116746/300/22FEW17276-116746_1.JPG"
                                                                alt="Tuscany Pink A-line Kurta"
                                                                title="Tuscany Pink A-line Kurta" data-v-62a35744="">
                                                        </div>
                                                    </a> <!----> <a
                                                        href="/product-tuscany-pink-a-line-kurta-22few17276-116746.html"
                                                        class="hopeistrending" data-v-62a35744=""></a> <!----></div>
                                                <p data-v-62a35744=""><a
                                                        href="/product-tuscany-pink-a-line-kurta-22few17276-116746.html"
                                                        data-v-62a35744="" class="">Tuscany Pink A-line Kurta</a></p>
                                                <div class="price" style="display:none;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="old-price" data-v-62a35744="">Rs.
                                                            2799</span> <span class="price" data-v-62a35744="">Rs.
                                                            2799</span> <span class="discount_percent font-bold"
                                                            style="display:;" data-v-62a35744="">
                                                            -
                                                            0%
                                                        </span></p>
                                                </div>
                                                <div class="price" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="price" data-v-62a35744="">Rs.
                                                            2799</span></p>
                                                </div>
                                                <div class="size" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744="">
                                                        Size -
                                                        <span data-v-62a35744="">6</span><span
                                                            data-v-62a35744="">8</span><span
                                                            data-v-62a35744="">10</span><span
                                                            data-v-62a35744="">12</span><span
                                                            data-v-62a35744="">14</span><span
                                                            data-v-62a35744="">16</span><span
                                                            data-v-62a35744="">18</span><span
                                                            data-v-62a35744="">20</span><span
                                                            data-v-62a35744="">22</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                                            <div class="slide-box" data-v-62a35744=""><!----> <!---->
                                                <div class="product-box" data-v-62a35744=""><!----> <a
                                                        href="/product-grey-printed-a-line-kurta-22few17522-117456.html"
                                                        class="view-detail" data-v-62a35744="">
                                                        View Detail
                                                    </a> <a
                                                        href="/product-grey-printed-a-line-kurta-22few17522-117456.html"
                                                        data-v-62a35744="" class="">
                                                        <div class="w-100 min-height-pdp" data-v-62a35744=""><!---->
                                                            <img src="https://wforwoman.gumlet.io/product/22FEW17522-117456/300/22FEW17522-117456_1.JPG"
                                                                alt="Grey Printed A-Line Kurta"
                                                                title="Grey Printed A-Line Kurta" data-v-62a35744="">
                                                        </div>
                                                    </a> <!----> <a
                                                        href="/product-grey-printed-a-line-kurta-22few17522-117456.html"
                                                        class="hopeistrending" data-v-62a35744=""></a> <!----></div>
                                                <p data-v-62a35744=""><a
                                                        href="/product-grey-printed-a-line-kurta-22few17522-117456.html"
                                                        data-v-62a35744="" class="">Grey Printed A-Line Kurta</a></p>
                                                <div class="price" style="display:none;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="old-price" data-v-62a35744="">Rs.
                                                            2999</span> <span class="price" data-v-62a35744="">Rs.
                                                            2999</span> <span class="discount_percent font-bold"
                                                            style="display:;" data-v-62a35744="">
                                                            -
                                                            0%
                                                        </span></p>
                                                </div>
                                                <div class="price" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="price" data-v-62a35744="">Rs.
                                                            2999</span></p>
                                                </div>
                                                <div class="size" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744="">
                                                        Size -
                                                        <span data-v-62a35744="">6</span><span
                                                            data-v-62a35744="">8</span><span
                                                            data-v-62a35744="">10</span><span
                                                            data-v-62a35744="">12</span><span
                                                            data-v-62a35744="">14</span><span
                                                            data-v-62a35744="">16</span><span
                                                            data-v-62a35744="">18</span><span
                                                            data-v-62a35744="">20</span><span
                                                            data-v-62a35744="">22</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                                            <div class="slide-box" data-v-62a35744=""><!----> <!---->
                                                <div class="product-box" data-v-62a35744=""><!----> <a
                                                        href="/product-beige-stripe-print-kurta-22few17274-116735.html"
                                                        class="view-detail" data-v-62a35744="">
                                                        View Detail
                                                    </a> <a
                                                        href="/product-beige-stripe-print-kurta-22few17274-116735.html"
                                                        data-v-62a35744="" class="">
                                                        <div class="w-100 min-height-pdp" data-v-62a35744=""><!---->
                                                            <img src="https://wforwoman.gumlet.io/product/22FEW17274-116735/300/22FEW17274-116735_1.JPG"
                                                                alt="Beige Stripe Print Kurta"
                                                                title="Beige Stripe Print Kurta" data-v-62a35744="">
                                                        </div>
                                                    </a> <!----> <a
                                                        href="/product-beige-stripe-print-kurta-22few17274-116735.html"
                                                        class="hopeistrending" data-v-62a35744=""></a> <!----></div>
                                                <p data-v-62a35744=""><a
                                                        href="/product-beige-stripe-print-kurta-22few17274-116735.html"
                                                        data-v-62a35744="" class="">Beige Stripe Print Kurta</a></p>
                                                <div class="price" style="display:none;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="old-price" data-v-62a35744="">Rs.
                                                            2399</span> <span class="price" data-v-62a35744="">Rs.
                                                            2399</span> <span class="discount_percent font-bold"
                                                            style="display:;" data-v-62a35744="">
                                                            -
                                                            0%
                                                        </span></p>
                                                </div>
                                                <div class="price" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="price" data-v-62a35744="">Rs.
                                                            2399</span></p>
                                                </div>
                                                <div class="size" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744="">
                                                        Size -
                                                        <span data-v-62a35744="">6</span><span
                                                            data-v-62a35744="">8</span><span
                                                            data-v-62a35744="">10</span><span
                                                            data-v-62a35744="">12</span><span
                                                            data-v-62a35744="">14</span><span
                                                            data-v-62a35744="">16</span><span
                                                            data-v-62a35744="">18</span><span
                                                            data-v-62a35744="">20</span><span
                                                            data-v-62a35744="">22</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                                            <div class="slide-box" data-v-62a35744=""><!----> <!---->
                                                <div class="product-box" data-v-62a35744=""><!----> <a
                                                        href="/product-sage-green-jacquard-kurta-with-embroidery-21auw14029-311668.html"
                                                        class="view-detail" data-v-62a35744="">
                                                        View Detail
                                                    </a> <a
                                                        href="/product-sage-green-jacquard-kurta-with-embroidery-21auw14029-311668.html"
                                                        data-v-62a35744="" class="">
                                                        <div class="w-100 min-height-pdp" data-v-62a35744=""><!---->
                                                            <img src="https://wforwoman.gumlet.io/product/21AUW14029-311668/300/21AUW14029-311668_1.JPG"
                                                                alt="Sage Green Jacquard Kurta with Embroidery"
                                                                title="Sage Green Jacquard Kurta with Embroidery"
                                                                data-v-62a35744=""></div>
                                                    </a> <!----> <!----> <!----></div>
                                                <p data-v-62a35744=""><a
                                                        href="/product-sage-green-jacquard-kurta-with-embroidery-21auw14029-311668.html"
                                                        data-v-62a35744="" class="">Sage Green Jacquard Kurta with
                                                        Embroidery</a></p>
                                                <div class="price" style="display:none;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="old-price" data-v-62a35744="">Rs.
                                                            2999</span> <span class="price" data-v-62a35744="">Rs.
                                                            2999</span> <span class="discount_percent font-bold"
                                                            style="display:;" data-v-62a35744="">
                                                            -
                                                            0%
                                                        </span></p>
                                                </div>
                                                <div class="price" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="price" data-v-62a35744="">Rs.
                                                            2999</span></p>
                                                </div>
                                                <div class="size" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744="">
                                                        Size -
                                                        <span data-v-62a35744="">6</span><span
                                                            data-v-62a35744="">8</span><span
                                                            data-v-62a35744="">10</span><span
                                                            data-v-62a35744="">12</span><span
                                                            data-v-62a35744="">14</span><span
                                                            data-v-62a35744="">16</span><span
                                                            data-v-62a35744="">18</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                                            <div class="slide-box" data-v-62a35744=""><!----> <!---->
                                                <div class="product-box" data-v-62a35744=""><!----> <a
                                                        href="/product-rosedust-pink-printed-kurta-22few17272-116763.html"
                                                        class="view-detail" data-v-62a35744="">
                                                        View Detail
                                                    </a> <a
                                                        href="/product-rosedust-pink-printed-kurta-22few17272-116763.html"
                                                        data-v-62a35744="" class="">
                                                        <div class="w-100 min-height-pdp" data-v-62a35744=""><!---->
                                                            <img src="https://wforwoman.gumlet.io/product/22FEW17272-116763/300/22FEW17272-116763_1.JPG"
                                                                alt="Rosedust Pink Printed Kurta"
                                                                title="Rosedust Pink Printed Kurta" data-v-62a35744="">
                                                        </div>
                                                    </a> <!----> <a
                                                        href="/product-rosedust-pink-printed-kurta-22few17272-116763.html"
                                                        class="hopeistrending" data-v-62a35744=""></a> <!----></div>
                                                <p data-v-62a35744=""><a
                                                        href="/product-rosedust-pink-printed-kurta-22few17272-116763.html"
                                                        data-v-62a35744="" class="">Rosedust Pink Printed Kurta</a></p>
                                                <div class="price" style="display:none;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="old-price" data-v-62a35744="">Rs.
                                                            2399</span> <span class="price" data-v-62a35744="">Rs.
                                                            2399</span> <span class="discount_percent font-bold"
                                                            style="display:;" data-v-62a35744="">
                                                            -
                                                            0%
                                                        </span></p>
                                                </div>
                                                <div class="price" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="price" data-v-62a35744="">Rs.
                                                            2399</span></p>
                                                </div>
                                                <div class="size" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744="">
                                                        Size -
                                                        <span data-v-62a35744="">6</span><span
                                                            data-v-62a35744="">8</span><span
                                                            data-v-62a35744="">10</span><span
                                                            data-v-62a35744="">12</span><span
                                                            data-v-62a35744="">14</span><span
                                                            data-v-62a35744="">16</span><span
                                                            data-v-62a35744="">18</span><span
                                                            data-v-62a35744="">20</span><span
                                                            data-v-62a35744="">22</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                                            <div class="slide-box" data-v-62a35744=""><!----> <!---->
                                                <div class="product-box" data-v-62a35744=""><!----> <a
                                                        href="/product-light-blue-cotton-dobby-straight-kurta-22few17585-312195.html"
                                                        class="view-detail" data-v-62a35744="">
                                                        View Detail
                                                    </a> <a
                                                        href="/product-light-blue-cotton-dobby-straight-kurta-22few17585-312195.html"
                                                        data-v-62a35744="" class="">
                                                        <div class="w-100 min-height-pdp" data-v-62a35744=""><!---->
                                                            <img src="https://wforwoman.gumlet.io/product/22FEW17585-312195/300/22FEW17585-312195_1.JPG"
                                                                alt="Light Blue Cotton Dobby Straight Kurta"
                                                                title="Light Blue Cotton Dobby Straight Kurta"
                                                                data-v-62a35744=""></div>
                                                    </a> <!----> <a
                                                        href="/product-light-blue-cotton-dobby-straight-kurta-22few17585-312195.html"
                                                        class="hopeistrending" data-v-62a35744=""></a> <!----></div>
                                                <p data-v-62a35744=""><a
                                                        href="/product-light-blue-cotton-dobby-straight-kurta-22few17585-312195.html"
                                                        data-v-62a35744="" class="">Light Blue Cotton Dobby Straight
                                                        Kurta</a></p>
                                                <div class="price" style="display:none;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="old-price" data-v-62a35744="">Rs.
                                                            1999</span> <span class="price" data-v-62a35744="">Rs.
                                                            1999</span> <span class="discount_percent font-bold"
                                                            style="display:;" data-v-62a35744="">
                                                            -
                                                            0%
                                                        </span></p>
                                                </div>
                                                <div class="price" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="price" data-v-62a35744="">Rs.
                                                            1999</span></p>
                                                </div>
                                                <div class="size" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744="">
                                                        Size -
                                                        <span data-v-62a35744="">6</span><span
                                                            data-v-62a35744="">8</span><span
                                                            data-v-62a35744="">10</span><span
                                                            data-v-62a35744="">12</span><span
                                                            data-v-62a35744="">14</span><span
                                                            data-v-62a35744="">16</span><span
                                                            data-v-62a35744="">18</span><span
                                                            data-v-62a35744="">20</span><span
                                                            data-v-62a35744="">22</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                                            <div class="slide-box" data-v-62a35744=""><!----> <!---->
                                                <div class="product-box" data-v-62a35744=""><!----> <a
                                                        href="/product-brown-a-line-printed-kurta-22few17280-116749.html"
                                                        class="view-detail" data-v-62a35744="">
                                                        View Detail
                                                    </a> <a
                                                        href="/product-brown-a-line-printed-kurta-22few17280-116749.html"
                                                        data-v-62a35744="" class="">
                                                        <div class="w-100 min-height-pdp" data-v-62a35744=""><!---->
                                                            <img src="https://wforwoman.gumlet.io/product/22FEW17280-116749/300/22FEW17280-116749_1.JPG"
                                                                alt="Brown A-Line Printed Kurta"
                                                                title="Brown A-Line Printed Kurta" data-v-62a35744="">
                                                        </div>
                                                    </a> <!----> <a
                                                        href="/product-brown-a-line-printed-kurta-22few17280-116749.html"
                                                        class="hopeistrending" data-v-62a35744=""></a> <!----></div>
                                                <p data-v-62a35744=""><a
                                                        href="/product-brown-a-line-printed-kurta-22few17280-116749.html"
                                                        data-v-62a35744="" class="">Brown A-Line Printed Kurta</a></p>
                                                <div class="price" style="display:none;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="old-price" data-v-62a35744="">Rs.
                                                            2599</span> <span class="price" data-v-62a35744="">Rs.
                                                            2599</span> <span class="discount_percent font-bold"
                                                            style="display:;" data-v-62a35744="">
                                                            -
                                                            0%
                                                        </span></p>
                                                </div>
                                                <div class="price" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="price" data-v-62a35744="">Rs.
                                                            2599</span></p>
                                                </div>
                                                <div class="size" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744="">
                                                        Size -
                                                        <span data-v-62a35744="">6</span><span
                                                            data-v-62a35744="">8</span><span
                                                            data-v-62a35744="">10</span><span
                                                            data-v-62a35744="">12</span><span
                                                            data-v-62a35744="">14</span><span
                                                            data-v-62a35744="">16</span><span
                                                            data-v-62a35744="">18</span><span
                                                            data-v-62a35744="">20</span><span
                                                            data-v-62a35744="">22</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                                            <div class="slide-box" data-v-62a35744=""><!----> <!---->
                                                <div class="product-box" data-v-62a35744=""><!----> <a
                                                        href="/product-deep-teal-floral-pleated-kurta-in-round-neck-22few17472-117945.html"
                                                        class="view-detail" data-v-62a35744="">
                                                        View Detail
                                                    </a> <a
                                                        href="/product-deep-teal-floral-pleated-kurta-in-round-neck-22few17472-117945.html"
                                                        data-v-62a35744="" class="">
                                                        <div class="w-100 min-height-pdp" data-v-62a35744=""><!---->
                                                            <img src="https://wforwoman.gumlet.io/product/22FEW17472-117945/300/22FEW17472-117945_1.JPG"
                                                                alt="Deep Teal Floral Pleated Kurta In Round Neck"
                                                                title="Deep Teal Floral Pleated Kurta In Round Neck"
                                                                data-v-62a35744=""></div>
                                                    </a> <!----> <a
                                                        href="/product-deep-teal-floral-pleated-kurta-in-round-neck-22few17472-117945.html"
                                                        class="hopeistrending" data-v-62a35744=""></a> <!----></div>
                                                <p data-v-62a35744=""><a
                                                        href="/product-deep-teal-floral-pleated-kurta-in-round-neck-22few17472-117945.html"
                                                        data-v-62a35744="" class="">Deep Teal Floral Pleated Kurta In
                                                        Round Neck</a></p>
                                                <div class="price" style="display:none;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="old-price" data-v-62a35744="">Rs.
                                                            2399</span> <span class="price" data-v-62a35744="">Rs.
                                                            2399</span> <span class="discount_percent font-bold"
                                                            style="display:;" data-v-62a35744="">
                                                            -
                                                            0%
                                                        </span></p>
                                                </div>
                                                <div class="price" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="price" data-v-62a35744="">Rs.
                                                            2399</span></p>
                                                </div>
                                                <div class="size" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744="">
                                                        Size -
                                                        <span data-v-62a35744="">6</span><span
                                                            data-v-62a35744="">8</span><span
                                                            data-v-62a35744="">10</span><span
                                                            data-v-62a35744="">12</span><span
                                                            data-v-62a35744="">14</span><span
                                                            data-v-62a35744="">16</span><span
                                                            data-v-62a35744="">18</span><span
                                                            data-v-62a35744="">20</span><span
                                                            data-v-62a35744="">22</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                                            <div class="slide-box" data-v-62a35744=""><!----> <!---->
                                                <div class="product-box" data-v-62a35744=""><!----> <a
                                                        href="/product-mint-blue-a-line-kurta-21few13510l-114183.html"
                                                        class="view-detail" data-v-62a35744="">
                                                        View Detail
                                                    </a> <a
                                                        href="/product-mint-blue-a-line-kurta-21few13510l-114183.html"
                                                        data-v-62a35744="" class="">
                                                        <div class="w-100 min-height-pdp" data-v-62a35744=""><!---->
                                                            <img src="https://wforwoman.gumlet.io/product/21FEW13510L-114183/300/20FEW13510L-114183_1.JPG"
                                                                alt="Mint Blue A-line Kurta"
                                                                title="Mint Blue A-line Kurta" data-v-62a35744=""></div>
                                                    </a> <!----> <!----> <!----></div>
                                                <p data-v-62a35744=""><a
                                                        href="/product-mint-blue-a-line-kurta-21few13510l-114183.html"
                                                        data-v-62a35744="" class="">Mint Blue A-line Kurta</a></p>
                                                <div class="price" style="display:none;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="old-price" data-v-62a35744="">Rs.
                                                            1899</span> <span class="price" data-v-62a35744="">Rs.
                                                            1899</span> <span class="discount_percent font-bold"
                                                            style="display:;" data-v-62a35744="">
                                                            -
                                                            0%
                                                        </span></p>
                                                </div>
                                                <div class="price" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="price" data-v-62a35744="">Rs.
                                                            1899</span></p>
                                                </div>
                                                <div class="size" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744="">
                                                        Size -
                                                        <span data-v-62a35744="">6</span><span
                                                            data-v-62a35744="">8</span><span
                                                            data-v-62a35744="">10</span><span
                                                            data-v-62a35744="">12</span><span
                                                            data-v-62a35744="">14</span><span
                                                            data-v-62a35744="">16</span><span
                                                            data-v-62a35744="">18</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                                            <div class="slide-box" data-v-62a35744=""><!----> <!---->
                                                <div class="product-box" data-v-62a35744=""><!----> <a
                                                        href="/product-royal-blue-pleated-kurta-with-embroidery-21auw16112-215858.html"
                                                        class="view-detail" data-v-62a35744="">
                                                        View Detail
                                                    </a> <a
                                                        href="/product-royal-blue-pleated-kurta-with-embroidery-21auw16112-215858.html"
                                                        data-v-62a35744="" class="">
                                                        <div class="w-100 min-height-pdp" data-v-62a35744=""><!---->
                                                            <img src="https://wforwoman.gumlet.io/product/21AUW16112-215858/300/21AUW16112-215858_1.JPG"
                                                                alt="Royal Blue Pleated Kurta with Embroidery"
                                                                title="Royal Blue Pleated Kurta with Embroidery"
                                                                data-v-62a35744=""></div>
                                                    </a> <!----> <!----> <!----></div>
                                                <p data-v-62a35744=""><a
                                                        href="/product-royal-blue-pleated-kurta-with-embroidery-21auw16112-215858.html"
                                                        data-v-62a35744="" class="">Royal Blue Pleated Kurta with
                                                        Embroidery</a></p>
                                                <div class="price" style="display:none;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="old-price" data-v-62a35744="">Rs.
                                                            1999</span> <span class="price" data-v-62a35744="">Rs.
                                                            1999</span> <span class="discount_percent font-bold"
                                                            style="display:;" data-v-62a35744="">
                                                            -
                                                            0%
                                                        </span></p>
                                                </div>
                                                <div class="price" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="price" data-v-62a35744="">Rs.
                                                            1999</span></p>
                                                </div>
                                                <div class="size" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744="">
                                                        Size -
                                                        <span data-v-62a35744="">6</span><span
                                                            data-v-62a35744="">8</span><span
                                                            data-v-62a35744="">10</span><span
                                                            data-v-62a35744="">12</span><span
                                                            data-v-62a35744="">14</span><span
                                                            data-v-62a35744="">16</span><span
                                                            data-v-62a35744="">18</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                                            <div class="slide-box" data-v-62a35744=""><!----> <!---->
                                                <div class="product-box" data-v-62a35744=""><!----> <a
                                                        href="/product-yellow-embroidered-a-line-kurta-20few13493-213696.html"
                                                        class="view-detail" data-v-62a35744="">
                                                        View Detail
                                                    </a> <a
                                                        href="/product-yellow-embroidered-a-line-kurta-20few13493-213696.html"
                                                        data-v-62a35744="" class="">
                                                        <div class="w-100 min-height-pdp" data-v-62a35744=""><!---->
                                                            <img src="https://wforwoman.gumlet.io/product/20FEW13493-213696/300/20FEW13493-213696_1.JPG"
                                                                alt="Yellow Embroidered A-Line Kurta"
                                                                title="Yellow Embroidered A-Line Kurta"
                                                                data-v-62a35744=""></div>
                                                    </a> <!----> <!----> <!----></div>
                                                <p data-v-62a35744=""><a
                                                        href="/product-yellow-embroidered-a-line-kurta-20few13493-213696.html"
                                                        data-v-62a35744="" class="">Yellow Embroidered A-Line Kurta</a>
                                                </p>
                                                <div class="price" style="display:none;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="old-price" data-v-62a35744="">Rs.
                                                            2799</span> <span class="price" data-v-62a35744="">Rs.
                                                            2799</span> <span class="discount_percent font-bold"
                                                            style="display:;" data-v-62a35744="">
                                                            -
                                                            0%
                                                        </span></p>
                                                </div>
                                                <div class="price" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="price" data-v-62a35744="">Rs.
                                                            2799</span></p>
                                                </div>
                                                <div class="size" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744="">
                                                        Size -
                                                        <span data-v-62a35744="">6</span><span
                                                            data-v-62a35744="">8</span><span
                                                            data-v-62a35744="">10</span><span
                                                            data-v-62a35744="">12</span><span
                                                            data-v-62a35744="">14</span><span
                                                            data-v-62a35744="">16</span><span
                                                            data-v-62a35744="">18</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                                            <div class="slide-box" data-v-62a35744=""><!----> <!---->
                                                <div class="product-box" data-v-62a35744=""><!----> <a
                                                        href="/product-black-solid-festive-kurta-with-metallic-embroidery-21skw14766-65626.html"
                                                        class="view-detail" data-v-62a35744="">
                                                        View Detail
                                                    </a> <a
                                                        href="/product-black-solid-festive-kurta-with-metallic-embroidery-21skw14766-65626.html"
                                                        data-v-62a35744="" class="">
                                                        <div class="w-100 min-height-pdp" data-v-62a35744=""><!---->
                                                            <img src="https://wforwoman.gumlet.io/product/21SKW14766-65626/300/21SKW14766-65626_1.JPG"
                                                                alt="Black Solid Festive kurta with Metallic Embroidery"
                                                                title="Black Solid Festive kurta with Metallic Embroidery"
                                                                data-v-62a35744=""></div>
                                                    </a> <!----> <!----> <!----></div>
                                                <p data-v-62a35744=""><a
                                                        href="/product-black-solid-festive-kurta-with-metallic-embroidery-21skw14766-65626.html"
                                                        data-v-62a35744="" class="">Black Solid Festive kurta with
                                                        Metallic Embroidery</a></p>
                                                <div class="price" style="display:none;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="old-price" data-v-62a35744="">Rs.
                                                            1799</span> <span class="price" data-v-62a35744="">Rs.
                                                            1799</span> <span class="discount_percent font-bold"
                                                            style="display:;" data-v-62a35744="">
                                                            -
                                                            0%
                                                        </span></p>
                                                </div>
                                                <div class="price" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="price" data-v-62a35744="">Rs.
                                                            1799</span></p>
                                                </div>
                                                <div class="size" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744="">
                                                        Size -
                                                        <span data-v-62a35744="">6</span><span
                                                            data-v-62a35744="">8</span><span
                                                            data-v-62a35744="">10</span><span
                                                            data-v-62a35744="">12</span><span
                                                            data-v-62a35744="">14</span><span
                                                            data-v-62a35744="">16</span><span
                                                            data-v-62a35744="">18</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                                            <div class="slide-box" data-v-62a35744=""><!----> <!---->
                                                <div class="product-box" data-v-62a35744=""><!----> <a
                                                        href="/product-purple-printed-kurta-22fes10739-118381.html"
                                                        class="view-detail" data-v-62a35744="">
                                                        View Detail
                                                    </a> <a href="/product-purple-printed-kurta-22fes10739-118381.html"
                                                        data-v-62a35744="" class="">
                                                        <div class="w-100 min-height-pdp" data-v-62a35744=""><!---->
                                                            <img src="https://wforwoman.gumlet.io/product/22FES10739-118381/300/22FES10739-118381_1.JPG"
                                                                alt="Purple Printed Kurta" title="Purple Printed Kurta"
                                                                data-v-62a35744=""></div>
                                                    </a> <!----> <!----> <!----></div>
                                                <p data-v-62a35744=""><a
                                                        href="/product-purple-printed-kurta-22fes10739-118381.html"
                                                        data-v-62a35744="" class="">Purple Printed Kurta</a></p>
                                                <div class="price" style="display:none;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="old-price" data-v-62a35744="">Rs.
                                                            2799</span> <span class="price" data-v-62a35744="">Rs.
                                                            2799</span> <span class="discount_percent font-bold"
                                                            style="display:;" data-v-62a35744="">
                                                            -
                                                            0%
                                                        </span></p>
                                                </div>
                                                <div class="price" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="price" data-v-62a35744="">Rs.
                                                            2799</span></p>
                                                </div>
                                                <div class="size" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744="">
                                                        Size -
                                                        <span data-v-62a35744="">6</span><span
                                                            data-v-62a35744="">8</span><span
                                                            data-v-62a35744="">10</span><span
                                                            data-v-62a35744="">12</span><span
                                                            data-v-62a35744="">14</span><span
                                                            data-v-62a35744="">16</span><span
                                                            data-v-62a35744="">18</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                                            <div class="slide-box" data-v-62a35744=""><!----> <!---->
                                                <div class="product-box" data-v-62a35744=""><!----> <a
                                                        href="/product-cobalt-blue-embroidered-kurta-22few17331-215902.html"
                                                        class="view-detail" data-v-62a35744="">
                                                        View Detail
                                                    </a> <a
                                                        href="/product-cobalt-blue-embroidered-kurta-22few17331-215902.html"
                                                        data-v-62a35744="" class="">
                                                        <div class="w-100 min-height-pdp" data-v-62a35744=""><!---->
                                                            <img src="https://wforwoman.gumlet.io/product/22FEW17331-215902/300/22FEW17331-215902_1.JPG"
                                                                alt="Cobalt Blue Embroidered Kurta"
                                                                title="Cobalt Blue Embroidered Kurta"
                                                                data-v-62a35744=""></div>
                                                    </a> <!----> <a
                                                        href="/product-cobalt-blue-embroidered-kurta-22few17331-215902.html"
                                                        class="hopeistrending" data-v-62a35744=""></a> <!----></div>
                                                <p data-v-62a35744=""><a
                                                        href="/product-cobalt-blue-embroidered-kurta-22few17331-215902.html"
                                                        data-v-62a35744="" class="">Cobalt Blue Embroidered Kurta</a>
                                                </p>
                                                <div class="price" style="display:none;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="old-price" data-v-62a35744="">Rs.
                                                            1999</span> <span class="price" data-v-62a35744="">Rs.
                                                            1999</span> <span class="discount_percent font-bold"
                                                            style="display:;" data-v-62a35744="">
                                                            -
                                                            0%
                                                        </span></p>
                                                </div>
                                                <div class="price" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="price" data-v-62a35744="">Rs.
                                                            1999</span></p>
                                                </div>
                                                <div class="size" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744="">
                                                        Size -
                                                        <span data-v-62a35744="">6</span><span
                                                            data-v-62a35744="">8</span><span
                                                            data-v-62a35744="">10</span><span
                                                            data-v-62a35744="">12</span><span
                                                            data-v-62a35744="">14</span><span
                                                            data-v-62a35744="">16</span><span
                                                            data-v-62a35744="">18</span><span
                                                            data-v-62a35744="">20</span><span
                                                            data-v-62a35744="">22</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                                            <div class="slide-box" data-v-62a35744=""><!----> <!---->
                                                <div class="product-box" data-v-62a35744=""><!----> <a
                                                        href="/product-light-teal-floral-print-kurta-in-keyhole-neckline-21skw16014-50547.html"
                                                        class="view-detail" data-v-62a35744="">
                                                        View Detail
                                                    </a> <a
                                                        href="/product-light-teal-floral-print-kurta-in-keyhole-neckline-21skw16014-50547.html"
                                                        data-v-62a35744="" class="">
                                                        <div class="w-100 min-height-pdp" data-v-62a35744=""><!---->
                                                            <img src="https://wforwoman.gumlet.io/product/21SKW16014-50547/300/21SKW16014-50547_1.JPG"
                                                                alt="Light Teal Floral Print Kurta in Keyhole Neckline"
                                                                title="Light Teal Floral Print Kurta in Keyhole Neckline"
                                                                data-v-62a35744=""></div>
                                                    </a> <!----> <!----> <!----></div>
                                                <p data-v-62a35744=""><a
                                                        href="/product-light-teal-floral-print-kurta-in-keyhole-neckline-21skw16014-50547.html"
                                                        data-v-62a35744="" class="">Light Teal Floral Print Kurta in
                                                        Keyhole Neckline</a></p>
                                                <div class="price" style="display:none;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="old-price" data-v-62a35744="">Rs.
                                                            1699</span> <span class="price" data-v-62a35744="">Rs.
                                                            1699</span> <span class="discount_percent font-bold"
                                                            style="display:;" data-v-62a35744="">
                                                            -
                                                            0%
                                                        </span></p>
                                                </div>
                                                <div class="price" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="price" data-v-62a35744="">Rs.
                                                            1699</span></p>
                                                </div>
                                                <div class="size" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744="">
                                                        Size -
                                                        <span data-v-62a35744="">6</span><span
                                                            data-v-62a35744="">8</span><span
                                                            data-v-62a35744="">10</span><span
                                                            data-v-62a35744="">12</span><span
                                                            data-v-62a35744="">14</span><span
                                                            data-v-62a35744="">16</span><span
                                                            data-v-62a35744="">18</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                                            <div class="slide-box" data-v-62a35744=""><!----> <!---->
                                                <div class="product-box" data-v-62a35744=""><!----> <a
                                                        href="/product-orange-rust-and-ecru-printed-a-line-kurta-22few17317-118121.html"
                                                        class="view-detail" data-v-62a35744="">
                                                        View Detail
                                                    </a> <a
                                                        href="/product-orange-rust-and-ecru-printed-a-line-kurta-22few17317-118121.html"
                                                        data-v-62a35744="" class="">
                                                        <div class="w-100 min-height-pdp" data-v-62a35744=""><!---->
                                                            <img src="https://wforwoman.gumlet.io/product/22FEW17317-118121/300/22FEW17317-118121.JPG"
                                                                alt="Orange Rust and Ecru Printed A-line Kurta"
                                                                title="Orange Rust and Ecru Printed A-line Kurta"
                                                                data-v-62a35744=""></div>
                                                    </a> <!----> <a
                                                        href="/product-orange-rust-and-ecru-printed-a-line-kurta-22few17317-118121.html"
                                                        class="hopeistrending" data-v-62a35744=""></a> <!----></div>
                                                <p data-v-62a35744=""><a
                                                        href="/product-orange-rust-and-ecru-printed-a-line-kurta-22few17317-118121.html"
                                                        data-v-62a35744="" class="">Orange Rust and Ecru Printed A-line
                                                        Kurta</a></p>
                                                <div class="price" style="display:none;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="old-price" data-v-62a35744="">Rs.
                                                            1999</span> <span class="price" data-v-62a35744="">Rs.
                                                            1999</span> <span class="discount_percent font-bold"
                                                            style="display:;" data-v-62a35744="">
                                                            -
                                                            0%
                                                        </span></p>
                                                </div>
                                                <div class="price" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="price" data-v-62a35744="">Rs.
                                                            1999</span></p>
                                                </div>
                                                <div class="size" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744="">
                                                        Size -
                                                        <span data-v-62a35744="">6</span><span
                                                            data-v-62a35744="">8</span><span
                                                            data-v-62a35744="">10</span><span
                                                            data-v-62a35744="">12</span><span
                                                            data-v-62a35744="">14</span><span
                                                            data-v-62a35744="">16</span><span
                                                            data-v-62a35744="">18</span><span
                                                            data-v-62a35744="">20</span><span
                                                            data-v-62a35744="">22</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                                            <div class="slide-box" data-v-62a35744=""><!----> <!---->
                                                <div class="product-box" data-v-62a35744=""><!----> <a
                                                        href="/product-light-green-dobby-straight-kurta-22few17458-312208.html"
                                                        class="view-detail" data-v-62a35744="">
                                                        View Detail
                                                    </a> <a
                                                        href="/product-light-green-dobby-straight-kurta-22few17458-312208.html"
                                                        data-v-62a35744="" class="">
                                                        <div class="w-100 min-height-pdp" data-v-62a35744=""><!---->
                                                            <img src="https://wforwoman.gumlet.io/product/22FEW17458-312208/300/22FEW17458-312208_1.JPG"
                                                                alt="Light Green Dobby Straight Kurta "
                                                                title="Light Green Dobby Straight Kurta "
                                                                data-v-62a35744=""></div>
                                                    </a> <!----> <a
                                                        href="/product-light-green-dobby-straight-kurta-22few17458-312208.html"
                                                        class="hopeistrending" data-v-62a35744=""></a> <!----></div>
                                                <p data-v-62a35744=""><a
                                                        href="/product-light-green-dobby-straight-kurta-22few17458-312208.html"
                                                        data-v-62a35744="" class="">Light Green Dobby Straight Kurta
                                                    </a></p>
                                                <div class="price" style="display:none;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="old-price" data-v-62a35744="">Rs.
                                                            1899</span> <span class="price" data-v-62a35744="">Rs.
                                                            1899</span> <span class="discount_percent font-bold"
                                                            style="display:;" data-v-62a35744="">
                                                            -
                                                            0%
                                                        </span></p>
                                                </div>
                                                <div class="price" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="price" data-v-62a35744="">Rs.
                                                            1899</span></p>
                                                </div>
                                                <div class="size" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744="">
                                                        Size -
                                                        <span data-v-62a35744="">6</span><span
                                                            data-v-62a35744="">8</span><span
                                                            data-v-62a35744="">10</span><span
                                                            data-v-62a35744="">12</span><span
                                                            data-v-62a35744="">14</span><span
                                                            data-v-62a35744="">16</span><span
                                                            data-v-62a35744="">18</span><span
                                                            data-v-62a35744="">20</span><span
                                                            data-v-62a35744="">22</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-6 col-6">
                                            <div class="slide-box" data-v-62a35744=""><!----> <!---->
                                                <div class="product-box" data-v-62a35744=""><!----> <a
                                                        href="/product-ecru-printed-kurta-with-embroidery-22few14787-116329.html"
                                                        class="view-detail" data-v-62a35744="">
                                                        View Detail
                                                    </a> <a
                                                        href="/product-ecru-printed-kurta-with-embroidery-22few14787-116329.html"
                                                        data-v-62a35744="" class="">
                                                        <div class="w-100 min-height-pdp" data-v-62a35744=""><!---->
                                                            <img src="https://wforwoman.gumlet.io/product/22FEW14787-116329/300/22FEW14787-116329_1.JPG"
                                                                alt="Ecru Printed Kurta with Embroidery"
                                                                title="Ecru Printed Kurta with Embroidery"
                                                                data-v-62a35744=""></div>
                                                    </a> <!----> <!----> <!----></div>
                                                <p data-v-62a35744=""><a
                                                        href="/product-ecru-printed-kurta-with-embroidery-22few14787-116329.html"
                                                        data-v-62a35744="" class="">Ecru Printed Kurta with
                                                        Embroidery</a></p>
                                                <div class="price" style="display:none;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="old-price" data-v-62a35744="">Rs.
                                                            2599</span> <span class="price" data-v-62a35744="">Rs.
                                                            2599</span> <span class="discount_percent font-bold"
                                                            style="display:;" data-v-62a35744="">
                                                            -
                                                            0%
                                                        </span></p>
                                                </div>
                                                <div class="price" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744=""><span class="price" data-v-62a35744="">Rs.
                                                            2599</span></p>
                                                </div>
                                                <div class="size" style="display:;" data-v-62a35744="">
                                                    <p data-v-62a35744="">
                                                        Size -
                                                        <span data-v-62a35744="">6</span><span
                                                            data-v-62a35744="">8</span><span
                                                            data-v-62a35744="">10</span><span
                                                            data-v-62a35744="">12</span><span
                                                            data-v-62a35744="">14</span><span
                                                            data-v-62a35744="">16</span><span
                                                            data-v-62a35744="">18</span><span
                                                            data-v-62a35744="">20</span><span
                                                            data-v-62a35744="">22</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product_loader" style="display:;"><img src="/images/giphy.gif"></div>
                                </div>



                            </div>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
  
<script>
export default {
    data: () => ({
       

        options1: [
          { text: 'Kurtas', value: 'Kurtas' },
          { text: 'Sets & Dresses', value: 'Sets & Dresses' },
          { text: 'TOP WEAR > KURTAS', value: 'TOP WEAR > KURTAS' },
          { text: 'Tops', value: 'Tops' }
        ],
        options2: [
          { text: 'Rs 0 to Rs 2000', value: 'Rs 0 to Rs 2000' },
          { text: 'Rs 2000 to Rs 4000', value: 'Rs 2000 to Rs 4000' },
          { text: 'Rs 4000 to Rs 6000', value: 'Rs 4000 to Rs 6000' },
          { text: 'Rs 6000 to Rs 8000', value: 'Rs 6000 to Rs 8000' }
        ],
        options3: [
          { text: '30%', value: '30%' },
          { text: '40%', value: '34%' },
          { text: '60%', value: '60%' },
          { text: '70%', value: '70%' }
        ],
        options4: [ 
          { text: 'Orange', value: 'orange' },
          { text: 'Blue', value: 'Blue' },
          { text: 'Yellow', value: 'Yellow' },
          { text: 'Green', value: 'green' }
        ],
        options5: [
          { text: 'XS', value: 'XS' },
          { text: 'S', value: 'S' },
          { text: 'M', value: 'M' },
          { text: 'L', value: 'L' },
          { text: 'XL', value: 'XL' },
          { text: 'XXL', value: 'XXL' },
        ],
        options6: [
          { text: 'Boat Neck', value: 'Boat Neck' },
          { text: 'Collared V', value: 'Collared V' },
          { text: 'Keyhole Neckline', value: 'Keole Neckline' },
          { text: 'Grape', value: 'grape' }
        ],
        options7: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape' }
        ],
        options8: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape' }
        ],
        options9: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape' }
        ],
        options10: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape' }
        ],
        options11: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape' }
        ],
        options12: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape' }
        ],
        options13: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape' }
        ],
        options14: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape' }
        ],
        
    }),
}
</script>

