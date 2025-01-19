{pkgs ? import <nixpkgs> {config = {allowUnfree = true;};}}:
pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs_20
    pkgs.nodePackages.npm
    pkgs.nodePackages.yarn
  ];

  shellHook = ''
    npm config set prefix "~/.npm-global"
    export PATH=$PATH:~/.npm-global/bin
    # Run `yarn install` if node_modules is missing
    if [ ! -d node_modules ]; then
      echo "node_modules not found, running 'yarn install'..."
      yarn install
    else
      echo "node_modules directory exists."
    fi
  '';
}
