# vim: tabstop=2 shiftwidth=2 softtabstop=2 expandtab:
{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:

{
  # https://devenv.sh/basics/
  env.GREET = "devenv";

  # https://devenv.sh/packages/
  packages = [
  ];

  # https://devenv.sh/languages/
  languages.typescript.enable = true;
  languages.typescript.lsp.enable = true;

  scripts.hello.exec = ''
    echo hello from $GREET
  '';

  enterShell = ''
    echo node: $(node -v | tr -d '\n')
    echo TypeScript compiler: $(tsc -v | tr -d '\n')
  '';

  # https://devenv.sh/tests/
  enterTest = ''
    echo "Running tests"
    git --version | grep --color=auto "${pkgs.git.version}"
  '';
}
