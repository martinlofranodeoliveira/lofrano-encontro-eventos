const text = (element) => element.textContent.replace(/\s+/gu, " ").trim();

export default [
  {
    name: "encontro-01 — apresenta a programação de Música",
    run: async ({ ui, user, assert, within }) => {
      await user.click(ui.getByRole("button", { name: "Música", exact: true }));
      assert.equal(
        ui
          .getByRole("button", { name: "Música", exact: true })
          .getAttribute("aria-pressed"),
        "true",
      );
      for (const [name, hour] of [
        ["Som de começo", "16:00"],
        ["Entre ritmos e encontros", "19:00"],
        ["A noite continua", "21:00"],
      ]) {
        const session = ui
          .getByRole("heading", { name, exact: true })
          .closest("article");
        assert.ok(
          within(session).getByText(hour, { selector: "time", exact: true }),
        );
      }
      assert.equal(
        ui.queryByRole("heading", {
          name: "O futuro é uma conversa",
          exact: true,
        }),
        null,
      );
    },
  },
  {
    name: "encontro-02 — adiciona e remove uma experiência da agenda local",
    run: async ({ ui, user, assert }) => {
      await user.click(ui.getByRole("button", { name: "Música", exact: true }));
      await user.click(
        ui.getByRole("button", {
          name: "Adicionar Entre ritmos e encontros à agenda demo",
          exact: true,
        }),
      );
      const remove = ui.getByRole("button", {
        name: "Remover Entre ritmos e encontros da agenda demo",
        exact: true,
      });
      assert.equal(remove.getAttribute("aria-pressed"), "true");
      assert.match(
        text(
          ui.getByText("na sua agenda local", { exact: true }).parentElement,
        ),
        /^01\s*na sua agenda local$/u,
      );
      assert.equal(
        text(ui.getByRole("status")),
        "1 experiência(s) selecionada(s) nesta tela. Não é ingresso nem inscrição.",
      );
      await user.click(remove);
      assert.equal(
        ui
          .getByRole("button", {
            name: "Adicionar Entre ritmos e encontros à agenda demo",
            exact: true,
          })
          .getAttribute("aria-pressed"),
        "false",
      );
      assert.match(
        text(
          ui.getByText("na sua agenda local", { exact: true }).parentElement,
        ),
        /^00\s*na sua agenda local$/u,
      );
      assert.equal(
        text(ui.getByRole("status")),
        "Adicione experiências para testar sua agenda. Nenhuma inscrição será feita.",
      );
    },
  },
  {
    name: "encontro-03 — preserva a agenda quando a categoria muda",
    run: async ({ ui, user, assert, within }) => {
      await user.click(ui.getByRole("button", { name: "Música", exact: true }));
      await user.click(
        ui.getByRole("button", {
          name: "Adicionar Entre ritmos e encontros à agenda demo",
          exact: true,
        }),
      );
      await user.click(
        ui.getByRole("button", { name: "Experiências", exact: true }),
      );
      for (const [name, hour] of [
        ["Desenhar novas possibilidades", "11:00"],
        ["Uma mesa, muitas histórias", "15:00"],
        ["A cidade em outro olhar", "18:00"],
      ]) {
        const session = ui
          .getByRole("heading", { name, exact: true })
          .closest("article");
        assert.ok(
          within(session).getByText(hour, { selector: "time", exact: true }),
        );
      }
      assert.equal(
        ui.queryByRole("heading", {
          name: "Entre ritmos e encontros",
          exact: true,
        }),
        null,
      );
      assert.match(
        text(
          ui.getByText("na sua agenda local", { exact: true }).parentElement,
        ),
        /^01\s*na sua agenda local$/u,
      );
      assert.equal(
        text(ui.getByRole("status")),
        "1 experiência(s) selecionada(s) nesta tela. Não é ingresso nem inscrição.",
      );
      await user.click(ui.getByRole("button", { name: "Música", exact: true }));
      assert.equal(
        ui
          .getByRole("button", {
            name: "Remover Entre ritmos e encontros da agenda demo",
            exact: true,
          })
          .getAttribute("aria-pressed"),
        "true",
      );
    },
  },
];
