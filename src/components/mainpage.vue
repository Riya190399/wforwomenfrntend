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

                    <h5>acc</h5>
                    <h5>cart</h5>

                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <!--  -->

        <!-- sidebar -->
        <v-main class="grey lighten-3">
            <v-container class="pa-2 ma-1">
                <v-row >
                    <v-col cols="3">
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
                                                <b-form-checkbox-group :options="options1" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Price</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options2" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Discount</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options3" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Colour</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options4" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Size</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options5" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Neck Type</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options6" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Sleeve</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options7" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Occasion</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options8" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Length</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options9"  name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Fastening/Closure</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options10" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Pattern</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options11"  name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Ornamentation</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options12" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Fabric Family</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options13"  name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                    <v-divider class="my-2"></v-divider>
                                    <v-list-group :value="false">
                                        <template v-slot:activator><v-list-item-title>Closure</v-list-item-title></template>
                                        <v-list>
                                            <b-form-group class="pa-2 ma-2">
                                                <b-form-checkbox-group :options="options14" name="flavour-2a" stacked></b-form-checkbox-group>
                                            </b-form-group>
                                        </v-list>
                                    </v-list-group>
                                </v-list>
                            </v-card>
                        </v-sheet>
                    </v-col>
                    <!-- side bar ends ere -->


 <!-- main view -->
 <v-main class="grey lighten-3">
    <v-container class="pa-2 ma-2" fluid>    
        <v-row justify="space-around">
                    <v-col cols="20">                       
                            <v-sheet rounded="lg">
                            <v-card elevation="4">
                            <!-- product card here -->
                            <ShoppingCardVue />
                            <!-- product card ends here -->
                            </v-card>
                        </v-sheet>                      
                    </v-col>
        </v-row>
    </v-container>
 </v-main>
 <!--  main view ends-->
                </v-row>
            </v-container>           
        </v-main>
    </v-app>
</template>
  

<script>

// import card from './card.vue';
import ShoppingCardVue from './scrollingcard.vue';
// import infiniteScroll from './infinitescroll.vue';


export default {
    components:{ ShoppingCardVue,
    
},

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
    // methods here

    methods: {},

  
}

</script>

