<template>
    <section class="useful-article">
        <div class="conteiner">
            <div class="useful-article__wrapper">
                <h4 class="useful-article__title">Полезные статьи</h4>
                <h2 class="useful-article__descriptions">Лучшие советы по подбору дорогих подарков</h2>


                <ul>
                    <!-- короче цикл и отрисовка надо будет да -->
                </ul>


                <button class="useful-article__button">
                    <a class="useful-article__link" href="/about">ЧИТАТЬ НАШ БЛОГ</a>
                </button>
            </div>

        </div>
    </section>

</template>


<script>



</script>

<style lang="scss" scoped>
.useful-article {
  
    width: 100%;

    &__wrapper {
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    }


    &__title {
        font-size: 21px;
        color: #333333;
    }

    &__descriptions {
        font-family: "NotoSerif", "Arial", sans-serif;
        font-size: 30px;
        color: #333333;

    }

    &__button {
        width: 255px;
        height: 51px;
        background-color: #333333;
        border: none;



    }

    &__link {
        font-size: 18px;
        color: #FFFFFF;
        font-weight:400;

    }

}
</style>