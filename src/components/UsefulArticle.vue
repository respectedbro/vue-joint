<template>
  <section class="useful-article">
    <div class="container">
      <div class="useful-article__wrapper">
        <h4 class="useful-article__title">Полезные статьи</h4>
        <h2 class="useful-article__descriptions">
          Лучшие советы по подбору дорогих подарков
        </h2>

        <ul class="useful-article__list">
          <li v-for="article in articles" :key="article.id"
            :class="`useful-article__item useful-article__item--font-${article.id}`">
            <router-link :to="`/article?id=${article.id}`" class="useful-article__link">
              <p class="useful-article__content">
                {{ article.content }}
              </p>
            </router-link>
          </li>
        </ul>

        <button class="useful-article__button">
          <a class="useful-article__link" href="/about">ЧИТАТЬ НАШ БЛОГ</a>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { articles } from "@/constants/articles";

const getUrl = (id) => `/article/${id}`;
</script>

<style lang="scss" scoped>
.useful-article {
  padding: 120px 0 0 0;

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  &__title {
    font-size: 21px;
    color: #333333;
  }

  &__descriptions {
    font-family: "NotoSerif", "Arial", sans-serif;
    text-align: center;
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
    color: #ffffff;


    &--btn {
      font-size: 18px;
    }


  }

  &__list {
    padding: 45px 0 45px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
  }

  &__item {

    width: 350px;
    height: 370px;
    display: flex;
    align-items: end;
    justify-content: center;



    &--font-1 {
      background-image: url("../assets/images/articles/article-1.webp");
    }

    &--font-2 {
      background-image: url("@/assets/images/articles/article-2.webp");
    }

    &--font-3 {
      background-image: url("../assets/images/articles/article-3.webp");
    }





  }



  &__content {
    font-size: 21px;
    color: #ffffff;
    text-align: center;
    margin: 0 0 35px 0;
  }




}
</style>
